import Navbar from "../Components/layout/Navbar"
import Hero from "../Components/sections/Hero";
import Skills from "../Components/Sections/Skills"
import Projects from "../Components/Sections/Projects";
import Experience from "../Components/Sections/Experience";
import CTA from "../Components/Sections/CTA";
import Footer from "../Components/layout/Footer";
import Resume from "../Components/Sections/Resume";

export default function Home() {
  return (
    <main className="bg-[#0a0f16] text-slate-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
}