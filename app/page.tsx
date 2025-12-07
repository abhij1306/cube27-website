import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Solutions from "./components/sections/Solutions";
import Framework from "./components/sections/Framework";
import Industries from "./components/sections/Industries";
import Contact from "./components/sections/Contact";
import Footer from "./components/footer/Footer";

import Orbs from "./components/orbs/Orbs";
import ParticlesCanvas from "./components/particles/ParticlesCanvas";

export default function Page() {
  return (
    <>
      {/* Background Layers */}
      <Orbs />
      <ParticlesCanvas />

      {/* NAV */}
      <NavBar />

      {/* HERO */}
      <Hero />

      {/* SECTIONS */}
      <Solutions />
      <Framework />
      <Industries />
      <Contact />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
