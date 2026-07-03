import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-19">
        <div className="w-full md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-full md:block md:w-1/2">
          <Image src={image} alt={title} width={1000} height={1000} className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            width={1000}
            height={1000}
            className="hidden dark:block"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
