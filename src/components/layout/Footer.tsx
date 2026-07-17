"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface px-6 py-16">
      {/* Subtle depth glow, consistent with rest of site */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent-gold/[0.05] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: EASE_LUXURY }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          {/* Logo + tagline */}
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-text-secondary">
              Marine-grade home protection solutions, trusted by 1000+
              homes and businesses across Mumbai &amp; Thane.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-accent-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social + contact */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/arsh_enterprises_0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-secondary transition-colors hover:text-accent-gold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/arshenterprises"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-text-secondary transition-colors hover:text-accent-gold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
            <a
              href="https://wa.me/918755620718"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-accent-gold"
            >
              +91 87556 20718
            </a>
            <p className="max-w-[220px] text-xs text-text-muted">
              Shop No. 03, Orchid Tulip, Jangid Enclave, Kanakia Road, Mira
              Road East, Thane, Mumbai — 401107
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Arsh Enterprises. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}