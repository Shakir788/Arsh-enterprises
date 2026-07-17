import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Invisible Grills | Arsh Enterprises",
  description:
    "Marine-grade SS 316 invisible grills — safety without blocking your view. Free measurement across Mumbai & Thane.",
};

const FAQS = [
  {
    q: "What makes SS 316 different from regular steel grills?",
    a: "SS 316 is marine-grade stainless steel, engineered to resist corrosion in humid, coastal environments like Mumbai. Most local fabricators use SS 304 or galvanized steel, which corrodes within a few years. SS 316 is built to last significantly longer.",
  },
  {
    q: "How long does installation take?",
    a: "[NEEDS ARSH INPUT] — typical installation timeline to be confirmed.",
  },
  {
    q: "Do you provide free site measurement?",
    a: "Yes — free measurement is available across Mumbai & Thane. Message us on WhatsApp to schedule a visit.",
  },
  {
    q: "Is there a warranty?",
    a: "[NEEDS ARSH INPUT] — warranty terms to be confirmed.",
  },
];

export default function InvisibleGrillsPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Mini hero */}
      <section className="relative flex h-[70vh] min-h-[500px] items-end overflow-hidden">
        <Image
          src="/images/services/invisible-grills.png"
          alt="Invisible Grills installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            INVISIBLE GRILLS
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight text-text-primary md:text-6xl">
            Safety That Disappears{" "}
            <span className="italic text-accent-gold">Into the View</span>
          </h1>
        </div>
      </section>

      {/* Product detail */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-text-secondary">
          <p>
            Invisible grills protect your balcony, window, or terrace
            without the bulky look of traditional iron grills. Made from
            marine-grade SS 316 stainless steel wire (2.5mm, nylon coated),
            they&apos;re nearly invisible from a distance — preserving your
            view while keeping your home safe for children, pets, and
            elderly family members.
          </p>
          <p>
            Every installation uses SS bolts and aluminium ferrules for
            precision tensioning — meaning your grill stays taut and secure
            for years, without rust bleeding onto your walls or window
            frames.
          </p>
        </div>

        {/* Material spec callout */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="glass-panel px-8 py-8">
            <h2 className="font-display text-xl text-text-primary">
              Built From Marine-Grade SS 316
            </h2>
            <p className="mt-3 text-text-secondary">
              2.5mm wire, 0.5mm nylon coated — engineered to resist
              Mumbai&apos;s coastal humidity for years, not months.
            </p>
          </div>
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
          href="https://wa.me/918755620718?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20Invisible%20Grills."
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