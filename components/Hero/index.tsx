"use client";
import Image from "next/image";

const Hero = () => {

  return (
    <>
      <section className="overflow-hidden pb-20 pt-24 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-base font-semibold text-primary uppercase tracking-wide">
                🌟 Shantica Leadership Academy
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-extrabold text-black dark:text-white xl:text-hero leading-tight">
                Every "Somebody" was once told they were {" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  "Nobody."
                </span>
              </h1>
              <p className="text-waterloo dark:text-manatee text-regular md:text-lg">
                Shantica Leadership Academy empowers Northeast India’s youth by bridging the gap between education and employability through experiential learning, industry mentorship, and real-world leadership development.
              </p>

              <div className="mt-10">
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="flex items-center justify-center rounded-full bg-primary px-8 py-3 text-regular font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
                  >
                    Join us
                  </a>
                  <a
                    href="/gallery"
                    className="flex items-center justify-center rounded-full border border-stroke px-8 py-3 text-regular font-medium text-black dark:text-white dark:border-strokedark duration-300 ease-in-out hover:bg- alabaster dark:hover:bg-hoverdark"
                  >
                    gallery
                  </a>
                </div>

                <p className="mt-5 text-sm text-waterloo/80 dark:text-manatee/80">
                  Over 10,000+ young minds empowered across Northeast India.
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