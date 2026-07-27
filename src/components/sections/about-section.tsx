"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { about, siteConfig } from "@/data/site";

const values = [
  "Community-led, community-owned programmes",
  "Full financial transparency and accountability",
  "Measuring real impact, not just outputs",
  "Partnerships built on mutual respect",
];

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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function AboutSection() {
  return (
    <motion.section
      className="py-24 bg-white overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div variants={fadeLeft} className="relative">
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative overflow-hidden rounded-md"
            >
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                }}
              >
                <Image
                  src="/images/werise.jpeg"
                  alt={siteConfig.shortName}
                  width={800}
                  height={520}
                  className="w-full h-[520px] object-cover rounded-md"
                />
              </motion.div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="absolute -bottom-32 -left-0 bg-emerald-800 text-white p-6 max-w-full hidden md:block rounded-md shadow-2xl"
            >
              <div className="font-display font-black text-4xl leading-none mb-1 border-b border-emerald-600 pb-1 text-emerald-100">
                {/* {siteConfig.founded} */}
                "WE RISE BY LIFTING OTHERS"
              </div>

              <div className="mt-3 text-xs text-emerald-300 leading-snug">
                Five years of sustained youth empowerment and community
                development initiatives across Nigeria and West Africa.
              </div>
            </motion.div>

            {/* Accent Block */}
            <motion.div
              initial={{
                scale: 0,
                rotate: -20,
              }}
              whileInView={{
                scale: 1,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                type: "spring",
              }}
              className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 -z-10 rounded-md"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div variants={fadeRight}>
            <motion.p
              variants={fadeUp}
              className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4"
            >
              Who We Are
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-2"
            >
              The Heart of the Community
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="w-14 h-1 bg-emerald-600 mb-8"
            />

            <motion.p
              variants={fadeUp}
              whileHover={{ scale: 1.01 }}
              className="text-gray-600 rounded-md bg-yellow-100 p-4 text-sm leading-relaxed mb-5"
            >
              {about.story}
            </motion.p>

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -4,
              }}
              className="bg-emerald-50 rounded-md border-l-4 border-emerald-600 p-5 mb-8"
            >
              <p className="text-sm text-emerald-900 font-semibold italic leading-relaxed">
                "{about.mission}"
              </p>

              <p className="text-xs text-emerald-600 mt-2 font-bold uppercase tracking-wide">
                Our Mission
              </p>
            </motion.div>

            <motion.ul variants={container} className="space-y-3 mb-8">
              {values.map((value) => (
                <motion.li
                  key={value}
                  variants={fadeUp}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.25,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-600 mt-0.5 shrink-0"
                    />
                  </motion.div>

                  {value}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-widest group hover:text-emerald-900 transition-colors"
              >
                More About Us
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={15} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
