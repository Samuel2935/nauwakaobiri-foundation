// "use client";
import Link from "next/link";
import { about, siteConfig } from "@/data/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const values = [
  "Community-led, community-owned programmes",
  "Full financial transparency and accountability",
  "Measuring real impact, not just outputs",
  "Partnerships built on mutual respect",
];

export default function AboutUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative text-gray-900 p-2  rounded-md">
            <div className="relative overflow-hidden">
              <div className="vision bg-yellow-100 rounded-md border-l-4 border-emerald-600 p-4 text-sm mb-8 hover:bg-yellow-200 transition-colors">
                <h1 className="text-emerald-800 text-lg pb-2">Our Vision</h1>
                <p>
                  To build a world where every individual has the opportunity to
                  live with dignity, hope, and equal access to education,
                  healthcare, empowerment, and sustainable livelihoods. We
                  envision thriving communities where compassion inspires
                  action, poverty is reduced, vulnerable people are supported,
                  and every life is given the chance to reach its full
                  potential. Our vision is to become a trusted force for
                  positive change by partnering with communities, organizations,
                  and individuals to create lasting impact, promote social
                  justice, and inspire a culture of kindness, generosity, and
                  service.
                </p>
              </div>
              <div className="mission bg-emerald-50 text-sm rounded-md border-l-4 border-emerald-600 p-4 mb-8 hover:bg-emerald-100 transition-colors">
                <h1 className="text-emerald-800 text-lg pb-2">Our Mission</h1>
                <p>
                  Our mission is to bring hope, restore dignity, and create
                  lasting opportunities for vulnerable individuals and
                  communities through compassion, service, and sustainable
                  development. We are committed to improving lives by supporting
                  access to quality education, healthcare, food assistance,
                  skills acquisition, and economic empowerment. We believe that
                  every person deserves the opportunity to live with dignity,
                  reach their full potential, and contribute positively to
                  society. By working together with donors, volunteers,
                  partners, and local communities, we strive to build a future
                  where poverty is reduced, inequality is addressed, and every
                  individual has the support they need to thrive. At the heart
                  of everything we do is a commitment to integrity,
                  transparency, accountability, and compassion. We are dedicated
                  to creating meaningful and lasting impact—one life, one
                  family, and one community at a time.
                </p>
              </div>
            </div>
           
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

            <p className="text-gray-600 rounded-md bg-yellow-100 p-4 text-sm leading-relaxed mb-5 hover:bg-yellow-200 transition-colors ">
              {about.story}
            </p>

            <div className="rounded-md bg-emerald-50 border-l-4 border-emerald-600 p-5 mb-8 hover:bg-emerald-100 transition-colors">
              <p className="text-sm text-emerald-900 font-semibold leading-relaxed italic">
                &ldquo;{about.mission}&rdquo;
              </p>
              <p className="text-xs text-emerald-600 mt-2 font-bold uppercase tracking-wide">
                Our Mission
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {values.map((v) => (
                <li
                  key={v}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600 mt-0.5 shrink-0"
                  />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
