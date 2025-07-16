// app/api/gifts/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export interface Gift {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  urlStripe: string;
  urlPix: string;
  isReserved: boolean;
  reservedBy: string | null;
}

export async function GET() {
  try {
    // 1) Busca preços e expande product
    const prices = await stripe.prices.list({
      active: true,
      limit: 100,
      expand: ['data.product'],
    });

    // 2) Busca payment links com line_items expandidos
    const links = await stripe.paymentLinks.list({
      active: true,
      limit: 100,
      expand: ['data.line_items'],
    });

    // 3) Mapeia price.id → paymentLink.url com guardas de existência
    const linkMap: Record<string, string> = {};
    for (const link of links.data) {
      // só prossiga se line_items existir e tiver .data
      const items = link.line_items?.data;
      if (!items) continue;

      for (const item of items) {
        // só prossiga se price e price.id existirem
        const priceId = item.price?.id;
        if (!priceId) continue;

        // link.url tem certeza (!) pois listado com active: true
        linkMap[priceId] = link.url!;
      }
    }

    // 4) Monta o array de gifts usando metadata e o linkMap
    const gifts: Gift[] = prices.data
  .filter((price) => {
    const product = price.product as Stripe.Product;
    return product.active; 
  })
  .map((price) => {
    const product = price.product as Stripe.Product;
    const metadata = product.metadata || {};

    return {
      id: price.id,
      name: product.name,
      description: product.description ?? '',
      price: (price.unit_amount ?? 0) / 100,
      imageUrl: product.images[0] ?? '',
      urlStripe: metadata.urlStripe || linkMap[price.id] || '',
      urlPix: metadata.urlPix || '',
      isReserved: false,
      reservedBy: null,
    };
  });
     

    return NextResponse.json(gifts);
  } catch (err) {
    console.error('Stripe fetch error:', err);
    return NextResponse.json(
      { error: 'Erro ao buscar presentes no Stripe.' },
      { status: 500 }
    );
  }
}
