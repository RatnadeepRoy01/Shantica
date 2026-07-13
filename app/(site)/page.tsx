import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import SpeakerPhotoGrid from "./mentors";

export const metadata: Metadata = {
  title: "Shantica Leadership Academy - Empowering Growth & Leadership",
  description: "Bridging the gap between education, confidence, and employability in Northeast India through global mentorship and practical upskilling.",
};


export default function Home() {
  return (    
    <main>
      <Hero />
      <FunFact />
      <Brands />    
      <About />
      <Feature />
      <SpeakerPhotoGrid />
      <CTA />
      <FAQ />
      </main>
  );
}
