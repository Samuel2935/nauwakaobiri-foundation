"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { stories } from "@/data/site";
import { ArrowRight, MapPin } from "lucide-react";

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

export default function StoriesSection() {
  return (
    <motion.section
      className="py-24 bg-gray-50 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div variants={fadeUp}>
            <p className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Real Impact
            </p>

            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-2">
              Beneficiary Stories
            </h2>

            <div className="w-14 h-1 bg-emerald-600" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="/impact/stories"
              className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-widest group hover:text-emerald-900"
            >
              All Stories

              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <ArrowRight size={14} />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              variants={fadeUp}
              whileHover={{
                y: -12,
                rotateX: 3,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-2xl flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="h-full"
                >
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>

                {/* Badge */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                  }}
                  className="absolute top-3 left-3 bg-emerald-700 rounded-sm text-white text-xs font-bold px-3 py-1 uppercase"
                >
                  {story.programme}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-2 text-xs text-gray-400 mb-3"
                >
                  <MapPin size={12} />
                  {story.location}
                </motion.div>

                <motion.h3
                  variants={fadeUp}
                  className="font-display font-bold text-gray-900 text-lg mb-3"
                >
                  {story.headline}
                </motion.h3>

                <motion.p
                  variants={fadeUp}
                  className="text-gray-500 text-sm leading-relaxed flex-1 mb-6"
                >
                  {story.body}
                </motion.p>

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold"
                    >
                      {story.imageFallback}
                    </motion.div>

                    <span className="text-sm font-semibold text-gray-800">
                      {story.name}
                    </span>
                  </div>

                  <Link
                    href={`/impact/stories/${story.id}`}
                    className="text-emerald-700 text-sm font-bold group inline-flex items-center gap-1"
                  >
                    Read

                    <motion.div
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}