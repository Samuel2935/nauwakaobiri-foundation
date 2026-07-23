"use client";

import { useState } from "react";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  async function pay() {
    setLoading(true);

    const res = await fetch("/api/paystack/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "user@email.com",
        amount: 5000,
      }),
    });

    const data = await res.json();

    if (data.status) {
      window.location.href = data.data.authorization_url;
    }

    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={pay}
        disabled={loading}
        className="rounded-lg bg-green-600 px-6 py-3 text-white"
      >
        {loading ? "Redirecting..." : "Pay ₦5,000"}
      </button>
    </div>
  );
}