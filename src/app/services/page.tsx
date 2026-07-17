import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Arsh Enterprises",
  description:
    "Invisible Grills, Mosquito Nets (Standard, Pleated, Sliding, Honeycomb) & PVC Folding Doors — marine-grade SS 316 installations across Mumbai & Thane.",
};

const SERVICES = [
  {
    title: "Invisible Grills",
    tagline: "Safety that disappears into the view",
    image: "/images/services/invisible-grills.png",
    href: "/services/invisible-grills",
  },
  {
    title: "Mosquito Nets",
    tagline: "Standard, Pleated, Sliding & Honeycomb — all in one range",
    image: "/images/services/mosquito-nets.png",
    href: "/services/mosquito-nets",
  },
  {
    title: "PVC Folding Doors",
    tagline: "Smart partitions for flexible spaces",
    image: "/images/services/pvc-doors.png",
    href: "/services/pvc-doors",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="px-6 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            OUR RANGE
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight text-text-primary md:text-5xl">
            Marine-Grade Protection,{" "}
            <span className="italic text-accent-gold">Every Space</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Every installation uses SS 316 marine-grade stainless steel —
            built for Mumbai&apos;s weather, not just the showroom.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-40">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group glass-panel relative block aspect-[4/5] overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h2 className="font-display text-xl font-medium text-text-primary">
                  {service.title}
                </h2>
                <span className="mt-1 block h-px w-0 bg-accent-gold transition-all duration-500 ease-luxury group-hover:w-12" />
                <p className="mt-3 text-sm text-text-secondary">
                  {service.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}