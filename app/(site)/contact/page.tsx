import React from "react";
import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Shantica Leadership Academy",
  description: "Get in touch with Shantica Leadership Academy. Contact us via email, phone, or visit our Silchar office to enroll in our cohorts or join as a volunteer mentor.",
};

const ContactPage = () => {
  return (
    <div className="pb-20 pt-30 md:pt-36">
      <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0 text-center mb-10">
        <span className="mb-4 inline-block rounded-full bg-zumthor px-4 py-1 dark:border dark:border-strokedark dark:bg-blacksection">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            GET IN TOUCH
          </span>
        </span>
        <h1 className="text-3xl font-bold text-black dark:text-white md:text-4xl mb-3">
          We're here to help you rise.
        </h1>
        <p className="text-sm text-waterloo dark:text-manatee max-w-xl mx-auto">
          Have questions about our 3-Month Flagship Program, institutional collaborations, or volunteer mentorship? Drop us a line below.
        </p>
      </div>

      <Contact />

      <section className="mt-12 px-4 md:px-8 xl:px-0">
  <div className="mx-auto max-w-c-1016">
    <div className="border border-stroke dark:border-strokedark rounded-2xl bg-alabaster dark:bg-blacksection p-5 flex flex-col gap-3 shadow-solid-2">

      {/* Hours row */}
      <div className="flex items-start gap-3.5 pb-4 border-b border-stroke dark:border-strokedark">
        <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-600 dark:text-amber-400">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <div>
          <p className="text-xs text-waterloo dark:text-manatee mb-1">Office working hours</p>
          <p className="text-[15px] font-medium text-black dark:text-white">10:00 AM – 5:00 PM</p>
          <p className="text-[13px] text-waterloo dark:text-manatee mt-0.5">Monday – Saturday</p>
        </div>
      </div>

      {/* Location row */}
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-600 dark:text-blue-400">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
          </svg>
        </div>
        <div>
          <p className="text-xs text-waterloo dark:text-manatee mb-1">Find us</p>
          <p className="text-[15px] font-medium text-black dark:text-white mb-2.5">Google Maps location</p>
          <a
            href="https://maps.app.goo.gl/iLoB7XyYtR9hkWcC7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-3 py-1.5 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            Open in Maps
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default ContactPage;
