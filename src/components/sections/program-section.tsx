// "use client";
import Link from "next/link";
import { programmeSteps, siteConfig } from "@/data/site";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProgrammeSection() {
  return (
    <section id="programmes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div>
            <p className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">The Process</p>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-2">
              How Our Programmes Work
            </h2>
            <div className="w-14 h-1 bg-emerald-600 mb-10" />

            <div className="space-y-8">
              {programmeSteps.map((step, i) => (
                <div key={step.step} className="flex gap-5 group">
                  {/* Step number + connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-emerald-700 text-white flex items-center justify-center font-display font-black text-sm shrink-0 group-hover:bg-emerald-600 transition-colors">
                      {step.step}
                    </div>
                    {i < programmeSteps.length - 1 && (
                      <div className="w-px flex-1 bg-emerald-100 mt-2" />
                    )}
                  </div>
                  {/* Text */}
                  <div className="pb-8">
                    <h3 className="font-display font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/get-involved/apply"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white font-bold text-sm px-7 py-4 hover:bg-emerald-600 transition-colors tracking-wide group mt-2"
            >
              Apply Now
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image + quote */}
          <div className="relative ">
            {/* <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
              alt="Programme participants"
              className="w-full h-[560px] object-cover"
            /> */}
            <Image
              src={siteConfig.power5}
              alt="Programme participants"
              width={800}
              height={560}
              className="w-full h-[560px] object-cover rounded-md"
            />
            {/* Quote overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-emerald-900/95 p-8">
              <p className="text-white text-base leading-relaxed italic mb-4">
                &ldquo;The programme didn't just give me capital — it gave me the knowledge and network to use it well.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">CO</div>
                <div>
                  <div className="text-white text-sm font-bold">Chisom Okafor</div>
                  <div className="text-emerald-300 text-xs">2023 Beneficiary, Enugu State</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
