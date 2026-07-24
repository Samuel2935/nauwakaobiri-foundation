"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { leadership } from "@/data/site";

function LeaderImage({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-emerald-800 text-4xl font-black text-white">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

export default function FoundersSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              The people behind the mission
            </p>

            <h2 className="font-display mb-2 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Our Leaders
            </h2>

            <div className="h-1 w-14 bg-emerald-600" />
          </div>

          <Link
            href="/"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-700 hover:text-emerald-900"
          >
            All Stories
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="group flex flex-col overflow-hidden rounded-md bg-white transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-md bg-emerald-100">
                <LeaderImage
                  src={leader.image}
                  alt={leader.name}
                  initials={leader.initials}
                />

                {/* <div className="absolute left-4 top-4 bg-emerald-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {leader.title}
                </div> */}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display mb-3 text-base font-bold leading-snug text-gray-900">
                  {leader.name}
                </h3>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                  {leader.bio}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                      {leader.initials}
                    </div>

                    <span className="text-sm font-semibold text-gray-800">
                      {leader.name}
                    </span>
                  </div>

                  <Link
                    href={`/success-stories/${leader.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-xs font-bold text-emerald-700 transition-colors hover:text-emerald-900"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}