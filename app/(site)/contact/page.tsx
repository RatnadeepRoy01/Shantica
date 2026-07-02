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

      {/* Office Hours & Maps Section */}
      <section className="mt-12 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-c-1016 border border-stroke dark:border-strokedark rounded-2xl bg-alabaster dark:bg-blacksection p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-solid-2">
          <div>
            <h3 className="text-base font-bold text-black dark:text-white mb-2">🕒 Office Working Hours</h3>
            <p className="text-sm text-waterloo dark:text-manatee">10:00 AM - 05:00 PM (Monday - Saturday)</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-base font-bold text-black dark:text-white mb-2">📍 Find Us on Google Maps</h3>
            <a
              href="https://maps.app.goo.gl/iLoB7XyYtR9hkWcC7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-semibold"
            >
              Open Google Maps Location
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-primary"
              >
                <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
