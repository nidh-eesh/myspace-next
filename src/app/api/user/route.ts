import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';
import { auth } from '@/utils/auth';

export async function PUT(req: Request) {
  const session = await auth();
  const currentUserEmail = session?.user?.email!;
  
  const data = await req.json();
  data.age = Number(data.age);

  const user = await prisma.user.update({
    where: {
      email: currentUserEmail,
    },
    data,
  });

  return NextResponse.json(user);
}