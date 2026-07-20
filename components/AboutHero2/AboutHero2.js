import Image from "next/image";

const HeroAboutSection2 = () => {
  return (
    <div className="animate_left relative flex gap-2 w-full h-auto overflow-hidden md:h-screen md:gap-4">

      {/* LEFT COLUMN — starts higher, tall then short */}
      <div className="flex flex-col items-center w-1/2 h-full justify-start pt-3 gap-2 md:pt-6 md:gap-3">
        <Image
          alt="About"
          width={600}
          height={750}
          className="rounded-2xl object-cover w-full h-auto"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.58%20PM%20(1).jpeg"
        />
        <Image
          alt="About"
          width={600}
          height={500}
          className="rounded-2xl object-cover w-full h-auto"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.41%20PM.jpeg"
        />
      </div>

      {/* RIGHT COLUMN — starts lower, short then tall */}
      <div className="flex flex-col items-center w-1/2 h-full justify-start pt-8 gap-2 md:pt-24 md:gap-3">
        <Image
          alt="About"
          width={600}
          height={480}
          className="rounded-2xl object-cover w-full h-auto"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2252.JPG.jpeg?updatedAt=1783432450439"
        />
        <Image
          alt="About"
          width={600}
          height={720}
          className="rounded-2xl object-cover w-full h-auto"
          src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2244.JPG.jpeg?updatedAt=1783432446636"
        />
      </div>

    </div>
  );
};

export default HeroAboutSection2;
