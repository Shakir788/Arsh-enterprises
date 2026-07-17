"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

interface BeforeAfterPair {
  title: string;
  before: string;
  after: string;
}

const PAIRS: BeforeAfterPair[] = [
  {
    title: "Balcony, Mira Road East",
    before: "/images/before-after/pair-1-before.png",
    after: "/images/before-after/pair-1-after.png",
  },
  {
    title: "Living Room Window, Thane",
    before: "/images/before-after/pair-2-before.png",
    after: "/images/before-after/pair-2-after.png",
  },
];

function SliderCard({ pair }: { pair: BeforeAfterPair }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return;
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    updatePosition(clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-lg"
      onMouseDown={() => (dragging.current = true)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onMouseMove={handleMove}
      onTouchStart={() => (dragging.current = true)}
      onTouchEnd={() => (dragging.current = false)}
      onTouchMove={handleMove}
    >
      {/* After image (base layer) */}
      <Image
        src={pair.after}
        alt={`${pair.title} — after`}
        fill
        className="pointer-events-none object-cover"
      />

      {/* Before image (clipped via clip-path — avoids width distortion) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={pair.before}
          alt={`${pair.title} — before`}
          fill
          className="object-cover"
        />
      </div>

      {/* Divider line + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent-gold"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full gold-gradient shadow-lg">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L1 7L5 12" stroke="#0B1114" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 2L13 7L9 12" stroke="#0B1114" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-sm bg-background/60 px-3 py-1 text-xs font-medium text-text-primary backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-sm bg-background/60 px-3 py-1 text-xs font-medium text-text-primary backdrop-blur-sm">
        After
      </span>
    </div>
  );
}

export default function BeforeAfterSlider() {
  return (
    <section className="bg-background px-6 py-24 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            SEE THE DIFFERENCE
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-text-primary md:text-4xl">
            Drag to Reveal —{" "}
            <span className="italic text-accent-gold">Protection, Invisible</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Drag the slider to see how our invisible grills protect your
            home without changing how it looks.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {PAIRS.map((pair, i) => (
            <motion.div
              key={pair.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: EASE_LUXURY }}
            >
              <div className="glass-panel overflow-hidden p-2">
                <SliderCard pair={pair} />
              </div>
              <p className="mt-3 text-sm text-text-secondary">
                {pair.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}