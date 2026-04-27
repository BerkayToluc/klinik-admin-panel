import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import QuoteBanner from "@/components/sections/QuoteBanner"; // Yeni
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ"; // Yeni
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <QuoteBanner /> {/* Hizmetlerden sonra şık bir ara bandı */}
      <Gallery />
      <Contact />
      <FAQ /> {/* Galeriden sonra sorular */}
      <Footer />
    </main>
  );
}