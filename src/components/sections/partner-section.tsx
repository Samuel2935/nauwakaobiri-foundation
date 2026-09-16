"use client";

import { motion } from "motion/react";

import { partners } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function PartnersSection() {
  return (
    <motion.section
      className="overflow-hidden border-t border-gray-100 bg-gray-50 py-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          variants={fadeUp}
          className="mb-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400"
        >
          Trusted By Our Partners
        </motion.p>

        <motion.div
          variants={container}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.href || undefined}
              target={partner.href ? "_blank" : undefined}
              rel={partner.href ? "noopener noreferrer" : undefined}
              variants={fadeUp}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 0.7,
                y: 0,
              }}
              viewport={{ once: true }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.4,
                  delay: index * 0.08,
                },
                y: {
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                opacity: 1,
                y: -8,
                scale: 1.05,
              }}
              className="rounded-xl px-5 py-3 font-display text-sm font-black tracking-tight text-gray-900 transition-colors duration-300 hover:text-gray-600 md:text-base"
            >
              {partner.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}