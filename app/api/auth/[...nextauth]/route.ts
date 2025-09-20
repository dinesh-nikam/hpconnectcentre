import NextAuth from "next-auth";
import { authOptions } from "../auth-config";
import { NextRequest } from "next/server";

async function handler(request: NextRequest) {
  return NextAuth(authOptions)(request);
}

export const GET = handler;
export const POST = handler;
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
