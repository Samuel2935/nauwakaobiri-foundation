"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SuccessPage() {
  const params = useSearchParams();

  useEffect(() => {
    const reference = params.get("reference");

    if (!reference) return;

    fetch("/api/payments/verify", {
      method: "POST",
      body: JSON.stringify({ reference }),
    });
  }, [params]);

  return <h1>Verifying Payment...</h1>;
}