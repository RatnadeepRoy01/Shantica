"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
    { year: "2021", event: "Shantica Leadership Academy founded in Silchar, Assam by Sucharita Dhar, launching a movement built on Career Counselling, Mentorship, and Upskilling." },
    { year: "2022", event: "Expanded presence across the region and received early validation by winning the Barak Startup Award." },
    { year: "2023", event: "Grew the global mentor network to over 100+ volunteers from leading organizations across India and the world, and won the Barak Startup Award for the second consecutive year." },
    { year: "2024", event: "Achieved academic and civic recognition, winning the Best Startup Award from Assam University and partnering with UNICEF India and the DDMA to train 500+ youth volunteers." },
    { year: "2025", event: "Solidified partnerships with grassroots communities and educational institutions like Ramanuj Gupta Degree College and Praxis Business School to bridge the regional employability gap." },
    { year: "2026", event: "Scaled total impact to 10,000+ young people across Northeast India, reaching 120 mentors, 200+ workshops, and over 100+ successful career placements." }
];

function MilestoneItem({ m, idx }: { m: (typeof milestones)[0]; idx: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.12 }}
        >
            <div className="absolute -left-12 top-1.5 h-5 w-5 rounded-full bg-primary border-2 border-white dark:border-black" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest block mb-2">
                {m.year}
            </span>
            <p className="text-lg text-waterloo dark:text-manatee leading-relaxed">{m.event}</p>
        </motion.div>
    );
}

const OurJourney = () => {
    return (
        <section className="mt-24 px-4 md:px-8 xl:px-0">
            <div className="mx-auto max-w-c-1235">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Our Journey</h2>
                    <p className="text-xl text-waterloo dark:text-manatee md:w-1/2 mx-auto">
                        From a bold idea in Silchar to a growing movement — one cohort at a time.
                    </p>
                </div>

                <div className="relative mx-auto max-w-xl border-l-2 border-primary/30 pl-10 space-y-10">
                    {milestones.map((m, idx) => (
                        <MilestoneItem key={idx} m={m} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurJourney;