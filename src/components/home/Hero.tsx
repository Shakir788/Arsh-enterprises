"use client";

import { useEffect, useState, useRef } from "react";
import { motion, type Variants, useInView } from "framer-motion";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: (delay: number) => ({
    y: "0%",
    transition: { duration: 1, delay, ease: EASE_LUXURY },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE_LUXURY },
  }),
};

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Background video — slow Ken Burns zoom for cinematic depth */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.webp"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/35082942/14862655_1920_1080_60fps.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Vignette + gradient overlay for legibility and depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-transparent to-background/20" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(11,17,20,0.6)_100%)]" />

      {/* Film grain texture for cinematic feel */}
      <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      {/* Content — flex layout guarantees no overlap regardless of viewport height */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-32 md:py-40">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mb-5 flex items-center gap-3 text-sm font-medium tracking-[0.25em] text-accent-gold"
          >
            <span className="h-px w-8 bg-accent-gold" />
            PREMIUM HOME PROTECTION SOLUTIONS
          </motion.p>

          <h1 className="font-display text-5xl font-medium leading-[0.95] text-text-primary sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="block overflow-hidden">
              <motion.span
                initial="hidden"
                animate="visible"
                custom={0.3}
                variants={lineReveal}
                className="block"
              >
                Protect Your Home
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial="hidden"
                animate="visible"
                custom={0.45}
                variants={lineReveal}
                className="block"
              >
                Without Compromising
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial="hidden"
                animate="visible"
                custom={0.6}
                variants={lineReveal}
                className="shimmer-text block font-display italic"
              >
                The View
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.85}
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary"
          >
            Marine-grade SS 316 invisible grills, mosquito nets &amp; PVC
            folding doors — trusted by 1000+ homes and businesses across
            Mumbai &amp; Thane.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/918755620718?text=Hi%2C%20I%27d%20like%20a%20free%20measurement%20for%20my%20home."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-sm px-10 py-4 text-sm font-semibold text-background"
            >
              <span className="absolute inset-0 gold-gradient transition-transform duration-500 ease-luxury group-hover:scale-105" />
              <span className="relative">Get Free Measurement</span>
            </a>
            <a
              href="/gallery"
              className="group relative rounded-sm border border-accent-gold/40 px-10 py-4 text-sm font-semibold text-text-primary transition-colors duration-300 hover:border-accent-gold hover:bg-accent-gold/10"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom row — stats card + scroll indicator, always below content, never overlapping */}
      <div className="relative z-10 flex items-center justify-between px-6 pb-10 md:px-16 md:pb-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-text-muted">
            SCROLL
          </span>
          <div className="h-10 w-px overflow-hidden bg-text-muted/30">
            <div className="h-full w-full origin-top animate-scroll-line bg-accent-gold" />
          </div>
        </motion.div>

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: tilt.x,
            rotateY: tilt.y,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1.3, ease: EASE_LUXURY },
            y: { duration: 0.8, delay: 1.3, ease: EASE_LUXURY },
            rotateX: { duration: 0.3, ease: "easeOut" },
            rotateY: { duration: 0.3, ease: "easeOut" },
          }}
          style={{ transformStyle: "preserve-3d", perspective: 800 }}
          className="glass-panel stat-card hidden gap-8 whitespace-nowrap px-8 py-6 md:flex"
        >
          <CountStat targetNumber={6} suffix="+" label="Years" delay={1.5} />
          <Divider />
          <CountStat targetNumber={1000} suffix="+" label="Clients" delay={1.65} />
          <Divider />
          <StaticStat value="SS 316" label="Marine Grade" delay={1.8} />
        </motion.div>
      </div>
    </section>
  );
}

function CountStat({
  targetNumber,
  suffix,
  label,
  delay,
}: {
  targetNumber: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * targetNumber));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, delay, targetNumber]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-2xl font-semibold text-text-primary">
        {count}
        {suffix}
      </p>
      <p className="mt-0.5 text-xs text-text-muted">{label}</p>
    </div>
  );
}

function StaticStat({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <div className="text-center">
      <p className="font-display text-2xl font-semibold text-accent-gold">
        {value}
      </p>
      <p className="mt-0.5 text-xs text-text-muted">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="w-px bg-border" />;
}