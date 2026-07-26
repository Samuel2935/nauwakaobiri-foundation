"use client";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { siteConfig } from "@/data/site";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const zoomBackground = {
  hidden: {
    scale: 1.08,
  },
  show: {
    scale: 1,
    transition: {
      duration: 2,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/power4.jpg')",
        }}
      /> */}
      <motion.div
        variants={zoomBackground}
        initial="hidden"
        animate="show"
        className="absolute inset-0 bg-cover bg-center bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-900/30 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/power4.jpg')",
        }}
      />
      {/* Layered overlay — dark left, lighter right for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: 0.2 }}
            // viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-yellow-400" />
            <span className="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase">
              Rooted in Youth Empowerment. Philantropism. Community Development.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5, delay: 0.3 }}
          // viewport={{ once: true }} 
           variants={fadeUp}
          className="font-display font-black text-white text-5xl md:text-6xl lg:text-7xl leading-[1.03] mb-8">
            Investing in <span className="text-emerald-400">People.</span>
            <br />
            Transforming{" "}
            <span className="relative inline-block">
              Communities.
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-500/40" />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-200 text-lg md:text-sm leading-relaxed max-w-xl mb-10"
          >
            The Nuwakobiri Foundation is a pipeline for social change, dedicated
            to empowering youth, fostering community development, and driving
            impactful philanthropy across Nigeria and beyond. We believe in the
            power of collective action to create a brighter future for all.
          </motion.p>

          {/* CTAs */}
          <motion.div
           variants={fadeUp}
          className="flex flex-wrap gap-4 mb-16">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://chat.whatsapp.com/ES9douL6lgZDujpLr13pEm?s=cl&p=i&mlu=0&amv=2"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white font-bold text-sm px-7 py-4 hover:bg-emerald-500 transition-colors tracking-wide group"
            >
              Join the Movement
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={siteConfig.socials.tiktok}
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 text-white font-bold text-sm px-7 py-4 hover:border-white hover:bg-white/10 transition-colors tracking-wide"
            >
              Our Story
            </Link>
            <Link
              // href={siteConfig.socials.youtube}
              href="/podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md text-white text-sm font-semibold group"
            >
              <span className="w-10 h-10 border-2 rounded-md border-white/40 flex items-center justify-center transition-colors group-hover:border-emerald-400 group-hover:bg-emerald-400/10">
                <Play size={13} className="ml-0.5" />
              </span>
              Watch Our Podcasts
            </Link>
          </motion.div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8">
            {[
              { n: "5,400+", l: "Lives Impacted" },
              { n: "₦2.1B+", l: "Disbursed" },
              { n: "7+ States", l: "Nationwide" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-black text-white text-2xl leading-none">
                  {s.n}
                </div>
                <div className="text-gray-400 text-xs mt-1 tracking-wide">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
