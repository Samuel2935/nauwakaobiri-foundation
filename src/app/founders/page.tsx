"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { leadership } from "@/data/site";

function LeaderImage({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full items-center justify-center bg-emerald-800 text-4xl font-black text-white"
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
      className="
        object-cover
        object-top
        transition-transform
        duration-700
        group-hover:scale-105
      "
      onError={() => setHasError(true)}
    />
  );
}
const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: any = {
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

export default function FoundersSection() {
  return (
    <motion.section
      className="bg-gray-50 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={container}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          className="
          mb-14
          flex
          flex-col
          justify-between
          gap-6
          md:flex-row
          md:items-end
          "
        >
          <div>
            <p
              className="
              mb-4
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-emerald-700
            "
            >
              The people behind the mission
            </p>

            <h2
              className="
              mb-2
              font-display
              text-4xl
              font-black
              leading-tight
              text-gray-900
              md:text-5xl
            "
            >
              Our Leaders
            </h2>

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 56,
              }}
              transition={{
                duration: 0.6,
              }}
              className="h-1 bg-emerald-600"
            />
          </div>

          <Link
            href="/"
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
              hover:text-emerald-900
            "
          >
            All Stories
            <ArrowRight
              size={14}
              className="
              transition-transform
              group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>

        {/* Leaders */}
        <motion.div
          variants={container}
          className="
          grid
          grid-cols-1
          gap-8
          md:grid-cols-3
          "
        >
          {leadership.map((leader) => (
            <motion.article
              key={leader.name}
              variants={fadeUp}
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
              hover:shadow-xl
              "
            >
              {/* Image */}
              <div
                className="
                relative
                h-96
                overflow-hidden
                rounded-md
                bg-emerald-100
                "
              >
                <LeaderImage
                  src={leader.image}
                  alt={leader.name}
                  initials={leader.initials}
                />

                {/* Hover overlay */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  className="
                  absolute
                  inset-0
                  bg-emerald-900/20
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                flex
                flex-1
                flex-col
                p-6
                "
              >
                <h3
                  className="
                  mb-1
                  font-display
                  text-base
                  font-bold
                  leading-snug
                  text-gray-900
                  "
                >
                  {leader.name}
                </h3>
                                <h6 className="text-xs font-semibold text-emerald-600 mb-4">{leader.title}</h6>


                <p
                  className="
                  mb-5
                  flex-1
                  text-sm
                  leading-relaxed
                  text-gray-500
                  "
                >
                  {leader.bio}
                </p>

                <div
                  className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-gray-100
                  pt-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                      className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-700
                      text-xs
                      font-bold
                      text-white
                      "
                    >
                      {leader.initials}
                    </motion.div>

                    <span
                      className="
                      text-sm
                      font-semibold
                      text-gray-800
                    "
                    >
                      {leader.name}
                    </span>
                  </div>

                  <Link
                    href={`/success-stories/${leader.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="
                    text-xs
                    font-bold
                    text-emerald-700
                    hover:text-emerald-900
                    "
                  >
                    Read →
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
