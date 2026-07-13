"use client"
import { useEffect, useState, useCallback, memo } from "react";
import Image from "next/image";

type Size = "lg" | "wide" | "tall" | "sm";

type Photo = {
  id: string;
  frame: string;
  src: string;
  title: string;
  location: string;
  year: string;
  size: Size;
};

const PHOTOS: Photo[] = [
  { id: "1",  frame: "01A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2227.JPG.jpeg?updatedAt=1783432433777",                          title: "Riverbend, Early Fog",    location: "Kotor, ME",       year: "1997", size: "lg"   },
  { id: "2",  frame: "02A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2235.JPG.jpeg?updatedAt=1783432432489",                          title: "Canyon Light",            location: "Page, AZ",        year: "1998", size: "sm"   },
  { id: "3",  frame: "03A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2248.JPG.jpeg?updatedAt=1783432432838",                          title: "Pine Ridge",              location: "Bend, OR",        year: "1999", size: "tall" },
  { id: "4",  frame: "04A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2256.JPG.jpeg?updatedAt=1783432433558",                          title: "Two Dogs, One Shadow",    location: "Marfa, TX",       year: "2000", size: "sm"   },
  { id: "5",  frame: "05A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2250.JPG.jpeg?updatedAt=1783432439649",                          title: "Understory",              location: "Olympic NP, WA",  year: "2001", size: "wide" },
  { id: "6",  frame: "06A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_1502.JPG.jpeg?updatedAt=1783432434488",                          title: "Salt Flat Horizon",       location: "Bonneville, UT",  year: "2002", size: "sm"   },
  { id: "7",  frame: "07A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2240.JPG.jpeg?updatedAt=1783432440966",                          title: "Stairwell, 4th Floor",    location: "Chicago, IL",     year: "2003", size: "sm"   },
  { id: "8",  frame: "08A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.22%20PM.jpeg?updatedAt=1783611599332", title: "Harbor Rope",    location: "Lubec, ME",       year: "2004", size: "tall" },
  { id: "9",  frame: "09A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.26%20PM.jpeg?updatedAt=1783613294331", title: "Diner Counter, Closing", location: "Tucumcari, NM", year: "2005", size: "sm" },
  { id: "10", frame: "10A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2254.JPG.jpeg?updatedAt=1783432447455",                          title: "Grain Elevator",          location: "Hutchinson, KS",  year: "1997", size: "lg"   },
  { id: "11", frame: "11A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2252.JPG.jpeg?updatedAt=1783432450439",                          title: "Low Tide",                location: "Deer Isle, ME",   year: "1998", size: "wide" },
  { id: "12", frame: "12A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2243.JPG.jpeg?updatedAt=1783432448130",                          title: "Porch Light, Winter",     location: "Ithaca, NY",      year: "1999", size: "sm"   },
  { id: "13", frame: "13A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2238.JPG.jpeg?updatedAt=1783432447435",                          title: "Empty Platform",          location: "Kotor, ME",       year: "2000", size: "lg"   },
  { id: "14", frame: "14A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.47%20PM.jpeg?updatedAt=1783611599578", title: "Wheat Field, Noon", location: "Page, AZ",       year: "2001", size: "sm"  },
  { id: "15", frame: "15A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.26%20PM%20(1).jpeg?updatedAt=1783613296807", title: "Corner Store", location: "Bend, OR",      year: "2002", size: "tall" },
  { id: "16", frame: "16A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.58%20PM.jpeg?updatedAt=1783613295978", title: "Chain Link & Sky", location: "Marfa, TX",     year: "2003", size: "sm"  },
  { id: "17", frame: "17A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.17%20PM.jpeg?updatedAt=1783613296231", title: "Backyard Line",   location: "Olympic NP, WA",  year: "2004", size: "wide" },
  { id: "18", frame: "18A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.20%20PM.jpeg?updatedAt=1783611599618", title: "Quarry Edge",     location: "Bonneville, UT",  year: "2005", size: "sm"  },
  { id: "19", frame: "19A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.16%20PM.jpeg?updatedAt=1783613296059", title: "Motel Sign, Off", location: "Chicago, IL",     year: "1997", size: "sm"  },
  { id: "20", frame: "20A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.41%20PM.jpeg?updatedAt=1783611599549", title: "Bridge Underpass", location: "Lubec, ME",      year: "1998", size: "tall" },
  { id: "21", frame: "21A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.43%20PM.jpeg?updatedAt=1783611599019", title: "Fence Row",       location: "Tucumcari, NM",   year: "1999", size: "sm"  },
  { id: "22", frame: "22A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.42%20PM.jpeg?updatedAt=1783611599455", title: "Parking Lot, Dusk", location: "Hutchinson, KS", year: "2000", size: "lg" },
  { id: "23", frame: "23A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2247.JPG.jpeg?updatedAt=1783432444712",                          title: "Screen Door",             location: "Deer Isle, ME",   year: "2001", size: "wide" },
  { id: "24", frame: "24A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2241.JPG.jpeg?updatedAt=1783432434231",                          title: "Silo Row",                location: "Ithaca, NY",      year: "2002", size: "sm"   },
  { id: "25", frame: "25A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2255.JPG.jpeg?updatedAt=1783432447675",                          title: "Highway Shoulder",        location: "Kotor, ME",       year: "2003", size: "lg"   },
  { id: "26", frame: "26A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.45%20PM.jpeg?updatedAt=1783611599499", title: "Kitchen Window",  location: "Page, AZ",        year: "2004", size: "sm"  },
  { id: "27", frame: "27A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2234.JPG.jpeg?updatedAt=1783432449232",                          title: "Loading Dock",            location: "Bend, OR",        year: "2005", size: "tall" },
  { id: "28", frame: "28A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2237.JPG.jpeg?updatedAt=1783432434468",                          title: "Barn Interior",           location: "Marfa, TX",       year: "1997", size: "sm"   },
  { id: "29", frame: "29A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2248.JPG.jpeg?updatedAt=1783432432838",                          title: "Trailhead",               location: "Olympic NP, WA",  year: "1998", size: "wide" },
  { id: "30", frame: "30A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2232.JPG.jpeg?updatedAt=1783432433177",                          title: "Gas Station, 2am",        location: "Bonneville, UT",  year: "1999", size: "sm"   },
  { id: "31", frame: "31A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2233.JPG.jpeg?updatedAt=1783432446186",                          title: "Rooftop View",            location: "Chicago, IL",     year: "2000", size: "sm"   },
];

const SPAN: Record<Size, string> = {
  lg:   "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  sm:   "col-span-1 row-span-1",
};

// Retina-aware sizes: tile CSS width × 2 for HiDPI screens.
// lg/wide columns are 2 of 4 cols → ~560px CSS → 1120px on retina.
// tall/sm columns are 1 of 4 cols → ~270px CSS → 540px on retina.
const IMAGE_SIZES: Record<Size, string> = {
  lg:   "(min-width: 1024px) 1120px, (min-width: 640px) 800px, 520px",
  wide: "(min-width: 1024px) 1120px, (min-width: 640px) 800px, 520px",
  tall: "(min-width: 1024px) 540px,  (min-width: 640px) 380px, 260px",
  sm:   "(min-width: 1024px) 540px,  (min-width: 640px) 380px, 260px",
};

// Intrinsic size hints for content-visibility: must match auto-rows per breakpoint.
// Tall/lg span 2 rows so double the row height.
const INTRINSIC: Record<Size, string> = {
  lg:   "[contain-intrinsic-size:1px_380px] sm:[contain-intrinsic-size:1px_320px] lg:[contain-intrinsic-size:1px_380px]",
  wide: "[contain-intrinsic-size:1px_130px] sm:[contain-intrinsic-size:1px_160px] lg:[contain-intrinsic-size:1px_190px]",
  tall: "[contain-intrinsic-size:1px_260px] sm:[contain-intrinsic-size:1px_320px] lg:[contain-intrinsic-size:1px_380px]",
  sm:   "[contain-intrinsic-size:1px_130px] sm:[contain-intrinsic-size:1px_160px] lg:[contain-intrinsic-size:1px_190px]",
};

// Pass quality through to ImageKit so the q- param is actually applied.
// f-auto lets ImageKit pick WebP/AVIF, which is 30-40% smaller than JPEG at
// the same perceived quality.
function imagekitLoader({
  src,
  width,
  quality = 85,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const sep = src.includes("?") ? "&" : "?";
  return `${src}${sep}tr=w-${width},q-${quality},f-auto`;
}

// ─── Theme toggle ────────────────────────────────────────────────────────────

const GalleryItem = memo(function GalleryItem({
  photo,
  index,
}: {
  photo: Photo;
  index: number;
}) {
  // First 8 images (~2 rows on a 4-col desktop grid) load eagerly with high
  // fetch-priority so they appear before the user sees any loading flicker.
  const isAboveFold = index < 8;

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-sm",
        "border border-neutral-200 dark:border-[#2E2B27]",
        "bg-neutral-100 dark:bg-[#1B1917]",
        // Paint/layout isolation: changes inside never reflow siblings
        "[contain:layout_paint]",
        // Skip GPU work for off-screen cards; browser re-renders on scroll-in
        "[content-visibility:auto]",
        // Accurate height hints prevent layout shift when cards scroll into view
        INTRINSIC[photo.size],
        SPAN[photo.size],
      ].join(" ")}
    >
      <Image
        src={photo.src}
        loader={imagekitLoader}
        alt={photo.title}
        fill
        sizes={IMAGE_SIZES[photo.size]}
        // q=85 is the sweet spot: visually identical to 100 but ~40% smaller
        quality={85}
        loading={isAboveFold ? "eager" : "lazy"}
        priority={isAboveFold}
        decoding="async"
        // transform-gpu: promote to GPU layer upfront so the scale animation
        // is composited from frame 1, not promoted mid-animation (which causes
        // a flash). transition-transform only — no filter animation = no repaint.
        className="object-cover transform-gpu grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.04] transition-transform duration-500 ease-out"
      />

      {/* Gradient: opacity transition is compositor-only — no repaint */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Frame badge */}
      <div className="absolute left-2 top-2 sm:left-3 sm:top-3 font-['JetBrains_Mono',monospace] text-[9px] sm:text-[10px] tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/85 dark:bg-[#121110]/80 border border-neutral-200 dark:border-[#2E2B27] text-amber-700 dark:text-[#C9A961] rounded-sm">
        {photo.frame}
      </div>

      {/* Caption: translate + opacity together → single compositor pass */}
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-300">
        <p className="font-['Fraunces',serif] italic text-sm sm:text-lg leading-tight text-white">
          {photo.title}
        </p>
        <p className="font-['JetBrains_Mono',monospace] text-[9px] sm:text-[10px] text-amber-300 dark:text-[#C9A961] mt-0.5 sm:mt-1">
          {photo.location} · {photo.year}
        </p>
      </div>
    </div>
  );
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Gallery() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Stable reference so ThemeToggle never causes child re-renders
  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "light" ? "dark" : "light")),
    []
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-neutral-900 dark:text-[#EDE7DD] font-['Inter',sans-serif] selection:bg-amber-200 dark:selection:bg-[#C9A961] selection:text-neutral-900 dark:selection:text-[#121110] transition-colors duration-300">

      {/* Film grain overlay — dark mode only; pointer-events:none + contain:strict
          means it never blocks clicks or affects layout */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 opacity-0 dark:opacity-[0.05] mix-blend-overlay transition-opacity duration-300 [contain:strict]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Masthead */}
      <header className="max-w-6xl mt-16 mx-auto px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 pb-6 sm:pb-8 border-b border-neutral-200 dark:border-[#2E2B27]">
        <h1 className="font-['Fraunces',serif] text-4xl sm:text-5xl md:text-6xl leading-[0.95] italic">
          Gallery Sheet
        </h1>
      </header>

      {/* Gallery */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[130px] sm:auto-rows-[160px] lg:auto-rows-[190px] gap-2 sm:gap-3 md:gap-4 [grid-auto-flow:dense]">
          {PHOTOS.map((p, i) => (
            <GalleryItem key={p.id} photo={p} index={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
        