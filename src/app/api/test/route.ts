import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    // redirect or render something else
    NextResponse.json(session);
  }
}
