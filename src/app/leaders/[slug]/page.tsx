import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { notFound } from "next/navigation";

import { leadership } from "@/data/site";

interface LeaderPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate the known leader routes at build time.
 */
export function generateStaticParams() {
  return leadership.map((leader) => ({
    slug: leader.slug,
  }));
}

/**
 * Generate SEO metadata for each leader.
 */
export async function generateMetadata({
  params,
}: LeaderPageProps): Promise<Metadata> {
  const { slug } = await params;

  const leader = leadership.find(
    (item) => item.slug === slug,
  );

  if (!leader) {
    return {
      title: "Leader Not Found | Nuwakobiri Youth Foundation",
    };
  }

  return {
    title: `${leader.name} | Nuwakobiri Youth Foundation`,

    description: leader.bio,

    openGraph: {
      title: `${leader.name} | Nuwakobiri Youth Foundation`,
      description: leader.bio,
      type: "profile",
      images: [
        {
          url: leader.image,
          alt: leader.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${leader.name} | Nuwakobiri Youth Foundation`,
      description: leader.bio,
      images: [leader.image],
    },
  };
}

export default async function LeaderPage({
  params,
}: LeaderPageProps) {
  const { slug } = await params;

  /**
   * Find the requested leader.
   */
  const leader = leadership.find(
    (item) => item.slug === slug,
  );

  /**
   * Invalid slug.
   */
  if (!leader) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-24">
          {/* Back navigation */}
          <Link
            href="/founders"
            className="
              group
              mb-10
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-emerald-700
              transition-colors
              hover:text-emerald-900
            "
          >
            <ArrowLeft
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Leaders
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-16">
            {/* Leader Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-emerald-100 shadow-lg">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
              />
            </div>

            {/* Leader Introduction */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                {leader.title}
              </p>

              <h1 className="max-w-4xl font-display text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {leader.name}
              </h1>

              <div className="mt-6 h-1 w-14 bg-emerald-600" />

              <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                {leader.profile.introduction}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFILE
      ====================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
          {/* Background */}
          <article>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Profile
            </p>

            <h2 className="font-display text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
              About {leader.name}
            </h2>

            <div className="mt-4 h-1 w-12 bg-emerald-600" />

            <div className="mt-8 max-w-3xl">
              <p className="text-base leading-8 text-gray-600">
                {leader.profile.background}
              </p>
            </div>
          </article>

          {/* Areas of Focus */}
          <aside className="h-fit rounded-2xl bg-gray-50 p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Leadership
            </p>

            <h2 className="mt-2 font-display text-xl font-bold text-gray-900">
              Areas of Focus
            </h2>

            <div className="mt-6 space-y-4">
              {leader.profile.focus.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />

                  <span className="text-sm leading-6 text-gray-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          NAVIGATION CTA
      ====================================================== */}
      <section className="bg-emerald-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 sm:py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
              Nuwakobiri Youth Foundation
            </p>

            <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Meet the people behind our mission.
            </h2>
          </div>

          <Link
            href="/founders"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-white
              px-6
              py-3
              text-sm
              font-bold
              text-emerald-800
              transition-colors
              hover:bg-emerald-50
            "
          >
            Meet Our Leaders

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