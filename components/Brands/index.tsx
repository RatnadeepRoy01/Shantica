"use client";
import React from "react";
import { motion } from "framer-motion";

const partners = [
  "UNICEF India",
  "Assam University",
  "DDMA Cachar",
  "Praxis Business School",
  "Ramanuj Gupta Degree College",
  "Sangchal Milap",
];

const Brands = () => {
  const doubled = [...partners, ...partners];

  return (
    <section className="border border-x-0 border-y-stroke bg-alabaster py-8 dark:border-y-strokedark dark:bg-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <p className="text-center text-xs font-semibold tracking-wider text-waterloo uppercase mb-5">
          Collaborating with trusted partners &amp; institutions
        </p>

        {/* Desktop: static wrap */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {partners.map((partner, i) => (
            <span
              key={i}
              className="text-base font-semibold text-waterloo/70 dark:text-manatee/70 hover:text-primary dark:hover:text-primary transition-colors duration-300 select-none"
            >
              {partner}
            </span>
          ))}
        </div>

        {/* Mobile: continuous marquee */}
        <div className="md:hidden relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-alabaster dark:from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-alabaster dark:from-black to-transparent" />

          <motion.div
            className="flex gap-3 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubled.map((partner, i) => (
              <span
                key={i}
                className="inline-flex items-center whitespace-nowrap px-4 py-2 rounded-full border border-stroke dark:border-strokedark bg-white dark:bg-blacksection text-[13px] font-medium text-waterloo dark:text-manatee flex-shrink-0"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;