import { NextRequest, NextResponse } from "next/server";
import paystack from "@/lib/paystack";

export async function POST(req: NextRequest) {
  try {
    const { reference } = await req.json();

    const response = await paystack.get(
      `/transaction/verify/${reference}`
    );

    return NextResponse.json(response.data);
  } catch {
    return NextResponse.json(
      { message: "Verification failed" },
      { status: 500 }
    );
  }
}