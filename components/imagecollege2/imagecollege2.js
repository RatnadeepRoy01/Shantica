import Image from "next/image";

const HeroSection2 = () => {
  return (
    <div className="animate_left relative hidden gap-8 md:flex md:w-full h-screen">

      <div className="flex flex-col justify-center items-center w-1/2 h-full">
        <Image
          alt="About"
          width={600}
          height={900}
          className="rounded-2xl mb-8"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2231.JPG.jpeg?updatedAt=1783432433372"
        />
        <Image
          alt="About"
          width={600}
          height={900}
          className="rounded-2xl mb-8"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.17%20PM.jpeg"
        />
      </div>

      <div className="flex flex-col justify-center w-1/2 h-full">


        <Image
          alt="About"
          width={600}
          height={900}
          className="rounded-2xl mb-5 mt-7.5"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_1502.JPG.jpeg?updatedAt=1783432434488"
        />

        <div className="relative w-full h-full">
        <Image
          alt="About"
          fill
          className="rounded-2xl object-cover"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2229.JPG.jpeg?updatedAt=1783432432793"
        />
        </div>
      </div>
    </div>
  );
};
  
export default HeroSection2;           
