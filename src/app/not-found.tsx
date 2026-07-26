"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";


export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen mt-6 items-center justify-center bg-gray-50 px-6">

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="max-w-lg text-center"
      >

        {/* Icon */}
        <motion.div
          initial={{
            scale: 0,
            rotate: -20,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
          className="
          mx-auto
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-emerald-100
          "
        >
          <SearchX
            className="h-10 w-10 text-emerald-700"
          />
        </motion.div>


        {/* 404 */}
        <motion.h1
          initial={{
            opacity:0,
            scale:0.8,
          }}
          animate={{
            opacity:1,
            scale:1,
          }}
          transition={{
            delay:0.3,
          }}
          className="
          text-7xl
          font-black
          text-emerald-800
          "
        >
          Oops!!!
        </motion.h1>

{/* 
        <h2
          className="
          mt-3
          text-3xl
          font-bold
          text-gray-900
          "
        >
          Oops!!!
        </h2> */}


        <p
          className="
          mt-4
          text-lg
          text-gray-600
          "
        >
          Sorry, we couldn't find the page you're looking for.
        </p>



        {/* Actions */}
        <motion.div
          initial={{
            opacity:0,
            y:20,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            delay:0.5,
          }}
          className="
          mt-8
          flex
          justify-center
          gap-4
          "
        >

          <motion.div
            whileHover={{
              scale:1.05,
            }}
            whileTap={{
              scale:0.95,
            }}
          >
            <Link
              href="/"
              className="
              inline-flex
              items-center
              rounded-lg
              bg-emerald-700
              px-5
              py-3
              text-white
              hover:bg-emerald-800
              transition-colors
              "
            >
              <Home
                className="mr-2 h-4 w-4"
              />

              Home
            </Link>
          </motion.div>



          <motion.button
            whileHover={{
              scale:1.05,
            }}
            whileTap={{
              scale:0.95,
            }}
            onClick={() => router.back()}
            className="
            inline-flex
            items-center
            rounded-lg
            border
            border-gray-300
            px-5
            py-3
            text-gray-700
            hover:bg-gray-100
            transition-colors
            "
          >

            <ArrowLeft
              className="mr-2 h-4 w-4"
            />

            Back

          </motion.button>


        </motion.div>



        {/* Helpful navigation */}
        <motion.div
          initial={{
            opacity:0,
          }}
          animate={{
            opacity:1,
          }}
          transition={{
            delay:0.8,
          }}
          className="
          mt-10
          text-sm
          text-gray-500
          "
        >
          Need help? Visit our{" "}
          <Link
            href="/contact"
            className="
            font-semibold
            text-emerald-700
            hover:underline
            "
          >
            contact page
          </Link>
          .
        </motion.div>


      </motion.div>

    </main>
  );
}