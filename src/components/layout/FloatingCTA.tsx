"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/918755620718?text=Hi%2C%20I%27d%20like%20a%20free%20measurement%20for%20my%20home."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.4, ease: EASE_LUXURY }}
          className="group fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full gold-gradient shadow-lg md:bottom-8 md:right-8"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-accent-gold/40 animate-cta-pulse" />

          {/* WhatsApp icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#0B1114"
            className="relative transition-transform duration-300 ease-luxury group-hover:scale-110"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.13.09-1.82-.11-.42-.13-.96-.31-1.65-.61-2.91-1.26-4.81-4.19-4.95-4.38-.14-.19-1.19-1.58-1.19-3.02s.76-2.14 1.03-2.43c.27-.29.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.83 2.03.9 2.18.07.15.12.32.02.51-.1.19-.15.3-.29.47-.14.16-.3.36-.43.48-.14.14-.29.29-.13.57.17.28.75 1.23 1.6 1.99 1.1.98 2.03 1.29 2.31 1.43.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.1 1.53.72 1.79.85.27.13.44.19.51.3.06.11.06.63-.18 1.3z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}