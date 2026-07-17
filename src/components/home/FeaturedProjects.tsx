"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  {
    title: "High-Rise Apartment, Mira Road",
    product: "Invisible Grills",
    image: "/images/projects/project-1.png",
  },
  {
    title: "Luxury Balcony, Thane",
    product: "Pleated Mosquito Nets",
    image: "/images/projects/project-2.png",
  },
  {
    title: "Commercial Office, Mumbai",
    product: "PVC Folding Doors",
    image: "/images/projects/project-3.png",
  },
  {
    title: "Residential Complex, Mira Road East",
    product: "Honeycomb Mosquito Nets",
    image: "/images/projects/project-4.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-background px-6 py-24 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
              FEATURED PROJECTS
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-text-primary md:text-4xl">
              Real Homes,{" "}
              <span className="italic text-accent-gold">Real Protection</span>
            </h2>
          </div>
          <a
            href="/gallery"
            className="text-sm font-semibold text-text-primary transition-colors hover:text-accent-gold"
          >
            View Full Gallery →
          </a>
        </motion.div>

        <div className="space-y-24 md:space-y-40">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: EASE_LUXURY }}
              className={`flex flex-col gap-6 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } md:items-center md:gap-12`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg md:w-2/3">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-luxury hover:scale-105"
                />
              </div>
              <div className="md:w-1/3">
                <p className="text-xs font-medium tracking-wide text-accent-gold">
                  {project.product}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium text-text-primary">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}