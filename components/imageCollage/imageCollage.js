import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="animate_left relative flex gap-2 h-[420px] w-full sm:h-[500px] md:h-screen md:gap-3">

      {/* LEFT COLUMN — short + tall */}
      <div className="flex flex-col gap-2 w-1/2 h-full md:gap-3">
        <div className="relative w-full h-[35%]">
          <Image
            alt="About"
            fill
            className="rounded-2xl object-cover"
            src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2237.JPG.jpeg"
          />
        </div>
        <div className="relative w-full flex-1">
          <Image
            alt="About"
            fill
            className="rounded-2xl object-cover"
            src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2241.JPG.jpeg"
          />
        </div>
      </div>

      {/* RIGHT COLUMN — tall + short, offset downward */}
      <div className="flex flex-col gap-2 w-1/2 h-full pt-5 md:gap-3 md:pt-10">
        <div className="relative w-full flex-1">
          <Image
            alt="About"
            fill
            className="rounded-2xl object-cover"
            src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2250.JPG.jpeg"
          />
        </div>
        <div className="relative w-full h-[35%]">
          <Image
            alt="About"
            fill
            className="rounded-2xl object-cover"
            src="https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-14%20at%2010.32.43%20PM.jpeg"
          />
        </div>
      </div>

    </div>
  );
};

export default HeroSection;