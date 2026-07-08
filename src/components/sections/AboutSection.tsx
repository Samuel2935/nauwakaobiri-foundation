"use client";
import Link from "next/link";
import { about, siteConfig } from "@/data/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const values = [
  "Community-led, community-owned programmes",
  "Full financial transparency and accountability",
  "Measuring real impact, not just outputs",
  "Partnerships built on mutual respect",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                alt="Community members gathered"
                className="w-full h-[520px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-800 text-white p-6 max-w-[200px] hidden md:block">
              <div className="font-display font-black text-4xl leading-none mb-1">
                {siteConfig.founded}
              </div>
              <div className="text-emerald-200 text-xs uppercase tracking-widest">
                Year Founded
              </div>
              <div className="mt-3 text-xs text-emerald-300 leading-snug">
                Six years of sustained community investment
              </div>
            </div>
            {/* Accent block */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 -z-10" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Who We Are
            </p>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-2">
              The Heart of the Community
            </h2>
            <div className="w-14 h-1 bg-emerald-600 mb-8" />

            <p className="text-gray-600 text-base leading-relaxed mb-5">
              {about.story}
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 mb-8">
              <p className="text-sm text-emerald-900 font-semibold leading-relaxed italic">
                &ldquo;{about.mission}&rdquo;
              </p>
              <p className="text-xs text-emerald-600 mt-2 font-bold uppercase tracking-wide">
                Our Mission
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-widest group hover:text-emerald-900 transition-colors"
            >
              More About Us
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
