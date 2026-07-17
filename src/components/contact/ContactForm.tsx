"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

const PRODUCTS = [
  "Invisible Grills",
  "Mosquito Nets (Standard)",
  "Pleated Mosquito Nets",
  "Sliding Window Nets",
  "Honeycomb Mosquito Nets",
  "PVC Folding Doors",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", phone: "", product: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        className="glass-panel flex flex-col items-center justify-center gap-3 px-8 py-16 text-center"
      >
        <span className="font-display text-2xl text-accent-gold">
          Thank You
        </span>
        <p className="max-w-xs text-sm text-text-secondary">
          We&apos;ve received your inquiry and will reach out within a day.
          For a faster response, message us on WhatsApp.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-text-primary underline underline-offset-4 hover:text-accent-gold"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE_LUXURY }}
      className="glass-panel space-y-5 px-8 py-8"
    >
      <Field label="Full Name">
        <input
          required
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border-b border-border bg-transparent py-2 text-text-primary outline-none transition-colors focus:border-accent-gold"
          placeholder="Your name"
        />
      </Field>

      <Field label="Phone Number">
        <input
          required
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border-b border-border bg-transparent py-2 text-text-primary outline-none transition-colors focus:border-accent-gold"
          placeholder="+91"
        />
      </Field>

      <Field label="Product Interest">
        <select
          required
          value={form.product}
          onChange={(e) => setForm({ ...form, product: e.target.value })}
          className="w-full border-b border-border bg-transparent py-2 text-text-primary outline-none transition-colors focus:border-accent-gold"
        >
          <option value="" disabled className="bg-surface">
            Select a product
          </option>
          {PRODUCTS.map((p) => (
            <option key={p} value={p} className="bg-surface">
              {p}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message (optional)">
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none border-b border-border bg-transparent py-2 text-text-primary outline-none transition-colors focus:border-accent-gold"
          placeholder="Tell us about your space..."
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full gold-gradient rounded-sm px-8 py-4 text-sm font-semibold text-background transition-transform duration-300 ease-luxury hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-error">
          Something went wrong. Please try WhatsApp instead.
        </p>
      )}
    </motion.form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium tracking-wide text-text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}