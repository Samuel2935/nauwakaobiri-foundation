"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { pillars } from "@/data/site";
import {
  BookOpen,
  HeartPulse,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Users: <Users size={24} />,
};

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

export default function PillarsSection() {
  return (
    <motion.section
      className="py-24 bg-gray-50 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div variants={container} className="max-w-xl mb-14">
          <motion.p
            variants={fadeUp}
            className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            What We Do
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-4"
          >
            Our Impact Pillars
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="w-14 h-1 bg-emerald-600 mb-5"
          />

          <motion.p
            variants={fadeUp}
            className="text-gray-500 text-base leading-relaxed"
          >
            Four interconnected areas where we channel resources,
            expertise, and partnerships to create lasting change.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              variants={fadeUp}
              whileHover={{
                y: -12,
                rotateX: 4,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="bg-white border border-gray-100 rounded-md p-8 relative overflow-hidden hover:border-emerald-200 hover:shadow-2xl"
            >
              {/* Background Number */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: i * 0.15,
                }}
                className="absolute top-4 right-4 font-display font-black text-7xl text-gray-50 select-none leading-none"
              >
                {String(i + 1).padStart(2, "0")}
              </motion.div>

              {/* Icon */}
              <motion.div
                initial={{
                  rotate: -180,
                  scale: 0,
                }}
                whileInView={{
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.2 + i * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}
                className="w-12 h-12 rounded-sm bg-emerald-700 text-white flex items-center justify-center mb-6"
              >
                {iconMap[pillar.icon]}
              </motion.div>

              {/* Title */}
              <motion.h3
                variants={fadeUp}
                className="font-display font-bold text-gray-900 text-lg mb-3"
              >
                {pillar.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-gray-500 text-sm leading-relaxed mb-6"
              >
                {pillar.summary}
              </motion.p>

              {/* CTA */}
              <motion.div
                whileHover={{
                  x: 4,
                }}
              >
                <Link
                  href={pillar.cta.href}
                  className="inline-flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-widest hover:text-emerald-900"
                >
                  {pillar.cta.label}

                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowRight size={13} />
                  </motion.div>
                </Link>
              </motion.div>

              {/* Bottom Accent */}
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="absolute bottom-0 left-0 h-1 w-full origin-left bg-emerald-600"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}