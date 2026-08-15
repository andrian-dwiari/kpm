import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import PropertyGallery from "@/components/PropertyGallery";
import Highlights from "@/components/Highlights";
import LocationSection from "@/components/LocationSection";
import DetailSection from "@/components/DetailSection";
import HowToRent from "@/components/HowToRent";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <AboutSection />
        <PropertyGallery />
        <Highlights />
        <LocationSection />
        <DetailSection />
        <HowToRent />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
