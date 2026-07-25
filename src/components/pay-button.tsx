"use client";

export default function PayButton() {
  async function pay() {
    const response = await fetch("/api/payments/initialize", {
      method: "POST",
      body: JSON.stringify({
        email: "samuel@test.com",
        amount: 5000,
      }),
    });

    const data = await response.json();

    window.location.href = data.data.authorization_url;
  }

  return <button onClick={pay}>Pay ₦5,000</button>;
}