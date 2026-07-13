"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CTASection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Mentorship",
      desc: "1-on-1 guidance from industry leaders tailored to your goals.",
    },
    {
      icon: "🌍",
      title: "Global Network",
      desc: "Connect with 120+ mentors and peers across 30+ countries.",
    },
    {
      icon: "🚀",
      title: "Career Acceleration",
      desc: "Access workshops, placements, and high-impact opportunities.",
    },
  ];

  return (
    <section className="mt-24 px-4 md:px-8 xl:px-0">
      <div className="relative mx-auto max-w-c-1390 overflow-hidden rounded-3xl
        bg-gradient-to-br from-[#EEF2FF] via-[#E0E7FF] to-[#C7D2FE]
        dark:bg-none dark:bg-gradient-to-br dark:from-[#1e1b4b] dark:via-[#1e1654] dark:to-[#0f172a]
        border border-indigo-200 dark:border-indigo-800/60
        shadow-[0_8px_48px_rgba(99,102,241,0.12)] dark:shadow-[0_0_64px_rgba(99,102,241,0.22)]
        p-14 md:p-20">

        {/* Background decoration images */}
        <Image
          width={132}
          height={132}
          src="/images/shape/shape-05.png"
          alt="Doodle"
          className="absolute bottom-0 right-0 -z-1 opacity-40"
        />
        <Image
          fill
          src="/images/shape/shape-dotted-light-02.svg"
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 dark:hidden opacity-60"
        />
        <Image
          fill
          src="/images/shape/shape-dotted-dark-02.svg"
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 hidden dark:block opacity-60"
        />

        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-300/30 dark:bg-indigo-700/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-300/30 dark:bg-blue-900/30 blur-3xl" />

        {/* Eyebrow */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mb-5 flex justify-center"
        >
          <span className="inline-block rounded-full border border-indigo-300 dark:border-indigo-600 
            bg-white/60 dark:bg-indigo-900/40 
            px-5 py-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-300 
            backdrop-blur-sm tracking-wide uppercase">
            Join the Movement
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="animate_top text-center"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white xl:text-sectiontitle3 mb-5">
            Ready to be part of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-indigo-300 dark:to-blue-400">
              Shantica?
            </span>
          </h2>
          <p className="mx-auto text-xl text-waterloo dark:text-indigo-200 mb-12 md:w-2/3">
            Whether you're a student hungry to grow, an institution looking to
            partner, or a mentor ready to give back — there's a place for you
            here.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
              viewport={{ once: true }}
              className="animate_top rounded-2xl 
                bg-white/60 dark:bg-white/5 
                border border-indigo-100 dark:border-indigo-700/40 
                backdrop-blur-sm p-6 text-center
                shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 text-3xl">{f.icon}</div>
              <h3 className="mb-1.5 text-lg font-semibold text-black dark:text-white">
                {f.title}
              </h3>
              <p className="text-sm text-waterloo dark:text-indigo-300 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
          className="animate_top flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/stories"
            className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-semibold text-white hover:bg-primaryho transition-colors shadow-md hover:shadow-lg"
          >
            Explore Stories
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-full 
              border border-indigo-300 dark:border-indigo-500/70 
              bg-white/50 dark:bg-indigo-900/20
              backdrop-blur-sm
              px-10 py-4 text-lg font-semibold 
              text-black dark:text-indigo-100 
              hover:border-primary dark:hover:border-indigo-400 
              hover:bg-white dark:hover:bg-indigo-900/40
              transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;