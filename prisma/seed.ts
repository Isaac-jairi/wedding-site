import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.gift.deleteMany();
  
  // Create gifts
  await prisma.gift.createMany({
    data: [
      {
        name: 'Jogo de Panelas',
        description: 'Conjunto de panelas antiaderentes de alta qualidade para a nossa nova cozinha.',
        price: 599.90,
        imageUrl: 'https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.example.com/jogo-panelas',
      },
      {
        name: 'Liquidificador',
        description: 'Liquidificador potente para preparar nossas refeições do dia a dia.',
        price: 299.90,
        imageUrl: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.example.com/liquidificador',
      },
      {
        name: 'Jogo de Toalhas',
        description: 'Conjunto de toalhas macias e absorventes para o nosso novo lar.',
        price: 199.90,
        imageUrl: 'https://images.pexels.com/photos/4210312/pexels-photo-4210312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.example.com/toalhas',
      },
      {
        name: 'Cafeteira',
        description: 'Cafeteira automática para nossas manhãs perfeitas juntos.',
        price: 449.90,
        imageUrl: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.example.com/cafeteira',
      },
      {
        name: 'Jogo de Copos',
        description: 'Copos elegantes para nossas refeições e recepções em casa.',
        price: 179.90,
        imageUrl: 'https://images.pexels.com/photos/1203804/pexels-photo-1203804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.example.com/copos',
      },
      {
        name: 'Jogo de Cama',
        description: 'Lençóis de algodão egípcio para o máximo conforto.',
        price: 399.90,
        imageUrl: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.example.com/jogo-cama',
      }
    ]
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });