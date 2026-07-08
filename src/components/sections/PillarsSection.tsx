"use client";
import Link from "next/link";
import { pillars } from "@/data/site";
import { BookOpen, HeartPulse, TrendingUp, Users, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Users: <Users size={24} />,
};

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">What We Do</p>
          <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-4">
            Our Impact Pillars
          </h2>
          <div className="w-14 h-1 bg-emerald-600 mb-5" />
          <p className="text-gray-500 text-base leading-relaxed">
            Four interconnected areas where we channel resources, expertise, and partnerships to create lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              className="bg-white border border-gray-100 p-8 group hover:border-emerald-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Background number */}
              <div className="absolute top-4 right-4 font-display font-black text-7xl text-gray-50 select-none leading-none group-hover:text-emerald-50 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-emerald-700 text-white flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                {iconMap[pillar.icon]}
              </div>

              <h3 className="font-display font-bold text-gray-900 text-lg mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{pillar.summary}</p>

              <Link
                href={pillar.cta.href}
                className="inline-flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-widest group/link hover:text-emerald-900 transition-colors"
              >
                {pillar.cta.label}
                <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
