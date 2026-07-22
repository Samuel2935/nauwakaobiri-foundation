"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <SearchX className="h-10 w-10 text-green-700" />
        </div>

        <h1 className="text-5xl font-bold text-gray-900">Oops!!!</h1>

        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-green-700 px-5 py-3 text-white hover:bg-green-800"
          >
            <Home className="mr-2 inline h-4 w-4" />
            Home
          </Link>

          <button
            onClick={() => router.back()}
            className="rounded-lg border px-3 py-2 hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 inline h-4 w-4" />
            Back
          </button>
        </div>
      </div>
    </main>
  );
}