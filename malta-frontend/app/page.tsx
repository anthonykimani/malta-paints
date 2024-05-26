import ColorCollection from "@/components/landing/ColorCollection";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ColorCollection />
    </main>
  );
}
