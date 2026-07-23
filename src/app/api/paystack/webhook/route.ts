import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.text();

  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY!)
    .update(body)
    .digest("hex");

  const signature = req.headers.get("x-paystack-signature");

  if (hash !== signature) {
    return new Response("Invalid signature", {
      status: 401,
    });
  }

  const event = JSON.parse(body);

  if (event.event === "charge.success") {
    console.log(event.data.reference);

    // Update your database here
    // Mark order as paid
    // Send email
    // Generate receipt
  }

  return new Response("OK");
}