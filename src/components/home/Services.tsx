"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  {
    title: "Invisible Grills",
    tagline: "Safety that disappears into the view",
    image: "/images/services/invisible-grills.webp",
    href: "/services/invisible-grills",
  },
  {
    title: "Mosquito Nets",
    tagline: "Fresh air, zero compromise",
    image: "/images/services/mosquito-nets.webp",
    href: "/services/mosquito-nets",
  },
  {
    title: "Pleated Mosquito Nets",
    tagline: "Retractable elegance for modern doors",
    image: "/images/services/pleated-nets.webp",
    href: "/services/mosquito-nets",
  },
  {
    title: "Sliding Window Nets",
    tagline: "Built for your window's exact track",
    image: "/images/services/sliding-nets.webp",
    href: "/services/mosquito-nets",
  },
  {
    title: "Honeycomb Mosquito Nets",
    tagline: "Premium mesh, seamless fold",
    image: "/images/services/honeycomb-nets.webp",
    href: "/services/mosquito-nets",
  },
  {
    title: "PVC Folding Doors",
    tagline: "Smart partitions for flexible spaces",
    image: "/images/services/pvc-doors.webp",
    href: "/services/pvc-doors",
  },
];

export default function Services() {
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
            OUR RANGE
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-text-primary md:text-4xl">
            Six Solutions, One Standard —{" "}
            <span className="italic text-accent-gold">Marine-Grade</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.1,
                ease: EASE_LUXURY,
              }}
            >
              <Link
                href={service.href}
                className="group glass-panel relative block aspect-[4/5] overflow-hidden"
              >
                {/* Background image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-luxury group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/10" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-medium text-text-primary">
                    {service.title}
                  </h3>
                  <span className="mt-1 block h-px w-0 bg-accent-gold transition-all duration-500 ease-luxury group-hover:w-12" />
                  <p className="mt-3 text-sm text-text-secondary">
                    {service.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}