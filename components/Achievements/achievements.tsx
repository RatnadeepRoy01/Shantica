import { ChartNoAxesCombined, Lightbulb, Wrench,Rocket, TrendingUp, MessageSquareText } from "lucide-react"
import AchievementsCard, { type Pillar} from "./achievementsCard"
import SectionHeader from "../Common/SectionHeader"


const PILLARS: Pillar[]= [
  {
    icon: ChartNoAxesCombined,
    title: "Barak Data Analytics Fest",        
    img: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2255.JPG.jpeg?updatedAt=1783432447675",
    desc: "The Data Analytics Fest brought together over 200 students for expert-led sessions featuring IIM faculty and industry professionals with 25 years of experience.",
  },
  {
    icon: Lightbulb,
    title: "Soft Skill Development",
    img: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2245.JPG.jpeg?updatedAt=1783432433337",
    desc: "A 5-day Soft Skills Development Workshop empowered over 80 MBA students from Assam University with essential training in communication, leadership, and teamwork.",
  },
  {
    icon: Wrench,
    title: "Skill Bootcamp Workshop",
    img: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-14%20at%208.01.20%20PM.jpeg",
    desc: "A three-day bootcamp engaged over 80 engineering students at Assam University with intensive training in communication, leadership, and workplace readiness",
  },
  {
    icon: Rocket,
    title: "Barak Startup Contest",
    img: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-15%20at%2010.24.44%20PM%20(1).jpeg",
    desc: "Empowering 100+ young innovators from Barak Valley to pitch ideas and build entrepreneurial skills.",
  },
  {
    icon: TrendingUp,
    title: "NorthEast Development Conclave",
    img: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.58%20PM%20(1).jpeg?updatedAt=1783613297458",
    desc: "Empowering 80+ young innovators from Barak Valley to pitch ideas and build entrepreneurial skills.",
  },
  {
    icon: MessageSquareText,
    title: "Group Discussion Contest",
    img: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-14%20at%208.12.17%20PM.jpeg?updatedAt=1784048457720",
    desc: "Empowering 50+ students from across Barak Valley to sharpen critical thinking, communication, and teamwork skills.",
  },
]
                
 function Achievements() {
  return (
    <section className="pb-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10">
          <SectionHeader
            headerInfo={{
              title: "WHAT WE DO",
              subtitle: "Shantica Highlights",
              description: "Shantica Leadership Academy is dedicated to upskilling individuals with essential professional skills, leadership training, and career guidance to bridge the gap between education and industry expectations."
            }}
          />
          </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((p) => (
            <AchievementsCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}


export default Achievements