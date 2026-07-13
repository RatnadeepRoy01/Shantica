// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="animate_left relative hidden gap-8 md:flex md:w-full h-screen">

//       <div className="flex flex-col justify-center items-center w-1/2 h-full">
        
//         <Image
//           alt="About"
//           width={600}
//           height={900}
//           className="rounded-2xl mb-8"
//           src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2237.JPG.jpeg"
//         />
//         <Image
//           alt="About"
//           width={600}
//           height={900}
//           className="rounded-2xl mb-8"
//           src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2241.JPG.jpeg"
//         />
//       </div>

//       <div className="flex flex-col justify-center w-1/2 h-full">


//         <Image
//           alt="About"
//           width={600}
//           height={900}
//           className="rounded-2xl mb-5 mt-7.5"
//           src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2250.JPG.jpeg"
//         />
        
//         <div className="relative w-full h-full">
//         <Image
//           alt="About"
//           fill
//           className="rounded-2xl object-cover"
//           src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2255.JPG.jpeg"
//         />
//         </div>
//       </div>
//     </div>
//   );
// };
  
// export default HeroSection;           

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="animate_left relative hidden md:flex gap-3 h-screen w-full">

      {/* LEFT COLUMN — short + tall */}
      <div className="flex flex-col gap-3 w-1/2 h-full">
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
      <div className="flex flex-col gap-3 w-1/2 h-full pt-10">
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
            src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2255.JPG.jpeg"
          />
        </div>
      </div>

    </div>
  );
};

export default HeroSection;