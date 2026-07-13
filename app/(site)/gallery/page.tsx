"use client"
import { useEffect, useState } from "react";

type Size = "lg" | "wide" | "tall" | "sm";

type Photo = {
  id: string;
  frame: string; // 35mm-style frame number
  src: string;
  title: string;
  location: string;
  year: string;
  size: Size;
};

const IMG =
  "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2227.JPG.jpeg?updatedAt=1783432433777";

const PHOTOS: Photo[] = [
  { id: "1", frame: "01A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2227.JPG.jpeg?updatedAt=1783432433777", title: "Riverbend, Early Fog", location: "Kotor, ME", year: "1997", size: "lg" },
  { id: "2", frame: "02A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2235.JPG.jpeg?updatedAt=1783432432489", title: "Canyon Light", location: "Page, AZ", year: "1998", size: "sm" },
  { id: "3", frame: "03A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2248.JPG.jpeg?updatedAt=1783432432838", title: "Pine Ridge", location: "Bend, OR", year: "1999", size: "tall" },
  { id: "4", frame: "04A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2256.JPG.jpeg?updatedAt=1783432433558", title: "Two Dogs, One Shadow", location: "Marfa, TX", year: "2000", size: "sm" },
  { id: "5", frame: "05A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2250.JPG.jpeg?updatedAt=1783432439649", title: "Understory", location: "Olympic NP, WA", year: "2001", size: "wide" },
  { id: "6", frame: "06A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_1502.JPG.jpeg?updatedAt=1783432434488", title: "Salt Flat Horizon", location: "Bonneville, UT", year: "2002", size: "sm" },
  { id: "7", frame: "07A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2240.JPG.jpeg?updatedAt=1783432440966", title: "Stairwell, 4th Floor", location: "Chicago, IL", year: "2003", size: "sm" },
  { id: "8", frame: "08A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.22%20PM.jpeg?updatedAt=1783611599332", title: "Harbor Rope", location: "Lubec, ME", year: "2004", size: "tall" },
  { id: "9", frame: "09A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.26%20PM.jpeg?updatedAt=1783613294331", title: "Diner Counter, Closing", location: "Tucumcari, NM", year: "2005", size: "sm" },
  { id: "10", frame: "10A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2254.JPG.jpeg?updatedAt=1783432447455", title: "Grain Elevator", location: "Hutchinson, KS", year: "1997", size: "lg" },
  { id: "11", frame: "11A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2252.JPG.jpeg?updatedAt=1783432450439", title: "Low Tide", location: "Deer Isle, ME", year: "1998", size: "wide" },
  { id: "12", frame: "12A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2243.JPG.jpeg?updatedAt=1783432448130", title: "Porch Light, Winter", location: "Ithaca, NY", year: "1999", size: "sm" },
  { id: "13", frame: "13A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2238.JPG.jpeg?updatedAt=1783432447435", title: "Empty Platform", location: "Kotor, ME", year: "2000", size: "lg" },
  { id: "14", frame: "14A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.47%20PM.jpeg?updatedAt=1783611599578", title: "Wheat Field, Noon", location: "Page, AZ", year: "2001", size: "sm" },
  { id: "15", frame: "15A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.26%20PM%20(1).jpeg?updatedAt=1783613296807", title: "Corner Store", location: "Bend, OR", year: "2002", size: "tall" },
  { id: "16", frame: "16A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.58%20PM.jpeg?updatedAt=1783613295978", title: "Chain Link & Sky", location: "Marfa, TX", year: "2003", size: "sm" },
  { id: "17", frame: "17A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.17%20PM.jpeg?updatedAt=1783613296231", title: "Backyard Line", location: "Olympic NP, WA", year: "2004", size: "wide" },
  { id: "18", frame: "18A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.20%20PM.jpeg?updatedAt=1783611599618", title: "Quarry Edge", location: "Bonneville, UT", year: "2005", size: "sm" },
  { id: "19", frame: "19A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.10.16%20PM.jpeg?updatedAt=1783613296059", title: "Motel Sign, Off", location: "Chicago, IL", year: "1997", size: "sm" },
  { id: "20", frame: "20A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.41%20PM.jpeg?updatedAt=1783611599549", title: "Bridge Underpass", location: "Lubec, ME", year: "1998", size: "tall" },
  { id: "21", frame: "21A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.43%20PM.jpeg?updatedAt=1783611599019", title: "Fence Row", location: "Tucumcari, NM", year: "1999", size: "sm" },
  { id: "22", frame: "22A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.42%20PM.jpeg?updatedAt=1783611599455", title: "Parking Lot, Dusk", location: "Hutchinson, KS", year: "2000", size: "lg" },
  { id: "23", frame: "23A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2247.JPG.jpeg?updatedAt=1783432444712", title: "Screen Door", location: "Deer Isle, ME", year: "2001", size: "wide" },
  { id: "24", frame: "24A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2241.JPG.jpeg?updatedAt=1783432434231", title: "Silo Row", location: "Ithaca, NY", year: "2002", size: "sm" },
  { id: "25", frame: "25A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2255.JPG.jpeg?updatedAt=1783432447675", title: "Highway Shoulder", location: "Kotor, ME", year: "2003", size: "lg" },
  { id: "26", frame: "26A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%209.04.45%20PM.jpeg?updatedAt=1783611599499", title: "Kitchen Window", location: "Page, AZ", year: "2004", size: "sm" },
  { id: "27", frame: "27A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2234.JPG.jpeg?updatedAt=1783432449232", title: "Loading Dock", location: "Bend, OR", year: "2005", size: "tall" },
  { id: "28", frame: "28A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2237.JPG.jpeg?updatedAt=1783432434468", title: "Barn Interior", location: "Marfa, TX", year: "1997", size: "sm" },
  { id: "29", frame: "29A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2248.JPG.jpeg?updatedAt=1783432432838", title: "Trailhead", location: "Olympic NP, WA", year: "1998", size: "wide" },
  { id: "30", frame: "30A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2232.JPG.jpeg?updatedAt=1783432433177", title: "Gas Station, 2am", location: "Bonneville, UT", year: "1999", size: "sm" },
  { id: "31", frame: "31A", src: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2233.JPG.jpeg?updatedAt=1783432446186", title: "Rooftop View", location: "Chicago, IL", year: "2000", size: "sm" },
];

const SPAN: Record<Size, string> = {
  lg: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  sm: "col-span-1 row-span-1",
};

function Sprockets() {
  return (
    <div className="flex gap-2 px-3 sm:px-4 py-2 shrink-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="h-[6px] w-[9px] sm:h-[7px] sm:w-[11px] rounded-[2px] bg-neutral-300 dark:bg-[#2E2B27] shrink-0"
        />
      ))}
    </div>
  );
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="font-['JetBrains_Mono',monospace] text-[10px] tracking-widest px-3 py-2 rounded-sm border border-neutral-300 dark:border-[#2E2B27] text-neutral-600 dark:text-[#8C8478] hover:text-amber-700 dark:hover:text-[#C9A961] hover:border-amber-700 dark:hover:border-[#C9A961] transition-colors shrink-0"
    >
      {theme === "light" ? "☾ DARK" : "☀ LIGHT"}
    </button>
  );
}

export default function Gallery() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-neutral-900 dark:text-[#EDE7DD] font-['Inter',sans-serif] selection:bg-amber-200 dark:selection:bg-[#C9A961] selection:text-neutral-900 dark:selection:text-[#121110] transition-colors duration-300">
      {/* film grain overlay — dark mode only */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-0 dark:opacity-[0.05] mix-blend-overlay transition-opacity duration-300"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />


      {/* Masthead */}
      <header className="max-w-6xl mx-auto px-4 mt-6 sm:px-6 md:px-10 pt-8 sm:pt-10 pb-6 sm:pb-8 border-b border-neutral-200 dark:border-[#2E2B27]">
        <div className="flex items-start justify-between gap-4 mb-4">
        </div>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h1 className="font-['Fraunces',serif] text-4xl sm:text-5xl md:text-6xl leading-[0.95] italic">
            Gallery Sheet
          </h1>
        </div>
      </header>

      {/* Gallery */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[130px] sm:auto-rows-[160px] lg:auto-rows-[190px] gap-2 sm:gap-3 md:gap-4 [grid-auto-flow:dense]"
        >
          {PHOTOS.map((p) => (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(p.id)}
              className={`group relative overflow-hidden rounded-sm border border-neutral-200 dark:border-[#2E2B27] bg-neutral-100 dark:bg-[#1B1917] ${SPAN[p.size]}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute left-2 top-2 sm:left-3 sm:top-3 font-['JetBrains_Mono',monospace] text-[9px] sm:text-[10px] tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/85 dark:bg-[#121110]/80 border border-neutral-200 dark:border-[#2E2B27] text-amber-700 dark:text-[#C9A961] rounded-sm">
                {p.frame}
              </div>
              <div
                className={`absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 transition-all duration-300 ${
                  hovered === p.id ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <p className="font-['Fraunces',serif] italic text-sm sm:text-lg leading-tight text-white">
                  {p.title}
                </p>
                <p className="font-['JetBrains_Mono',monospace] text-[9px] sm:text-[10px] text-amber-300 dark:text-[#C9A961] mt-0.5 sm:mt-1">
                  {p.location} · {p.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

    