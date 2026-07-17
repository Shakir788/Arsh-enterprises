"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { target: 1000, suffix: "+", label: "Happy Clients" },
  { target: 6, suffix: "+", label: "Years Experience" },
  { target: 115, suffix: "K+", label: "Monthly Reach" },
  { target: 4, suffix: "-Variant", label: "Mosquito Net Range" },
];

// 15 Custom Reviews for Arsh Netting Solutions
const REVIEWS = [
  {
    id: 1,
    name: "Rajesh Deshmukh",
    location: "Thane",
    product: "Pleated Mosquito Net",
    text: "Got the pleated mosquito nets installed for our balcony in Thane. The quality is premium and the sliding mechanism is extremely smooth. Highly recommended for high-rise apartments!"
  },
  {
    id: 2,
    name: "Sneha Patil",
    location: "Andheri",
    product: "Invisible Grill",
    text: "As a mother of two toddlers, safety was my biggest concern. Arsh Netting installed invisible grills in our flat. They look elegant and don't block the view at all. Great job!"
  },
  {
    id: 3,
    name: "Amit Kadam",
    location: "Borivali",
    product: "Velcro Mosquito Net",
    text: "Quick service and very professional staff. They took exact measurements and fitted the nets perfectly on our bedroom windows. No more mosquito problems at night."
  },
  {
    id: 4,
    name: "Pooja Shirke",
    location: "Kalyan",
    product: "Pigeon Netting",
    text: "We were tired of pigeons ruining our AC units. The Arsh team did a fantastic job with the bird netting. Clean, neat, and very sturdy installation."
  },
  {
    id: 5,
    name: "Rohan Joshi",
    location: "Navi Mumbai",
    product: "Pleated Net",
    text: "I loved their attention to detail. The pleated nets blend perfectly with our UPVC windows. They delivered exactly what they promised on time."
  },
  {
    id: 6,
    name: "Neha Kulkarni",
    location: "Dadar",
    product: "Invisible Grill",
    text: "Very happy with the invisible grills installed in our living room balcony. It gives an open feel to the house while keeping it 100% secure."
  },
  {
    id: 7,
    name: "Suresh Shinde",
    location: "Mulund",
    product: "Roller Mosquito Net",
    text: "Top-notch material and excellent finishing. The roller nets are very convenient to use. The installation team was polite and cleaned up everything before leaving."
  },
  {
    id: 8,
    name: "Meera Jadhav",
    location: "Goregaon",
    product: "Pleated Mosquito Net",
    text: "Arsh Netting Solutions provided the best quote. The pleated nets look very modern, slide like butter, and are incredibly easy to maintain."
  },
  {
    id: 9,
    name: "Vishal Pawar",
    location: "Powai",
    product: "Balcony Invisible Grill",
    text: "Excellent work! The invisible grill installation took just a few hours. The wire tension is perfect and it feels very safe for our indoor pets."
  },
  {
    id: 10,
    name: "Aarti Gokhale",
    location: "Vile Parle",
    product: "Window Mosquito Net",
    text: "Good quality mesh that doesn't block the breeze. The frame color matched our windows perfectly. Very satisfied with the overall service."
  },
  {
    id: 11,
    name: "Kiran Wagh",
    location: "Dombivli",
    product: "Bird Netting",
    text: "Highly professional team. They covered our entire duct area with high-quality netting. Finally got rid of the pigeon menace in our building!"
  },
  {
    id: 12,
    name: "Supriya Chavan",
    location: "Khar",
    product: "Pleated Door Net",
    text: "Installed a pleated mesh door for the main entrance. It keeps all insects out without compromising the cross-ventilation in our hallway."
  },
  {
    id: 13,
    name: "Milind Rane",
    location: "Mira Road",
    product: "Invisible Grill",
    text: "The finishing of the invisible grill is flawless. You can hardly notice it from a distance. A must-have for anyone living on higher floors."
  },
  {
    id: 14,
    name: "Aditi Sawant",
    location: "Bandra",
    product: "Mosquito Net",
    text: "Prompt response and fast execution. I called them on a Tuesday, and by Thursday, the nets were fully installed. The material feels very durable."
  },
  {
    id: 15,
    name: "Prasad Kale",
    location: "Thane West",
    product: "Complete Home Solution",
    text: "We got both invisible grills and pleated mosquito nets done for our new 3BHK. Arsh Netting gave us a great combo deal. Superb workmanship!"
  }
];

function AnimatedStat({
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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 1400;
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE_LUXURY }}
      className="glass-panel px-6 py-10 text-center"
    >
      <p className="font-display text-4xl font-semibold text-accent-gold md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-surface-alt px-6 py-24 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            TRUSTED ACROSS MUMBAI &amp; THANE
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-text-primary md:text-4xl">
            Numbers That{" "}
            <span className="italic text-accent-gold">Speak for Us</span>
          </h2>
        </motion.div>

        {/* Animated Stats Section */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Reviews Grid Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE_LUXURY }}
            className="mx-auto mb-12 text-center"
          >
            <h3 className="font-display text-2xl font-medium text-text-primary md:text-3xl">
              What Our Clients Say
            </h3>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.15, ease: EASE_LUXURY }}
                className="glass-panel flex flex-col justify-between p-6 text-left"
              >
                <div>
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-lg font-semibold text-text-primary">
                        {review.name}
                      </p>
                      <p className="text-xs text-text-secondary">{review.location}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent-gold/10 px-3 py-1 text-[10px] font-medium tracking-wider text-accent-gold uppercase">
                      {review.product}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                
                {/* 5-Star Rating */}
                <div className="mt-6 flex gap-1 text-accent-gold">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}