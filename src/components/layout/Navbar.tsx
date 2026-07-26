"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-emerald-800 text-white text-xs py-2 px-6 hidden md:flex justify-between items-center"
      >
        <span>
          Empowering the youth through social investment, education and
          community development since {siteConfig.founded}
        </span>

        <div className="flex gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-emerald-200 transition-colors"
          >
            {siteConfig.email}
          </a>

          <a
            href={`tel:${siteConfig.phone}`}
            className="hover:text-emerald-200 transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </motion.div>

      {/* Navigation */}

      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}

        <motion.div
          initial={{
            x: -40,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="w-10 h-10 flex items-center justify-center"
            >
              <Image
                src={siteConfig.logo}
                alt={siteConfig.shortName}
                width={40}
                height={40}
                className="rounded-full"
              />
            </motion.div>

            <div className="hidden sm:block">
              <div className="font-display font-bold text-gray-900 text-sm">
                NUWAKOBIRI
              </div>

              <div className="text-xs text-emerald-700 font-medium">
                Youth Foundation
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.label}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="
            flex items-center gap-1
            px-4 py-2
            text-sm font-semibold
            text-gray-700
            hover:text-emerald-700
            "
              >
                {link.label}

                {link.children && <ChevronDown size={13} />}
              </Link>

              <AnimatePresence>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
            absolute top-full left-0
            bg-white
            border
            shadow-xl
            rounded-md
            min-w-[220px]
            py-2
            "
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="
            block px-5 py-3
            text-sm
            hover:bg-emerald-50
            "
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}

        <motion.div
          initial={{
            x: 40,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="hidden lg:flex gap-3"
        >
          <Link
            href="/about"
            className="
          bg-emerald-700
          text-white
          px-5 py-2.5
          rounded-md
          text-sm
          font-bold
          "
          >
            Apply Now
          </Link>

          <Link
            href="/donate"
            className="
          border-2
          border-emerald-700
          text-emerald-700
          px-5 py-2
          rounded-md
          text-sm
          font-bold
          "
          >
            Donate
          </Link>
        </motion.div>

        {/* Mobile Button */}

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="
        lg:hidden
        overflow-hidden
        bg-white
        border-t
        px-6
        pb-6
        "
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{
                  x: -20,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: index * 0.05,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="
        block py-3
        text-sm
        font-semibold
        border-b
        "
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <div className="pt-5 flex flex-col gap-3">
              <Link
                href="/about"
                className="
        bg-emerald-700
        text-white
        rounded-md
        py-3
        text-center
        font-bold
        "
              >
                Apply Now
              </Link>

              <Link
                href="/donate"
                className="
        border-2
        border-emerald-700
        text-emerald-700
        rounded-md
        py-3
        text-center
        font-bold
        "
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
