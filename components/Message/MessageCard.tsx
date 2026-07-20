import { ArrowRight } from "lucide-react";

interface Paper {
  title: string;
  href: string;
  image?: string;
}

const PAPERS: Paper[] = [
  {
    title: "Matching with Choice Correspondences under Settled Set Persistence",
    href: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.07.44%20PM.jpeg",
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.07.44%20PM.jpeg",
  },
  {
    title: "Double Auctions with Complementary Objects",
    href: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.07.43%20PM.jpeg",
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.07.43%20PM.jpeg",
  },
  {
    title:
      "Spheres of Exchange: Restricted Convertibility as Inequality-Aware Market Design",
    href: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.16.29%20PM.jpeg",
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.16.29%20PM.jpeg",
  },
  {
    title: "Heat, Gender, and Time: The Impact of Temperature on Time Allocation in India",
    href: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.29.04%20PM.jpeg",
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.29.04%20PM.jpeg",
  },
  {
    title: "Decoupling Taste-Based versus Statistical Discrimination in Elections",
    href: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.13.23%20PM.jpeg",
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.13.23%20PM.jpeg",
  },
  {
    title:
      "Digital Connectivity and Learning Losses during COVID-19: Evidence from Rural India",
    href: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.07.44%20PM%20(1).jpeg",
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-20%20at%207.07.44%20PM%20(1).jpeg",
  },
];

     
function PaperCover({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative h-[230px] w-full shrink-0 overflow-hidden bg-[#EAE6D9] md:h-[260px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export default function ResearchCarousel() {
  return (
    <div className="relative w-full">
      {/* navy layer: full-height on mobile (single column, no seam to
         straddle), starts at row-1's vertical midpoint from md up */}
      <div className="absolute inset-0 top-[210px] bg-[#0E2A4D] md:top-[225px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-0 md:pb-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-y-16">

        {PAPERS.map((paper) => (
         <div key={paper.image} className="overflow-hidden bg-white shadow-lg shadow-black/10">
         <img src={paper.image} alt="" className="h-full w-full object-cover" />
         </div>
         ))}
        </div>
      </div>  
    </div>
  );
}
        