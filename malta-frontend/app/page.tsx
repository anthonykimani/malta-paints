import ColorCollection from "@/components/landing/ColorCollection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";
import Products from "@/components/landing/Products";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ColorCollection />
      <Products />
      <Footer />
    </main>
  );
}
