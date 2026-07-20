"use client";

import { motion } from "framer-motion";
import HeroSection from "../imageCollage/imageCollage";
import HeroSection2 from "../imagecollege2/imagecollege2";
import HeroAboutSection from "../AboutHero/aboutHero";
import HeroAboutSection2 from "../AboutHero2/AboutHero2";

type AboutVariant = "hero" | "about";

interface AboutProps {
  variant?: AboutVariant;
}

// ── Content config keyed by variant ──────────────────────────────────────────
const CONTENT = {
  hero: {
    sectionOne: {
      heading: "The Shantica",
      headingHighlight: "Story",
      highlightClass: "before:bg-titlebg dark:before:bg-titlebgdark",
      paragraph:
        "Founder & CEO Sucharita Dhar walked away from a corporate HR career in Bangalore to return home to Silchar. She saw that talent was never in short supply—but guidance, industry exposure, and confidence were.",
      items: [
        {
          number: "01",
          title: "Mentorship That Matters",
          description:
            "Get paired with industry leaders volunteering from Dubai, Amsterdam, and Bangalore.",
        },
        {
          number: "02",
          title: "Upskilling That Works",
          description:
            "Acquire the practical soft-skills and technical capabilities employers actually look for.",
        },
      ],
    },
    sectionTwo: {
      heading: "Built for the",
      headingHighlight: "Backbenchers",
      highlightClass: "before:bg-titlebg2 dark:before:bg-titlebgdark",
      paragraph:
        "We exist for the backbenchers, the introverts, and the shy kids who were always too scared to speak up—to help them rebuild the self-belief that should have been there all along.",
      items: [
        {
          number: "01",
          title: "Safe Learning Space",
          description:
            "An environment designed for introverts to thrive without the pressure of traditional classrooms.",
        },
        {
          number: "02",
          title: "Confidence Coaching",
          description:
            "Structured programs focused on overcoming imposter syndrome and building lasting self-belief.",
        },
      ],
      ctaLabel: "Read Our Story",
      ctaHref: "/about",
    },
  },

  about: {
    sectionOne: {
      heading: "Our",
      headingHighlight: "Mission",
      highlightClass: "before:bg-titlebg dark:before:bg-titlebgdark",
      paragraph:
        "We believe every young professional in Tier-2 and Tier-3 India deserves access to world-class mentorship, skills, and opportunities—regardless of where they grew up.",
      items: [
        {
          number: "01",
          title: "Community First",
          description:
            "A growing network of mentors, learners, and employers committed to closing the opportunity gap.",
        },
        {
          number: "02",
          title: "Real-World Readiness",
          description:
            "Programs designed around actual industry needs, not just theoretical frameworks.",
        },
      ],
    },
    sectionTwo: {
      heading: "Rooted in",
      headingHighlight: "Purpose",
      highlightClass: "before:bg-titlebg2 dark:before:bg-titlebgdark",
      paragraph:
        "Every program, every mentor match, and every workshop is driven by one question: does this genuinely move the needle for someone who needs it most?",
      items: [
        {
          number: "01",
          title: "Impact-First Design",
          description:
            "Curriculum built by analyzing real-world skill gaps rather than just following trends.",
        },
        {
          number: "02",
          title: "Community Driven",
          description:
            "A network of mentors and peers working together to lift the next generation of talent.",
        },
      ],
      ctaLabel: "Meet the Team",
      ctaHref: "/gallery",
    },
  },
} satisfies Record<AboutVariant, (typeof CONTENT)["hero"]>;

// ── Component ─────────────────────────────────────────────────────────────────
const About = ({ variant = "hero" }: AboutProps) => {
  const { sectionOne, sectionTwo } = CONTENT[variant];
  const isHeroVariant = variant === "hero";

  return (
    <>
      {/* ===== Section One ===== */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 ">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-32.5">

            {/* Left — image (shown below text on mobile, left of text on desktop) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto order-2 block aspect-[588/526.5] w-full md:order-none md:w-1/2"
            >
              {isHeroVariant ? <HeroSection /> : <HeroAboutSection />}
            </motion.div>

            {/* Right — text */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right order-1 md:order-none md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero font-serif italic">
                {sectionOne.heading}{" "}
                <span
                  className={`relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full ${sectionOne.highlightClass}`}
                >
                  {sectionOne.headingHighlight}
                </span>
              </h2>

              <p>{sectionOne.paragraph}</p>

              {sectionOne.items.map((item) => (
                <div key={item.number} className="mt-7.5 flex flex-col gap-4 sm:flex-row sm:items-center hidden md:block">
                  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      {item.number}
                    </p>
                  </div>
                  <div className="w-full sm:w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== Section Two ===== */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-32.5">

            {/* Left — text */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 font-serif italic text-3xl font-bold text-black dark:text-white xl:text-hero">
                {sectionTwo.heading}{" "}
                <span
                  className={`relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full ${sectionTwo.highlightClass}`}
                >
                  {sectionTwo.headingHighlight}
                </span>
              </h2>

              <p>{sectionTwo.paragraph}</p>

              {sectionTwo.items.map((item) => (
                <div key={item.number} className="mt-7.5 flex flex-col gap-4 sm:flex-row sm:items-center hidden md:block">
                  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      {item.number}
                    </p>
                  </div>
                  <div className="w-full sm:w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}

              <div>
                <a
                  href={sectionTwo.ctaHref}
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    {sectionTwo.ctaLabel}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right — image (already appears below text naturally on mobile) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto block aspect-[588/526.5] w-full md:w-1/2"
            >
              {isHeroVariant ? <HeroSection2 /> : <HeroAboutSection2 />}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;