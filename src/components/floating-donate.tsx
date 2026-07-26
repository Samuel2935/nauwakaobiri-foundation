"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, ArrowRight, X } from "lucide-react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "donate-popup";

const ONE_DAY = 24 * 60 * 60 * 1000;

export default function FloatingDonate() {
  const pathname = usePathname();

  if (pathname.startsWith("/donate")) {
    return null;
  }

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (pathname === "/donate") return;

    const dismissed = localStorage.getItem(STORAGE_KEY);

    if (dismissed) {
      const expiry = Number(dismissed);

      if (Date.now() < expiry) return;

      localStorage.removeItem(STORAGE_KEY);
    }

    let shown = false;

    const show = () => {
      if (shown) return;

      shown = true;
      setExpanded(true);

      window.removeEventListener("scroll", handleScroll);
    };

    const handleScroll = () => {
      const percent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (percent > 25) {
        show();
      }
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(show, 10000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, (Date.now() + ONE_DAY).toString());

    setExpanded(false);
  };

  return (
    <div className="fixed right-6 top-28 z-[9999]">
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            className="relative w-[340px] overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200"
          >
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />

            <button
              onClick={close}
              className="absolute right-3 top-3 rounded-full p-2 hover:bg-gray-100 transition"
            >
              <X size={18} />
            </button>

            <div className="bg-emerald-700 p-6 text-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Heart size={22} className="fill-white" />
              </div>

              <h2 className="text-xl font-bold">Together We Can Do More</h2>

              <p className="mt-2 text-sm leading-6 text-emerald-100">
                Your generosity provides education, healthcare, food assistance
                and economic empowerment to vulnerable communities.
              </p>
            </div>

            <div className="p-6">
              <Link
                href="/donate"
                onClick={() => setExpanded(false)}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Donate Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <button
                onClick={close}
                className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700"
              >
                Maybe later
              </button>

              <div className="mt-5 border-t pt-4 text-center text-xs text-gray-400">
                Secure donations • Transparent reporting
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="fixed bottom-6 right-6 z-[9999]">
            <motion.button
              key="button"
              onClick={() => setExpanded(true)}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                y: [0, -5, 0],
              }}
              transition={{
                scale: {
                  type: "spring",
                  stiffness: 250,
                },
                y: {
                  repeat: Infinity,
                  duration: 2,
                },
              }}
              className="
      flex
      items-center
      gap-2
      rounded-full
      bg-emerald-600
      px-2
      py-1
      font-semibold
      text-white
      shadow-xl
      hover:bg-emerald-700
      transition-colors
    "
            >
              <Heart className="fill-white" size={20} />
              Donate
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
