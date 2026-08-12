"use client";

import { motion } from "motion/react";
import { about } from "@/data/site";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Community-led, community-owned programmes",
  "Full financial transparency and accountability",
  "Measuring real impact, not just outputs",
  "Partnerships built on mutual respect",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutUs() {
  return (
    <motion.section
      className="py-24 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div variants={fadeLeft}>
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="bg-emerald-50 rounded-md border-l-4 border-emerald-600 p-4 text-sm mb-8"
            >
              <h3 className="text-lg text-emerald-800 font-semibold mb-2">
                The Meaning Behind NUWAKOBIRI
              </h3>

              <p>
                The name NUWAKOBIRI is an indigenous name/expression that means
                " everything ends in this world." It conveys the philosophical
                belief that nothing in life is permanent and serves as a
                reminder of the transient nature of worldly affairs. The name
                was chosen to reflect values of humility, wisdom, resilience,
                and purposeful living. It is a unique name, is not intended to
                mislead the public, and does not suggest any affiliation with
                any government institution or existing registered entity.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="bg-yellow-100 rounded-md border-l-4 border-emerald-600 p-4 text-sm mb-8"
            >
              <h3 className="text-lg text-emerald-800 font-semibold mb-2">
                Our Vision
              </h3>

              <p>
                To build a world where every individual has the opportunity to
                live with dignity, hope, and equal access to education,
                healthcare, empowerment, and sustainable livelihoods. We
                envision thriving communities where compassion inspires action,
                poverty is reduced, vulnerable people are supported, and every
                life is given the chance to reach its full potential.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="bg-emerald-50 rounded-md border-l-4 border-emerald-600 p-4 text-sm"
            >
              <h3 className="text-lg text-emerald-800 font-semibold mb-2">
                Our Mission
              </h3>

              <p>
                Our mission is to bring hope, restore dignity, and create
                lasting opportunities for vulnerable individuals through
                education, healthcare, food support, skills acquisition, and
                sustainable empowerment while maintaining integrity,
                accountability, and transparency.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
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
              className="bg-yellow-100 rounded-md p-4 text-sm leading-relaxed text-gray-600 mb-5"
            >
              {about.story}
            </motion.p>

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -4,
                scale: 1.01,
              }}
              className="rounded-md bg-emerald-50 border-l-4 border-emerald-600 p-5 mb-8"
            >
              <p className="italic text-sm text-emerald-900 font-semibold">
                "{about.mission}"
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-emerald-600">
                Our Mission
              </p>
            </motion.div>

            <motion.ul variants={container} className="space-y-4">
              {values.map((value) => (
                <motion.li
                  key={value}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      className="text-emerald-600 mt-0.5"
                    />
                  </motion.div>

                  {value}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
