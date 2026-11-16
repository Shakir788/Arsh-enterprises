"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE_LUXURY },
  }),
};

const MILESTONES = [
  { target: 6, suffix: "+", label: "Years in Mumbai & Thane" },
  { target: 1000, suffix: "+", label: "Homes & Businesses Protected" },
];

const MATERIALS = [
  {
    image: "/images/materials/ss316-wire.jpeg",
    label: "SS 316 Wire",
    spec: "2.5mm, Nylon Coated",
    detail:
      "Marine-grade stainless steel — resists Mumbai's coastal humidity where SS 304 corrodes within years.",
  },
  {
    image: "/images/materials/ss-bolt.jpeg",
    label: "SS Bolts",
    spec: "Stainless Steel",
    detail: "No rust bleed onto walls or window frames, even after years of monsoon exposure.",
  },
  {
    image: "/images/materials/aluminium-ferrule.jpeg",
    label: "Aluminium Ferrule",
    spec: "Precision Tensioning",
    detail: "Lightweight yet corrosion-resistant — keeps every wire perfectly taut for years.",
  },
  {
    image: "/images/materials/ss-fastener.jpeg",
    label: "SS Fasteners",
    spec: "Stainless Steel",
    detail: "Long-term structural integrity for every joint and fitting.",
  },
];

export default function AboutContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.9]);

  return (
    <>
      {/* Parallax hero image */}
      <section
        ref={heroRef}
        className="relative flex h-[75vh] min-h-[520px] items-end overflow-hidden"
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 h-[130%] w-full">
          <Image
            src="/images/about-installer.webp"
            alt="Arsh Enterprises installation work"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mb-4 text-sm font-medium tracking-[0.25em] text-accent-gold"
          >
            OUR STORY
          </motion.p>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] text-text-primary md:text-6xl">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.25, ease: EASE_LUXURY }}
                className="block"
              >
                Six Years of Protecting
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.4, ease: EASE_LUXURY }}
                className="shimmer-text block italic"
              >
                What Matters Most
              </motion.span>
            </span>
          </h1>
        </div>
      </section>

      {/* Milestone stat strip — count-up animated */}
      <section className="border-y border-border bg-surface px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          {MILESTONES.map((m, i) => (
            <CountStat
              key={m.label}
              target={m.target}
              suffix={m.suffix}
              label={m.label}
              delay={i * 0.15}
            />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_LUXURY }}
            className="text-center sm:text-left"
          >
            <p className="font-display text-3xl font-semibold text-accent-gold">
              SS 316
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Marine-Grade Standard, Always
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story — asymmetric editorial layout with mouse-tilt quote card */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7 md:col-start-1">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE_LUXURY }}
              className="text-xl font-medium leading-relaxed text-text-primary"
            >
              Arsh Enterprises started with a simple promise: protect homes
              without ruining the view.
            </motion.p>
            {[
              "For 6 years, we've served residential and commercial clients across Mumbai & Thane — from high-rise apartments in Mira Road to offices and hotels that need smart, safe, beautiful solutions.",
              "Today, we've installed across 1000+ homes and businesses, offering a full range that includes standard, pleated, sliding window, and honeycomb mosquito nets, invisible grills, and PVC folding partition doors — each matched to the customer's exact window, door, and space.",
              "We're based in Mira Road East, and we service Mumbai & Thane directly — no subcontractors, no diluted quality control. Every installation is our own work, backed by free on-site measurement and honest advice about which solution actually fits your home.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 * (i + 1),
                  ease: EASE_LUXURY,
                }}
                className="mt-6 text-lg leading-relaxed text-text-secondary"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <TiltQuoteCard />
          </div>
        </div>
      </section>

      {/* Material proof strip — staggered flip cards on rich layered background */}
      <section className="relative overflow-hidden bg-surface-alt px-6 py-24 md:py-32">
        {/* Layered radial glows for depth — replaces flat background */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent-gold/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent-gold/[0.05] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 [background:linear-gradient(135deg,transparent_0%,rgba(200,154,74,0.03)_50%,transparent_100%)]" />
        <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.03]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE_LUXURY }}
            className="mb-12 max-w-2xl"
          >
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
              THE DIFFERENCE IS UNDERNEATH
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-text-primary md:text-4xl">
              Engineering, Not{" "}
              <span className="italic text-accent-gold">Marketing</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MATERIALS.map((m, i) => (
              <FlipMaterialCard key={m.label} {...m} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: EASE_LUXURY }}
        className="px-6 py-24 text-center md:py-32"
      >
        <p className="mx-auto max-w-xl text-lg text-text-secondary">
          Ready to protect your home without compromising the view?
        </p>
        <a
          href="https://wa.me/918755620718?text=Hi%2C%20I%27d%20like%20a%20free%20measurement%20for%20my%20home."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block gold-gradient rounded-sm px-10 py-4 text-sm font-semibold text-background transition-transform duration-300 ease-luxury hover:-translate-y-0.5"
        >
          Get Free Measurement
        </a>
      </motion.section>
    </>
  );
}

function CountStat({
  target,
  suffix,
  label,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, delay, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE_LUXURY }}
      className="text-center sm:text-left"
    >
      <p className="font-display text-3xl font-semibold text-accent-gold">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-text-secondary">{label}</p>
    </motion.div>
  );
}

function TiltQuoteCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: EASE_LUXURY }}
      className="md:sticky md:top-32"
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="glass-panel stat-card px-8 py-10"
      >
        <p className="font-display text-lg italic text-accent-gold">
          &ldquo;What sets us apart isn&apos;t marketing — it&apos;s
          materials.&rdquo;
        </p>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          Every invisible grill, mosquito net, and PVC folding door we
          install uses marine-grade SS 316 stainless steel — the same grade
          used in coastal and marine environments. Mumbai&apos;s humidity
          destroys anything less within a few years. Most local
          fabricators use SS 304 or galvanized steel to cut costs. We
          don&apos;t.
        </p>
      </motion.div>
    </motion.div>
  );
}

function FlipMaterialCard({
  image,
  label,
  spec,
  detail,
  delay,
}: {
  image: string;
  label: string;
  spec: string;
  detail: string;
  delay: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE_LUXURY }}
      className="aspect-[4/5] w-full"
      style={{ perspective: 1200 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* Front face */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="glass-panel absolute inset-0 overflow-hidden"
        >
          <div className="relative h-2/3 w-full">
            <Image src={image} alt={label} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="p-5">
            <h3 className="font-display text-base text-text-primary">
              {label}
            </h3>
            <p className="mt-1 text-xs font-medium tracking-wide text-accent-gold">
              {spec}
            </p>
          </div>
        </div>

        {/* Back face */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="glass-panel absolute inset-0 flex flex-col justify-center gap-3 border-accent-gold/30 bg-surface p-6"
        >
          <h3 className="font-display text-lg text-accent-gold">{label}</h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {detail}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}