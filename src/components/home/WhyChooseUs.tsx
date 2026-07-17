"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const MATERIALS = [
  {
    label: "SS 316 Wire",
    spec: "2.5mm, Nylon Coated",
    detail:
      "Marine-grade stainless steel — resists Mumbai's coastal humidity where standard SS 304 corrodes within years.",
    image: "/images/materials/ss316-wire.jpeg",
  },
  {
    label: "SS Bolts",
    spec: "Stainless Steel",
    detail:
      "No rust bleed onto walls or window frames, even after years of monsoon exposure.",
    image: "/images/materials/ss-bolt.jpeg",
  },
  {
    label: "Aluminium Ferrule",
    spec: "Precision Tensioning",
    detail:
      "Lightweight yet corrosion-resistant — keeps every wire perfectly taut for years.",
    image: "/images/materials/aluminium-ferrule.jpeg",
  },
  {
    label: "SS Fasteners",
    spec: "Stainless Steel",
    detail:
      "Long-term structural integrity for every joint and fitting.",
    image: "/images/materials/ss-fastener.jpeg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-alt px-6 py-24 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            WHY CHOOSE US
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-text-primary md:text-4xl">
            Built From What&apos;s{" "}
            <span className="italic text-accent-gold">Underneath</span>,
            <br />
            Not Just What You See
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Every Arsh Enterprises installation uses marine-grade SS 316 —
            engineered to resist Mumbai&apos;s coastal humidity for years,
            not months.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MATERIALS.map((material, i) => (
            <motion.div
              key={material.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE_LUXURY }}
              className="glass-panel overflow-hidden"
            >
              {/* Macro material shot */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={material.image}
                  alt={material.label}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-medium text-text-primary">
                  {material.label}
                </h3>
                <p className="mt-1 text-xs font-medium tracking-wide text-accent-gold">
                  {material.spec}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {material.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}