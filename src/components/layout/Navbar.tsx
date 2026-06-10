"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[rgba(255,255,255,0.03)] backdrop-blur-md border-b border-[rgba(255,255,255,0.1)] shadow-sm">
        <div className="flex justify-between items-center h-20 px-5 md:px-16 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.png" alt="RUNA LABS" width={40} height={40} className="h-10 w-auto" />
            <span className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium tracking-tighter text-[var(--color-on-surface)]">
              RUNA LABS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1"
                    : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="glow-button px-6 py-2.5 rounded-full text-white font-bold text-sm hidden sm:block active:scale-95 transition-transform"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[var(--color-on-surface)] p-2"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <motion.div className="absolute right-0 top-0 h-full w-[300px] bg-[#0a0d1c] border-l border-[rgba(255,255,255,0.1)] p-8 flex flex-col">
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end text-[var(--color-on-surface-variant)] mb-8"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-[28px]">close</span>
              </button>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-lg font-semibold transition-colors ${
                        isActive(link.href)
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="glow-button block text-center px-8 py-4 rounded-xl text-white font-bold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
