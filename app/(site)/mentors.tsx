"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from "./use-outside-click"
import Image from "next/image";

interface SpeakerPhotoGridProps {
  bgColor?: 'white' | 'black';
  showNameAndBioBelow?: boolean;
}

export default function SpeakerPhotoGrid(props: SpeakerPhotoGridProps) {
  const bgColor = props.bgColor ??'white';
  const showNameAndBioBelow = props.showNameAndBioBelow ?? false;
  const [active, setActive] = useState<(typeof speakers)[number] | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null)
      }
    }

    if (active) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
        
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <div className={`min-h-screen relative overflow-x-hidden bg-white dark:bg-black ${bgColor !== 'black' ? 'bg-white' : ''}`}>
      <div className="max-w-7xl mx-auto relative px-4">


<AnimatePresence mode="wait">
  {active && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.0 } }}
      className="fixed inset-0 grid place-items-center z-[100000] p-4 backdrop-blur-sm bg-black/20"
    >
      <motion.button
        key={`button-${active.name}-${id}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
        className="flex absolute top-4 right-4 lg:top-2 lg:right-2 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg z-10"
        onClick={() => setActive(null)}
      >
        <CloseIcon />
      </motion.button>
      <motion.div
        layoutId={`card-${active.name}-${id}`}
        ref={ref}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }}
        className={`w-full max-w-lg flex flex-col rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] bg-white dark:bg-[#1c1c1c] ${bgColor === 'black' ? 'bg-[#1c1c1c]' : 'bg-white'}`}
      >
        <div className="flex-shrink-0 p-4 flex justify-center">
          <div className="overflow-hidden rounded-full w-40 h-40 sm:w-48 sm:h-48 border-4 border-white/80 shadow-xl bg-white/10 backdrop-blur-sm">
            <Image
              src={active.image || "/placeholder.svg"}
              alt={active.name}
              width={400}
              height={400}
              className="w-full h-full object-cover bg-black"
            />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex-1 mb-4">
            <h3 className={`text-2xl font-bold ${bgColor == 'black' ? 'text-white dark:text-white' : 'text-gray-900 dark:text-white'} mb-2`}>{active.name}</h3>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1 }}
              className={`${bgColor == 'black' ? 'text-white dark:text-white' : 'text-gray-900 dark:text-white'} text-sm leading-relaxed mb-4`}
            >
              {active.bio}
            </motion.div>
            {active.about && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.15 }}
                className={`${bgColor == 'black' ? 'text-gray-300 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'} text-sm leading-relaxed`}
              >
                {active.about}
              </motion.div>
            )}
          </div>

          <motion.a
            href={active.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.15 }}
            className="flex-shrink-0 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-center transition-colors"
          >
            View LinkedIn Profile
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              showNameAndBioBelow={showNameAndBioBelow}
              bgColor={bgColor}
              onClick={setActive}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-gray-600"
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

function SpeakerCard({
  speaker,
  showNameAndBioBelow,
  bgColor,
  onClick,
}: {
  speaker: typeof speakers[number];
  showNameAndBioBelow: boolean;
  bgColor: string;
  onClick: (speaker: typeof speakers[number]) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <div
      key={speaker.id}
      ref={ref}
      onClick={() => onClick(speaker)}
      className={`group cursor-pointer transition-opacity duration-700 rounded-3xl p-3 dark:bg-black ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ willChange: "transform" }}
    >
      <div className="aspect-square rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]">
        <Image
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {showNameAndBioBelow && (
        <div className="mt-3 text-center px-2">
          <div className={`font-bold text-lg ${bgColor === 'black' ? 'text-white dark:text-white' : 'text-gray-900 dark:text-white'}`}>{speaker.name}</div>
          <div className={`md:block hidden text-sm mt-1 ${bgColor === 'black' ? 'text-gray-300 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}>{speaker.bio}</div>
        </div>
      )}
    </div>
  );
}

const speakers = [
  {
    id: 1,
    name: "Dr. Arunabha Bhattacharjee",
    image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/image5.jpg",
    bio: "Senior HR & Training Lead Dubai (UAE) TED X Speaker (11+ Years of exp. )",
    about: "Neuroscience-led HR strategist and IIT/IIM alumnus with 15+ years of experience transforming talent across global markets. A TEDx speaker, coach, and author, he drives high-performance cultures by bridging human potential with strategic business outcomes.",
    profileLink: "https://www.linkedin.com/in/arunabha-bhattacharjee/",
  },
  {
    id: 2,
    name: "Raka Choudhury",
    image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/image4.jpg",
    bio: "Researchers/ Scientist Wageningen University & Research 5+ yrs exp.",
    about: "A gut microbiome scientist and Clinical Study Researcher at Danone, they specialize in the intersection of nutrition, microbiology, and host health. With a PhD from Wageningen University and extensive clinical trial expertise, they bridge academic research with industrial application to deliver evidence-based nutritional solutions.",
    profileLink: "https://www.linkedin.com/in/choudhuryraka/",
  },
  {
    id: 3,
    name: "Aveek Roy",
    image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/image2%20(1).jpg",
    bio: "Market Research & Analytics Deputy director, Kantar 17+ yrs exp",
    about: "A seasoned Learning and Capability leader, they build scalable, AI-enabled ecosystems that bridge data-driven strategy with human performance. He specialize in solving complex operational challenges to foster organizational agility and high-impact growth.",
    profileLink: "https://www.linkedin.com/in/aveek-roy-8449472/",
  },
  {
    id: 4,
    name: "Jayasmita Dutta",
    image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/image8.jpg",
    bio: "Pharma Professional GSK, 17+ yrs exp",
    about: "With 17+ years in Life Sciences, this leader drives digital transformation and GenAI-powered learning. Blending operational discipline with people-first leadership, they bridge strategy and execution to build future-ready capabilities. She empower organizations to navigate complexity and deliver sustainable, patient-centric results.",
    profileLink: "https://www.linkedin.com/in/jayasmita-dutta/",
  },
  {
    id: 5,
    name: "Sohandeep Dhar",
    image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/image6.jpg",
    bio: "Service Delivery Manager Dell Technologies, 15yrs exp.",
    about: "Strategic cybersecurity leader with 19+ years of experience in ERM, compliance, and cyber resilience across BFSI and Healthcare. Expert in aligning global security frameworks like ISO 27001 and HIPAA with organizational growth. A proven track record in mitigating risk and ensuring 100% audit readiness for critical enterprise applications.",
    profileLink: "https://www.linkedin.com/in/sohandeepdhar/",
  },
  {
    id: 6,
    name: "Vishaka Pugalia",
    image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/image3.jpg",
    bio: "People Operations & Programs Manager, VEED.IO, Amsterdam, Experience 4years",
    about: "People partner who loves solving operational puzzles, design scalable solutions embedded in people strategy and build great employee and candidate experiences!",
    profileLink: "https://www.linkedin.com/in/vishakha-pugalia-823218124/",
  },
  {
    id: 7,
    name: "Aporajita Chakraborty",
    image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/image7%20(1).jpg",
    bio: "General Manager-BD- E-Commerce and VAS, DHL supply chain, Bengaluru. 4+ years of experience.",
    about: "Akhinchan Sarkar is a senior Indian Administrative Service officer currently serving as Additional Secretary in the Finance Department of the Government of Tripura. With a distinguished career in public administration, he has contributed to the financial planning and governance of the state, ensuring transparency and efficiency in public finance.",
    profileLink: "https://www.linkedin.com/in/aporajitachakraborty/",
  },
  {
    id: 8,
    name: "Debadutta deb",
    image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/image14.jpg",
    bio: "Sales & Marketing, Amazon 4+yrs exp.IIM Bangalore",
    about: "As an Amazon Product Manager, He build data-driven internal tools for Seller Acquisition and Account Management teams. I partner cross-functionally to optimize workflows across Salesforce, Pardot, and AWS. My focus is simplifying complexity to drive operational efficiency and stakeholder impact.",
    profileLink: "https://www.linkedin.com/in/debadutta-deb-75676690/",
  },
]

            