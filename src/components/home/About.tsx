"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section className="bg-surface px-6 py-24 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-lg"
        >
          <Image
            src="/images/about-installer.webp"
            alt="Arsh Enterprises installation work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            OUR STORY
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-text-primary md:text-4xl">
            Six Years of Protecting
            <br />
            What Matters <span className="italic text-accent-gold">Most</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            For 6 years, Arsh Enterprises has protected Mumbai &amp; Thane
            homes and businesses — not with the cheapest materials, but with
            marine-grade SS 316 stainless steel built to survive this
            city&apos;s weather. What started as a single installer&apos;s
            promise is now trusted by 1000+ clients.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-accent-gold"
          >
            Our Full Story
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}