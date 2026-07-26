"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Heart, ArrowRight } from "lucide-react";

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

export default function DonateBanner() {
  return (
    <motion.section
      className="relative overflow-hidden bg-emerald-900 py-24 mt-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Background Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/40 rounded-full -translate-y-1/2 translate-x-1/3"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800/60 rounded-full translate-y-1/2 -translate-x-1/4"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heart */}
        <motion.div
          variants={fadeUp}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-700/50 mb-6"
        >
          <Heart size={28} className="text-emerald-300 fill-emerald-300" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-display font-black text-white text-4xl md:text-5xl leading-tight mb-5"
        >
          Your Support Changes Lives
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-emerald-200 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Every contribution—no matter the size—funds scholarships, medical
          outreaches, and micro-grants that transform communities across
          Nigeria. Be a part of this movement.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-md bg-white text-emerald-900 font-bold text-sm px-8 py-4 tracking-wide shadow-xl"
            >
              Donate Now
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                <ArrowRight size={15} />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 text-white font-bold text-sm px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Become a Partner
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          variants={container}
          className="flex flex-wrap justify-center gap-8 text-emerald-300 text-xs font-semibold uppercase tracking-widest"
        >
          {[
            "✓ CAC Registered",
            "✓ Audited Annually",
            "✓ 100% Transparent",
            "✓ Tax Deductible",
          ].map((item) => (
            <motion.span
              key={item}
              variants={fadeUp}
              whileHover={{
                scale: 1.08,
                color: "#ffffff",
              }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
