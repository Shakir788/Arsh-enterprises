"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const FAQS = [
  {
    q: "What makes SS 316 different from regular steel grills?",
    a: "SS 316 is marine-grade stainless steel, engineered to resist corrosion in humid, coastal environments like Mumbai. Most local fabricators use SS 304 or galvanized steel, which corrodes within a few years — SS 316 is built to last significantly longer.",
  },
  {
    q: "Do you provide free site measurement?",
    a: "Yes — free measurement is available across Mumbai & Thane. Message us on WhatsApp to schedule a visit at your convenience.",
  },
  {
    q: "Which mosquito net type is right for my window?",
    a: "It depends on your window/door type — sliding tracks need sliding nets, frequently opened doors suit pleated or honeycomb nets, and standard fixed windows work well with standard nets. We assess this during your free measurement visit.",
  },
  {
    q: "What areas do you service?",
    a: "We currently service the Mumbai & Thane region directly — no subcontractors, so quality stays consistent across every installation.",
  },
  {
    q: "How long does installation take?",
    a: "[NEEDS ARSH INPUT] — typical installation timeline to be confirmed.",
  },
  {
    q: "Is there a warranty on the installation?",
    a: "[NEEDS ARSH INPUT] — warranty terms to be confirmed.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onClick,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="glass-panel overflow-hidden">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-text-primary">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE_LUXURY }}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-gold/40 text-accent-gold"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_LUXURY }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background px-6 py-24 md:py-40">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            QUESTIONS &amp; ANSWERS
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-text-primary md:text-4xl">
            Frequently Asked{" "}
            <span className="italic text-accent-gold">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE_LUXURY }}
            >
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}