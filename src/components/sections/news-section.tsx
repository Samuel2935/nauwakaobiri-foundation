// "use client";
import Link from "next/link";
import { newsItems } from "@/data/site";
import { ArrowRight, Calendar } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">Media</p>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-2">
              Latest News
            </h2>
            <div className="w-14 h-1 bg-emerald-600" />
          </div>
          <Link
            href="/media/news"
            className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-widest group hover:text-emerald-900 shrink-0"
          >
            All News
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <article
              key={item.id}
              className={`group ${i === 0 ? "md:col-span-1" : ""}`}
            >
              <div className="border-t-4 border-emerald-600 pt-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar size={11} />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-emerald-800 transition-colors">
                  <Link href={item.href}>{item.title}</Link>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.excerpt}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-widest group/link hover:text-emerald-900"
                >
                  Read More
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
