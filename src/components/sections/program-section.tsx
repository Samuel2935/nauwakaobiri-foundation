"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { programmeSteps, siteConfig } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
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
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
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
      duration: 0.6,
    },
  },
};

export default function ProgrammeSection() {
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
          {/* LEFT */}
          <motion.div variants={fadeLeft}>
            <motion.p
              variants={fadeUp}
              className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4"
            >
              The Process
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-2"
            >
              How Our Programmes Work
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="w-14 h-1 bg-emerald-600 mb-10"
            />

            <motion.div variants={container} className="space-y-8">
              {programmeSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex gap-5"
                >
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{
                        scale: 0,
                        rotate: -180,
                      }}
                      whileInView={{
                        scale: 1,
                        rotate: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                      }}
                      className="w-10 h-10 rounded-sm bg-emerald-700 text-white flex items-center justify-center font-display font-black text-sm"
                    >
                      {step.step}
                    </motion.div>

                    {i < programmeSteps.length - 1 && (
                      <motion.div
                        initial={{
                          scaleY: 0,
                        }}
                        whileInView={{
                          scaleY: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + i * 0.15,
                          duration: 0.6,
                        }}
                        className="origin-top w-px flex-1 bg-emerald-100 mt-2"
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div className="pb-8">
                    <motion.h3
                      variants={fadeUp}
                      className="font-display font-bold text-gray-900 text-base mb-2"
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      variants={fadeUp}
                      className="text-gray-500 text-sm leading-relaxed"
                    >
                      {step.body}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fadeRight} className="relative">
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="overflow-hidden rounded-md"
            >
              <motion.div
                initial={{
                  scale: 1.1,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                }}
              >
                <Image
                  src={siteConfig.power5}
                  alt="Programme participants"
                  width={800}
                  height={560}
                  className="w-full h-[560px] object-cover rounded-md"
                />
              </motion.div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              whileHover={{
                y: -6,
              }}
              className="absolute bottom-0 left-0 right-0 bg-emerald-900/95 rounded-md p-8 backdrop-blur-sm"
            >
              <p className="italic text-white text-base leading-relaxed mb-4">
                “The programme didn't just give me capital — it gave me the
                knowledge and network to use it well.”
              </p>

              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold"
                >
                  CO
                </motion.div>

                <div>
                  <div className="text-white text-sm font-bold">
                    Chisom Okafor
                  </div>

                  <div className="text-emerald-300 text-xs">
                    2023 Beneficiary, Enugu State
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
