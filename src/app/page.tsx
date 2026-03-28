import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Services/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
