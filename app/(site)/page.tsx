import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import SpeakerPhotoGrid from "./mentors";
import Achievements from "@/components/Achievements/achievements"
import EventsSection from "@/components/Awards/Awards"

export const metadata: Metadata = {
  title: "Shantica Leadership Academy - Empowering Growth & Leadership",
  description: "Bridging the gap between education, confidence, and employability in Northeast India through global mentorship and practical upskilling.",
};


export default function Home() {
  return (    
    <main>
      <Hero />
      <Brands />    
      <About />
      <Feature />
      <SpeakerPhotoGrid />
      {/* <CTA />      */}
      <EventsSection />
      <Achievements />
      <FAQ />
      </main>
  );
}



