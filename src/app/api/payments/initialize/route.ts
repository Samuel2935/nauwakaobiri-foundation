import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import paystack from "@/lib/paystack";

export async function POST(req: NextRequest) {
  try {
    const { email, amount } = await req.json();

    if (!email || !amount) {
      return NextResponse.json(
        { message: "Email and amount are required." },
        { status: 400 }
      );
    }

    const reference = crypto.randomUUID();

    const response = await paystack.post("/transaction/initialize", {
      email,
      amount: amount * 100, // Kobo
      reference,
      callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.response?.data?.message || "Unable to initialize payment",
      },
      { status: 500 }
    );
  }
}