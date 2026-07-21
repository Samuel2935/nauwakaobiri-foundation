"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-emerald-800 text-white text-xs py-2 px-6 hidden md:flex justify-between items-center">
        <span>Empowering the youth through social investment, education and community development since {siteConfig.founded}</span>
        <div className="flex gap-6">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-emerald-200 transition-colors">
            {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phone}`} className="hover:text-emerald-200 transition-colors">
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm flex items-center justify-center text-white font-black text-sm font-display tracking-tight">
            <Image src={siteConfig.logo} alt={siteConfig.shortName} width={40} height={40} className="rounded-full" />
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-gray-900 text-sm leading-tight">
              NUWAKOBIRI
            </div>
            <div className="text-xs text-emerald-700 font-medium tracking-wide">
              Youth Foundation
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors rounded-sm"
              >
                {link.label}
                {link.children && <ChevronDown size={13} className="opacity-60" />}
              </Link>

              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-sm min-w-[220px] py-2 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#"
            className="bg-emerald-700 text-white text-sm font-bold px-5 py-2.5 hover:bg-emerald-800 transition-colors tracking-wide"
          >
            Apply Now
          </Link>
          <Link
            href="#donate"
            className="border-2 border-emerald-700 text-emerald-700 text-sm font-bold px-5 py-2 hover:bg-emerald-700 hover:text-white transition-colors tracking-wide"
          >
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-sm font-semibold text-gray-800 border-b border-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 space-y-1 mt-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-2 text-xs text-gray-500 hover:text-emerald-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/get-involved/apply" className="bg-emerald-700 text-white text-sm font-bold px-5 py-3 text-center">Apply Now</Link>
            <Link href="/donate" className="border-2 border-emerald-700 text-emerald-700 text-sm font-bold px-5 py-3 text-center">Donate</Link>
          </div>
        </div>
      )}
    </header>
  );
}
