import { PrismaClient } from "./node_modules/.prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.genre.findMany();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
