import World from "@/components/World/World";
import Hero from "@/components/Hero/Hero";
import JourneyScene from "@/components/Scenes/Journey/JourneyScene";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AIPlayground from "@/components/AIPlayground";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">

      {/* Global Game World */}
      <World />

      {/* Scene 1 - Mission Start */}
      <Hero />

      {/* Scene 3 - Journey */}
      <JourneyScene />

      {/* Scene 4 - Skills Temple */}
      <Skills />

      {/* Scene 5 - Boss Battles */}
      <Projects />

      {/* Scene 6 - AI Oracle */}
      <AIPlayground />

      {/* Scene 7 - Mission Complete */}
      <Contact />

      <Footer />

    </main>
  );
}