"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Shantica - Upskilling the Future
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Transforming Careers with {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Shantica
                </span>
              </h1>
              <p>
                Shantica Leadership Academy - Empowering individuals with essential skills for career success. We offer cutting-edge upskilling programs, expert mentorship, and hands-on training to help you thrive in today’s competitive job market.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Join us today and start your upskilling journey!
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block absolute top-0 right-0">
              <div className="relative 2xl:-mr-7.5 ">
                <div>
                  <Image
                  className="absolute top-0 right-0"
                  src="/images/shape/heroShape-04.svg"
                  width={1000}
                  height={1000}
                  alt="heroShape"
                  />

                 
                <div className=" relative aspect-[700/444] w-full">
               
                  <Image
                    className="dark:hidden"
                    src="/images/hero/hero.png"
                    alt="Hero"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    className="hidden  dark:block"
                    src="/images/hero/hero.png"
                    alt="Hero"
                    width={1000}
                    height={1000}
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
