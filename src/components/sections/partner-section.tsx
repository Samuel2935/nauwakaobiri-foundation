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
      className="py-16 bg-gray-50 border-t border-gray-100 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          variants={fadeUp}
          className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10"
        >
          Trusted By Our Partners
        </motion.p>

        <motion.div
          variants={container}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={fadeUp}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 0.55,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                y: {
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.2,
                  delay: index * 0.08,
                },
                scale: {
                  duration: 0.2,
                },
              }}
              animate={{
                y: [0, -4, 0],
              }}
              whileHover={{
                opacity: 1,
                y: -8,
                scale: 1.08,
              }}
              
              className="cursor-pointer select-none grayscale hover:grayscale-0"
            >
              <span className="font-display font-black text-gray-900 text-sm md:text-base tracking-tight">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}