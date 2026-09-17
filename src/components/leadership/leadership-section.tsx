"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { leadership } from "@/data/site";

interface LeaderImageProps {
  src: string;
  alt: string;
  initials: string;
}

function LeaderImage({
  src,
  alt,
  initials,
}: LeaderImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full items-center justify-center bg-emerald-800 text-4xl font-black text-white"
        aria-label={alt}
      >
        {initials}
      </motion.div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function LeadershipSection() {
  return (
    <motion.section
      className="bg-gray-50 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUpVariants}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              The people behind the mission
            </p>

            <h2 className="mb-2 font-display text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Our Leaders
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-emerald-600"
            />
          </div>

          <Link
            href="/founders"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-emerald-700
              transition-colors
              hover:text-emerald-900
            "
          >
            View All Leaders

            <ArrowRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Leadership Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {leadership.map((leader) => (
            <motion.article
              key={leader.slug}
              variants={fadeUpVariants}
              whileHover={{
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
              }}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-md
                bg-white
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden bg-emerald-100">
                <LeaderImage
                  src={leader.image}
                  alt={leader.name}
                  initials={leader.initials}
                />

                {/* Image Overlay */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="pointer-events-none absolute inset-0 bg-emerald-900/20"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-1 font-display text-base font-bold leading-snug text-gray-900">
                  {leader.name}
                </h3>

                <p className="mb-4 text-xs font-semibold text-emerald-600">
                  {leader.title}
                </p>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                  {leader.bio}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex min-w-0 items-center gap-2">
                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-emerald-700
                        text-xs
                        font-bold
                        text-white
                      "
                      aria-hidden="true"
                    >
                      {leader.initials}
                    </motion.div>

                    <span className="truncate text-sm font-semibold text-gray-800">
                      {leader.name}
                    </span>
                  </div>

                  {/* Leader Profile Link */}
                  <Link
                    href={`/leaders/${leader.slug}`}
                    className="
                      group/read
                      inline-flex
                      shrink-0
                      items-center
                      gap-1
                      text-xs
                      font-bold
                      text-emerald-700
                      transition-colors
                      hover:text-emerald-900
                    "
                  >
                    Read

                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/read:translate-x-1"
                    />
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