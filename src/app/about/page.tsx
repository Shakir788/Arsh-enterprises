import Navbar from "@/components/layout/Navbar";
import AboutContent from "@/components/about/AboutContent";

export const metadata = {
  title: "Our Story | Arsh Enterprises",
  description:
    "6 years protecting Mumbai & Thane homes with marine-grade SS 316 invisible grills, mosquito nets & PVC folding doors.",
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <AboutContent />
    </main>
  );
}