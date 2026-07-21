// "use client";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function DonateBanner() {
  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-emerald-900 py-24"
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Accent shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/40 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800/60 rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-700/50 rounded-full mb-6">
          <Heart size={24} className="text-emerald-300" />
        </div>
        <h2 className="font-display font-black text-white text-4xl md:text-5xl leading-tight mb-5">
          Your Support Changes Lives
        </h2>
        <p className="text-emerald-200 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Every contribution — no matter the size — funds scholarships, medical
          outreaches, and micro-grants that transform communities across
          Nigeria. Be a part of this movement.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-white text-emerald-900 font-bold text-sm px-8 py-4 hover:bg-emerald-50 transition-colors tracking-wide group"
          >
            Donate Now
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/get-involved/partner"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold text-sm px-8 py-4 hover:border-white hover:bg-white/10 transition-colors tracking-wide"
          >
            Become a Partner
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-8 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
          <span>✓ CAC Registered</span>
          <span>✓ Audited Annually</span>
          <span>✓ 100% Transparent</span>
          <span>✓ Tax Deductible</span>
        </div>
      </div>
    </section>
  );
}
