import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export const metadata = {
  title: "PVC Folding Doors | Arsh Enterprises",
  description:
    "Smart PVC folding partition doors for flexible residential and commercial spaces. Free measurement across Mumbai & Thane.",
};

const FAQS = [
  {
    q: "Where are PVC folding doors typically used?",
    a: "PVC folding partition doors work well for both residential space-saving (balconies, room dividers) and commercial use (offices, hotels, restaurants needing flexible partitions).",
  },
  {
    q: "How long does installation take?",
    a: "[NEEDS ARSH INPUT] — typical installation timeline to be confirmed.",
  },
  {
    q: "Do you provide free site measurement?",
    a: "Yes — free measurement is available across Mumbai & Thane. Message us on WhatsApp to schedule a visit.",
  },
];

export default function PvcDoorsPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Mini hero */}
      <section className="relative flex h-[70vh] min-h-[500px] items-end overflow-hidden">
        <Image
          src="/images/services/pvc-doors.webp"
          alt="PVC Folding Doors installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            PVC FOLDING DOORS
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight text-text-primary md:text-6xl">
            Smart Partitions for{" "}
            <span className="italic text-accent-gold">Flexible Spaces</span>
          </h1>
        </div>
      </section>

      {/* Product detail */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-text-secondary">
          <p>
            PVC folding partition doors give you the flexibility to open up
            or divide a space in seconds — perfect for balconies, room
            dividers, and commercial spaces like offices, hotels, and
            restaurants that need adaptable layouts.
          </p>
          <p>
            Suited for both residential and commercial use, our folding
            doors are built for smooth, reliable operation — a smart space
            solution for modern homes and businesses alike.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-medium text-text-primary md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="glass-panel px-6 py-5">
                <p className="font-medium text-text-primary">{faq.q}</p>
                <p className="mt-2 text-sm text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <a
          href="https://wa.me/918755620718?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20PVC%20Folding%20Doors."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gold-gradient rounded-sm px-10 py-4 text-sm font-semibold text-background transition-transform duration-300 ease-luxury hover:-translate-y-0.5"
        >
          Get Free Measurement
        </a>
      </section>
    </main>
  );
}