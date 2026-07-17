"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? "glass-panel !rounded-none border-x-0 border-t-0 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-accent-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/918755620718?text=Hi%2C%20I%27d%20like%20a%20free%20measurement%20for%20my%20home."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden gold-gradient rounded-sm px-6 py-2.5 text-sm font-semibold text-background transition-transform duration-300 ease-luxury hover:-translate-y-0.5 md:block"
        >
          Get Free Measurement
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-6 bg-text-primary transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-text-primary transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-text-primary transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-0 flex flex-col items-center justify-center gap-8 bg-background/98 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{ transitionDelay: `${i * 60}ms` }}
            className="font-display text-3xl text-text-primary transition-colors hover:text-accent-gold"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://wa.me/918755620718?text=Hi%2C%20I%27d%20like%20a%20free%20measurement%20for%20my%20home."
          target="_blank"
          rel="noopener noreferrer"
          className="gold-gradient mt-4 rounded-sm px-8 py-3 text-sm font-semibold text-background"
        >
          Get Free Measurement
        </a>
      </div>
    </header>
  );
}