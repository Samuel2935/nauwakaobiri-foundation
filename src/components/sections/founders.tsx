// "use clieint";
import Link from "next/link";
import { leadership } from "@/data/site";
import { ArrowRight, MapPin } from "lucide-react";

export default function FoundersSection() {
  return (
    <section id="founders" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              The people behind the mission
            </p>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-2">
              Our Leaders
            </h2>
            <div className="w-14 h-1 bg-emerald-600" />
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-widest group hover:text-emerald-900 shrink-0"
          >
            All Stories
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader) => (
            <article
              key={leader.title}
              className="bg-white group hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden bg-emerald-100 relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement!;
                    parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-emerald-800 text-white font-black text-4xl font-display">${leader.initials}</div>`;
                  }}
                />
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
                  {leader.title}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <MapPin size={11} />
                  {leader.name}
                </div> */}
                <h3 className="font-display font-bold text-gray-900 text-base leading-snug mb-3">
                  {leader.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {leader.bio}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center">
                      {leader.initials}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      {leader.name}
                    </span>
                  </div>
                  <Link
                    href={`/success-stories/${leader.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-emerald-700 text-xs font-bold hover:text-emerald-900 transition-colors"
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
