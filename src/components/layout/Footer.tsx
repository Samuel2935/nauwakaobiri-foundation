"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  X,
} from "lucide-react";

import { siteConfig, navLinks } from "@/data/site";

const TiktokIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 3.5h2.25v2.25A6.75 6.75 0 1 1 9 9.5v-2.25a4.5 4.5 0 1 0 7.5-3.75V3.5z" />
  </svg>
);

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <Facebook size={16} />,
  instagram: <Instagram size={16} />,
  linkedin: <Linkedin size={16} />,
  youtube: <Youtube size={16} />,
  tiktok: TiktokIcon,
  X: <X size={16} />,
};

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-950 text-gray-400"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={container}
    >
      {/* Main */}
      <div
        className="
max-w-7xl
mx-auto
px-6
py-16
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-12
"
      >
        {/* Brand */}

        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-3 mb-5">
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              className="
w-10
h-10
flex
items-center
justify-center
"
            >
              <Image
                src={siteConfig.logo}
                alt={siteConfig.shortName}
                width={40}
                height={40}
                className="rounded-full"
              />
            </motion.div>

            <div>
              <div
                className="
text-white
font-bold
text-sm
font-display
"
              >
                NUWAKOBIRI
              </div>

              <div
                className="
text-emerald-400
text-xs
tracking-wide
"
              >
                Youth Foundation
              </div>
            </div>
          </div>

          <p
            className="
text-sm
leading-relaxed
mb-6
"
          >
            Rooted in Youth Empowerment. Rising together. We invest in people
            across Nigeria through education, health, and economic empowerment.
          </p>

          <div className="flex gap-3">
            {Object.entries(siteConfig.socials).map(([key, href]) => (
              <motion.a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                className="
w-8
h-8
border
border-gray-700
rounded-md
flex
items-center
justify-center
hover:border-emerald-600
hover:text-emerald-400
transition-colors
"
              >
                {socialIcons[key]}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* About */}

        <motion.div variants={fadeUp}>
          <h4
            className="
text-white
text-xs
font-bold
uppercase
tracking-widest
mb-5
"
          >
            About
          </h4>

          <ul className="space-y-3">
            {navLinks[0].children?.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="
text-sm
hover:text-emerald-400
transition-colors
"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Programmes */}

        <motion.div variants={fadeUp}>
          <h4
            className="
text-white
text-xs
font-bold
uppercase
tracking-widest
mb-5
"
          >
            Programmes
          </h4>

          <ul className="space-y-3">
            {navLinks[1].children?.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="
text-sm
hover:text-emerald-400
transition-colors
"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}

        <motion.div variants={fadeUp}>
          <h4
            className="
text-white
text-xs
font-bold
uppercase
tracking-widest
mb-5
"
          >
            Contact
          </h4>

          <ul className="space-y-4">
            <li className="flex gap-3 text-sm">
              <MapPin size={15} className="text-emerald-500" />

              <span>{siteConfig.address}</span>
            </li>

            <li className="flex gap-3 text-sm">
              <Mail size={15} className="text-emerald-500" />

              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-emerald-400"
              >
                {siteConfig.email}
              </a>
            </li>

            <li className="flex gap-3 text-sm">
              <Phone size={15} className="text-emerald-500" />

              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-emerald-400"
              >
                {siteConfig.phone}
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <p
              className="
text-xs
text-gray-500
mb-3
"
            >
              Stay informed — join our newsletter
            </p>

            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="
flex-1
bg-gray-900
border
border-gray-700
rounded-sm
text-white
text-sm
px-3
py-2
focus:outline-none
focus:border-emerald-600
"
              />

              <button
                className="
bg-emerald-700
text-white
text-xs
font-bold
px-4
py-2
rounded-sm
hover:bg-emerald-600
"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}

      <motion.div
        variants={fadeUp}
        className="
border-t
border-gray-800
"
      >
        <div
          className="
max-w-7xl
mx-auto
px-6
py-5
flex
flex-col
sm:flex-row
justify-between
items-center
gap-3
text-xs
text-gray-600
"
        >
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            RC 1234567
          </span>

          <div>
            <span className="mr-2">Developed by</span>

            <Link
              href="https://realcore.com.ng/"
              target="_blank"
              className="
text-emerald-400
hover:text-emerald-600
"
            >
              RealCore Technologies
            </Link>
          </div>

          <div className="flex gap-5">
            <Link href="/privacy">Privacy Policy</Link>

            <Link href="/terms">Terms of Use</Link>

            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
