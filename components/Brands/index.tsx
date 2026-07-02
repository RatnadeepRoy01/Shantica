"use client";
import React from "react";

const partners = [
  "UNICEF India",
  "Assam University",
  "DDMA Cachar",
  "Praxis Business School",
  "Ramanuj Gupta Degree College",
  "Sangchal Milap"
];

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-8 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <p className="text-center text-xs font-semibold tracking-wider text-waterloo uppercase mb-5">
            COLLABORATING WITH TRUSTED PARTNERS & INSTITUTIONS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {partners.map((partner, index) => (
              <span
                key={index}
                className="text-base font-semibold text-waterloo/70 dark:text-manatee/70 hover:text-primary dark:hover:text-primary transition-colors duration-300 select-none"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
