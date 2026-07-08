"use client";
import { partners } from "@/data/site";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
          Trusted By Our Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 grayscale opacity-50 hover:opacity-70 transition-opacity">
          {partners.map((p) => (
            <div key={p.name} className="text-gray-900 font-display font-black text-sm tracking-tight">
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
