"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto max-w-6xl text-left"
      >
        <div className="border-b border-stone-200 pb-6 dark:border-strokedark">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-700">
            {title}
          </p>
          <h2 className="mt-3 font-serif italic text-4xl text-stone-900 md:text-5xl dark:text-white">
            {subtitle}
          </h2>
        </div>

        <p className="mt-5 max-w-2xl text-stone-600 dark:text-white/70">
          {description}
        </p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;