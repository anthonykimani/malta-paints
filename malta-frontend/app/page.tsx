import About from "@/components/landing/About";
import ColorCollection from "@/components/landing/ColorCollection";
import DisplayProduct from "@/components/landing/DisplayProduct";
import DisplayProductReversed from "@/components/landing/DisplayProductReversed";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import InspirationTile from "@/components/landing/InspirationTile";
import Navbar from "@/components/landing/Navbar";
import Products from "@/components/landing/Products";

export default function Home() {
  return (
    <main className="font-DM">
      <Navbar />
      <HeroSection />
      <Products />
      {/* <InspirationTile /> */}
      <DisplayProduct />
      <DisplayProductReversed />
      <DisplayProduct />
      <About />
      <Footer />
    </main>
  );
}
