import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Heart,
  ShieldCheck,
} from "lucide-react";

import { donationAccounts } from "@/data/site";

import DonationAccountCard from "@/components/donation/donation-account-card";

export const metadata: Metadata = {
  title: "Donate | Nuwakobiri Youth Foundation",

  description:
    "Support the Nuwakobiri Youth Foundation through a bank transfer using our available donation accounts in Naira, Pounds, Euros, and US Dollars.",
};

export default function DonatePage() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-emerald-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
          <Link
            href="/"
            className="
              group
              mb-10
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-emerald-100
              transition-colors
              hover:text-white
            "
          >
            <ArrowLeft
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <Heart
                  size={20}
                  fill="currentColor"
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Support Our Mission
              </p>
            </div>

            <h1 className="font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Make a Difference
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50 sm:text-lg">
              Your support helps us continue our work in youth
              empowerment, community development, education, and
              humanitarian outreach.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DONATION INTRO
      ====================================================== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Bank Transfer
          </p>

          <h2 className="mt-3 font-display text-3xl font-black text-gray-900 sm:text-4xl">
            Choose your currency
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            You can support the Nuwakobiri Youth Foundation by
            transferring your donation directly to one of our accounts
            below. Select the account that matches the currency of
            your transfer.
          </p>
        </div>
      </section>

      {/* =====================================================
          ACCOUNT DETAILS
      ====================================================== */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {donationAccounts.map((account) => (
              <DonationAccountCard
                key={account.currency}
                account={account}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECURITY / VERIFICATION NOTICE
      ====================================================== */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <ShieldCheck
                size={20}
                aria-hidden="true"
              />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Before making a transfer
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Please verify the account details and currency
                carefully before completing your transfer. If you
                need confirmation about a donation or account detail,
                please contact the foundation through our official
                contact channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}
      <section className="bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 sm:py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Need assistance?
            </p>

            <h2 className="mt-2 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Have questions about donating?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
              Reach out to our team if you need help with your
              donation or transfer.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-full
              bg-emerald-700
              px-6
              py-3
              text-sm
              font-bold
              text-white
              transition-colors
              hover:bg-emerald-800
            "
          >
            Contact Us

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}