"use client";

import Image from "next/image";

interface HoverImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function HoverImageCard({
  src,
  alt,
  title,
  description,
}: HoverImageCardProps) {
  return (
    <div className="group relative h-[360px] w-[360px] overflow-hidden rounded-md shadow-md">
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="400px"
        className="object-cover"
      />

      {/* Black film — starts hidden below the frame, rises to cover the bottom half */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 translate-y-full bg-black/75
                   transition-transform duration-500 ease-in-out
                   group-hover:translate-y-0"
      />

      {/* Description — fades and lifts in just after the film starts moving */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 translate-y-full p-5
                   opacity-0 transition-all duration-500 ease-in-out delay-75
                   group-hover:translate-y-0 group-hover:opacity-100
                   flex flex-col justify-end"
      >
        <h3 className="text-base font-semibold tracking-wide text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-snug text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}