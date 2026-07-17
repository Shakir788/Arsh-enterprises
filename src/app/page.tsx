import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import VideoGallery from "@/components/home/VideoGallery";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <VideoGallery />
      <BeforeAfterSlider />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}