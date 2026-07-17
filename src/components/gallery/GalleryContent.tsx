"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const FILTERS = [
  "All",
  "Invisible Grills",
  "Mosquito Nets",
  "PVC Folding Doors",
];

const PROJECTS = [
  {
    title: "Luxury Balcony Invisible Grill",
    category: "Invisible Grills",
    image: "/images/gallery/gallery-1.png",
  },
  {
    title: "Floor-to-Ceiling Window Invisible Grill",
    category: "Invisible Grills",
    image: "/images/gallery/gallery-2.png",
  },
  {
    title: "Sliding Mosquito Net",
    category: "Mosquito Nets",
    image: "/images/gallery/gallery-3.png",
  },
  {
    title: "Honeycomb Mosquito Net",
    category: "Mosquito Nets",
    image: "/images/gallery/gallery-4.png",
  },
  {
    title: "PVC Folding Partition Door",
    category: "PVC Folding Doors",
    image: "/images/gallery/gallery-5.png",
  },
  {
    title: "Professional Installation",
    category: "Installation",
    image: "/images/gallery/gallery-6.png",
  },
];

export default function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        className="mb-12 flex flex-wrap justify-center gap-3"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ease-luxury ${
              activeFilter === filter
                ? "border-accent-gold bg-accent-gold/10 text-accent-gold"
                : "border-border text-text-secondary hover:border-accent-gold/40 hover:text-text-primary"
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: EASE_LUXURY }}
              className="group glass-panel relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium tracking-wide text-accent-gold">
                  {project.category}
                </p>
                <h3 className="mt-1 font-display text-lg text-text-primary">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}