"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { newsItems } from "@/data/site";
import { ArrowRight, Calendar } from "lucide-react";


const container: any = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const itemAnimation: any = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // use numeric bezier easing to satisfy motion's Easing type
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};


export default function NewsSection() {
  return (
    <motion.section
      className="py-24 bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={itemAnimation}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >

          <div>

            <motion.p
              className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4"
            >
              Media
            </motion.p>


            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-tight mb-2">
              Latest News
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
            href="/media/news"
            className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-widest group hover:text-emerald-900"
          >
            All News

            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />

          </Link>

        </motion.div>



        {/* News Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >

          {newsItems.map((item) => (

            <motion.article
              key={item.id}
              variants={itemAnimation}
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="group"
            >

              <div
                className="
                border-t-4 
                border-emerald-600
                pt-5
                transition-all
                duration-300
                group-hover:shadow-xl
                group-hover:bg-gray-50
                group-hover:p-5
                rounded-md
                "
              >


                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">

                  <motion.span
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                    bg-emerald-50
                    text-emerald-700
                    text-xs
                    font-bold
                    px-3
                    py-1
                    uppercase
                    tracking-wide
                    rounded-sm
                    "
                  >
                    {item.category}
                  </motion.span>


                  <span className="flex items-center gap-1.5 text-xs text-gray-400">

                    <Calendar size={11}/>

                    {item.date}

                  </span>

                </div>



                {/* Title */}
                <h3
                  className="
                  font-display
                  font-bold
                  text-gray-900
                  text-base
                  leading-snug
                  mb-3
                  group-hover:text-emerald-800
                  transition-colors
                  "
                >

                  <Link href={item.href}>
                    {item.title}
                  </Link>

                </h3>



                {/* Description */}
                <p className="
                  text-gray-500
                  text-sm
                  leading-relaxed
                  mb-5
                ">
                  {item.excerpt}
                </p>



                {/* CTA */}
                <Link
                  href={item.href}
                  className="
                  inline-flex
                  items-center
                  gap-2
                  text-emerald-700
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  group/link
                  "
                >

                  Read More


                  <ArrowRight
                    size={12}
                    className="
                    group-hover/link:translate-x-1
                    transition-transform
                    "
                  />

                </Link>


              </div>


            </motion.article>

          ))}

        </motion.div>


      </div>
    </motion.section>
  );
}