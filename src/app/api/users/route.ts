import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
  const users = await prisma.session.findMany();
  console.log(users);

  return NextResponse.json(users);
}
