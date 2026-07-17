import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | Arsh Enterprises",
  description:
    "Get a free measurement for invisible grills, mosquito nets & PVC folding doors. Mira Road East, Mumbai & Thane.",
};

export default function ContactPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="px-6 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            GET IN TOUCH
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight text-text-primary md:text-5xl">
            Let&apos;s Protect{" "}
            <span className="italic text-accent-gold">Your Home</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Free on-site measurement across Mumbai &amp; Thane. Reach out
            and we&apos;ll get back to you within a day.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-40">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: contact details + map */}
          <div className="space-y-8">
            <div className="glass-panel px-8 py-8">
              <h2 className="font-display text-lg text-text-primary">
                WhatsApp
              </h2>
              <a
                href="https://wa.me/918755620718?text=Hi%2C%20I%27d%20like%20a%20free%20measurement%20for%20my%20home."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-2xl font-medium text-accent-gold transition-opacity hover:opacity-80"
              >
                +91 87556 20718
              </a>
              <p className="mt-2 text-sm text-text-secondary">
                Fastest way to reach us — usually reply within a few hours.
              </p>
            </div>

            <div className="glass-panel px-8 py-8">
              <h2 className="font-display text-lg text-text-primary">
                Visit Us
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Shop No. 03, Orchid Tulip, Jangid Enclave, Kanakia Road,
                <br />
                Mira Road East, Thane, Mumbai, Maharashtra — 401107
              </p>
            </div>

            <div className="glass-panel overflow-hidden">
              <iframe
                title="Arsh Enterprises Location"
                src="https://www.google.com/maps?q=Orchid+Tulip+Jangid+Enclave+Kanakia+Road+Mira+Road+East+Thane+Mumbai+401107&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}