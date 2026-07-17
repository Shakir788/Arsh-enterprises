import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Mosquito Nets | Arsh Enterprises",
  description:
    "Standard, Pleated, Sliding Window & Honeycomb mosquito nets — matched to your exact window or door. Free measurement across Mumbai & Thane.",
};

const VARIANTS = [
  {
    name: "Standard",
    description:
      "Fixed mosquito nets, custom fit to your window frame. The simplest, most affordable option.",
    image: "/images/services/mosquito-nets.png",
  },
  {
    name: "Pleated",
    description:
      "Retractable, accordion-fold design — opens and closes smoothly, ideal for frequently used doors.",
    image: "/images/services/pleated-nets.png",
  },
  {
    name: "Sliding Window",
    description:
      "Built specifically for sliding window and door tracks — moves with your window, not against it.",
    image: "/images/services/sliding-nets.png",
  },
  {
    name: "Honeycomb",
    description:
      "Premium retractable mesh with a honeycomb fold pattern — our most refined option for modern homes.",
    image: "/images/services/honeycomb-nets.png",
  },
];

const FAQS = [
  {
    q: "Which mosquito net type is right for my window?",
    a: "It depends on your window/door type — sliding tracks need sliding nets, frequently opened doors suit pleated or honeycomb, and standard fixed windows work well with standard nets. We assess this during free measurement.",
  },
  {
    q: "Do you provide free site measurement?",
    a: "Yes — free measurement is available across Mumbai & Thane. Message us on WhatsApp to schedule a visit.",
  },
  {
    q: "What areas do you service?",
    a: "We currently service Mumbai & Thane region.",
  },
];

export default function MosquitoNetsPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Mini hero */}
      <section className="relative flex h-[70vh] min-h-[500px] items-end overflow-hidden">
        <Image
          src="/images/services/mosquito-nets.png"
          alt="Mosquito Nets installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            MOSQUITO NET RANGE
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight text-text-primary md:text-6xl">
            Fresh Air,{" "}
            <span className="italic text-accent-gold">Zero Compromise</span>
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary">
          <p>
            Not every window needs the same solution. We offer four
            distinct mosquito net variants, each matched to your specific
            window or door configuration — because a one-size-fits-all net
            never fits quite right.
          </p>
        </div>
      </section>

      {/* Variant comparison grid */}
      <section className="px-6 pb-24 md:pb-40">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VARIANTS.map((variant) => (
            <div key={variant.name} className="glass-panel overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={variant.image}
                  alt={variant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-text-primary">
                  {variant.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {variant.description}
                </p>
              </div>
            </div>
          ))}
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
          href="https://wa.me/918755620718?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20Mosquito%20Nets."
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