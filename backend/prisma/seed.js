import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('123456', 10);

    const admin = await prisma.user.upsert({
        where: { email: 'carlos@example.com' },
        update: {},
        create: {
            name: 'Administrador',
            email: 'carlos@example.com',
            password: hashedPassword,
            role: 'ADMIN',
            isActive: true,
        },
    });

    console.log('Usuário administrador criado:', admin);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
