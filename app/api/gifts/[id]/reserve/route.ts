import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    // Check if gift exists and is not already reserved
    const existingGift = await prisma.gift.findUnique({
      where: { id }
    });

    if (!existingGift) {
      return NextResponse.json({ error: 'Gift not found' }, { status: 404 });
    }

    if (existingGift.isReserved) {
      return NextResponse.json({ error: 'Gift already reserved' }, { status: 400 });
    }

    // Update the gift
    const updatedGift = await prisma.gift.update({
      where: { id },
      data: {
        isReserved: true,
        reservedBy: name
      }
    });

    return NextResponse.json(updatedGift);
  } catch (error) {
    console.error('Error reserving gift:', error);
    return NextResponse.json({ error: 'Failed to reserve gift' }, { status: 500 });
  }
}