import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-white px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-12 w-12 text-emerald-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Payment Successful 🎉
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you! Your payment has been received successfully.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          We are verifying your transaction. Once confirmed, your account or
          order will be updated automatically.
        </p>

        <div className="mt-10 space-y-4">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
          >
            Return Home
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Go to Dashboard
          </Link>
        </div>

        <div className="mt-8 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-left">
          <p className="text-sm font-medium text-emerald-800">
            What's next?
          </p>

          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-emerald-700">
            <li>Your payment is being verified.</li>
            <li>A confirmation email will be sent if applicable.</li>
            <li>Your purchased service or feature will be activated shortly.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}