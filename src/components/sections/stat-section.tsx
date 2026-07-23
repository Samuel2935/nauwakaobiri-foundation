// "use client";
import { stats } from "@/data/site";

export default function StatsStrip() {
  return (
    <section className="bg-emerald-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-emerald-700">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:px-8">
              <div className="font-display font-black text-white text-4xl md:text-5xl leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-emerald-200 font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-emerald-400/70 text-xs leading-snug">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
