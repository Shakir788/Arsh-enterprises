import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata = {
  title: "Gallery | Arsh Enterprises",
  description:
    "Browse our installations across Mumbai & Thane — Invisible Grills, Mosquito Nets & PVC Folding Doors.",
};

export default function GalleryPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="px-6 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent-gold">
            OUR WORK
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight text-text-primary md:text-5xl">
            Real Homes,{" "}
            <span className="italic text-accent-gold">Real Protection</span>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-40">
        <div className="mx-auto max-w-6xl">
          <GalleryContent />
        </div>
      </section>

      <Footer />
    </main>
  );
}