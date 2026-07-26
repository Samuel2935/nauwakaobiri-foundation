"use client";

import { motion } from "motion/react";
import { stats } from "@/data/site";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "easeOut" as any,
    },
  },
};

export default function StatsStrip() {
  return (
    <motion.section
      className="bg-emerald-800 py-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-emerald-700">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="text-center lg:px-8 cursor-default"
            >
              <motion.div
                className="font-display font-black text-white text-4xl md:text-5xl leading-none mb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>

              <motion.div
                className="text-emerald-200 font-semibold text-sm mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>

              <motion.div
                className="text-emerald-400/70 text-xs leading-snug"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {stat.description}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}