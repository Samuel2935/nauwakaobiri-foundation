"use client";

import { useState } from "react";

import { Check, Copy } from "lucide-react";

interface DonationDetail {
  label: string;
  value: string;
  copyable?: boolean;
}

interface DonationAccount {
  currency: string;
  currencyName: string;
  flag: string;
  description: string;
  details: DonationDetail[];
}

interface DonationAccountCardProps {
  account: DonationAccount;
}

export default function DonationAccountCard({
  account,
}: DonationAccountCardProps) {
  const [copiedValue, setCopiedValue] = useState<string | null>(
    null,
  );

  async function handleCopy(value: string) {
    try {
      await navigator.clipboard.writeText(value);

      setCopiedValue(value);

      window.setTimeout(() => {
        setCopiedValue(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy account detail:", error);
    }
  }

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
              <span aria-hidden="true">
                {account.flag}
              </span>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900">
                {account.currencyName}
              </h2>

              <p className="mt-1 text-sm font-semibold text-emerald-700">
                {account.currency}
              </p>
            </div>
          </div>

          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
            {account.currency}
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-gray-600">
          {account.description}
        </p>
      </div>

      {/* Account Details */}
      <div className="p-6 sm:p-7">
        <div className="space-y-5">
          {account.details.map((detail) => {
            const isCopied = copiedValue === detail.value;

            return (
              <div key={detail.label}>
                <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
                  {detail.label}
                </p>

                <div className="flex items-center justify-between gap-4 rounded-xl bg-gray-50 px-4 py-3">
                  <p className="min-w-0 break-all text-sm font-semibold text-gray-900">
                    {detail.value}
                  </p>

                  {detail.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(detail.value)}
                      className="
                        inline-flex
                        shrink-0
                        items-center
                        gap-2
                        rounded-lg
                        px-3
                        py-2
                        text-xs
                        font-bold
                        text-emerald-700
                        transition-colors
                        hover:bg-emerald-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-emerald-500
                        focus:ring-offset-2
                      "
                      aria-label={
                        isCopied
                          ? `${detail.label} copied`
                          : `Copy ${detail.label}`
                      }
                    >
                      {isCopied ? (
                        <>
                          <Check
                            size={14}
                            aria-hidden="true"
                          />

                          Copied
                        </>
                      ) : (
                        <>
                          <Copy
                            size={14}
                            aria-hidden="true"
                          />

                          Copy
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transfer note */}
        <div className="mt-7 border-t border-gray-100 pt-5">
          <p className="text-xs leading-5 text-gray-500">
            Please ensure your transfer is made in{" "}
            <span className="font-semibold text-gray-700">
              {account.currencyName}
            </span>{" "}
            to avoid currency conversion issues.
          </p>
        </div>
      </div>
    </article>
  );
}