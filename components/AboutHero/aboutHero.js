import Image from "next/image";

const HeroAboutSection = () => {
  return (
    <div className="animate_left relative grid grid-cols-2 gap-2 h-[420px] w-full p-2 sm:h-[500px] md:h-screen md:gap-4 md:p-4">

      <div className="relative w-full h-full">
        <Image
          alt="About"
          fill
          className="rounded-2xl object-cover"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.47%20PM.jpeg"
        />
      </div>

      <div className="relative w-full h-full">
        <Image
          alt="About"
          fill
          className="rounded-2xl object-cover"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2228.JPG.jpeg"
        />
      </div>

      <div className="relative w-full h-full">
        <Image
          alt="About"
          fill
          className="rounded-2xl object-cover"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.26%20PM%20(1).jpeg"
        />
      </div>

      <div className="relative w-full h-full">
        <Image
          alt="About"
          fill
          className="rounded-2xl object-cover"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.20%20PM.jpeg?updatedAt=1783611599618"
        />
      </div>

    </div>
  );
};

export default HeroAboutSection;