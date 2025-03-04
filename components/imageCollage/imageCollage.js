import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="animate_left relative hidden gap-8 md:flex md:w-full h-screen">
     
      <div className="flex flex-col justify-center items-center w-1/2 h-full">
        <Image
          alt="Shape"
          width={72}
          height={132}
          className="absolute -left-5 top-5"
          src="/images/shape/shape-05.svg"
        />
        <Image
          alt="About"
          width={600}
          height={900}
          className="mb-8"
          src="/images/about/about-01.webp"
        />
        <Image
          alt="About"
          width={600}
          height={900}
          src="/images/about/about-02.webp"
        />
      </div>
         
        <div className="flex flex-col justify-center w-1/2 h-full">

        <Image
          alt="Shape"
          width={40}
          height={40}
          src="/images/shape/shape-06.svg"
          className=""
        />

        <Image
          alt="About"
          width={600}
          height={900}
          className="mb-5 mt-7.5"
          src="/images/about/about-03.webp"
        />
        <Image
          alt="Shape"
          width={198}
          height={198}
          className="mx-auto"
          src="/images/shape/shape-07.svg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
