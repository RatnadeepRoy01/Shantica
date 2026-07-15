import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

const events = [
  {
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-15%20at%2010.46.27%20PM.jpeg",
    title: "Barak iconic Award For best Startup",
    date: "July 14 @ 12:00 pm",
  },
  {
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-15%20at%2010.51.01%20PM.jpeg",
    title: "UNICEF Recognition Award For best Startup",
    date: "July 7 @ 12:00 pm",
  },
  {    
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-15%20at%2010.54.13%20PM.jpeg",
    title:
      "Recognized for distinguished service in flood response",
    date: "May 25 @ 11:00 am",
  },
  {    
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-15%20at%2011.01.18%20PM.jpeg",
    title:
      "Youth Leadership Excellence Award",
    date: "May 25 @ 11:00 am",
  },
  {    
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-15%20at%2011.00.13%20PM.jpeg",
    title:
      "Best Startup Award in Barak Valley",
    date: "May 25 @ 11:00 am",
  },
  {    
    image:
      "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-15%20at%2011.08.15%20PM.jpeg",
    title:
      "Recognition from Assam University",
    date: "May 25 @ 11:00 am",
  },
];
     
function EventCard({ event }) {
  return (
    <a
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-sm bg-stone-100 aspect-[4/3]">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-amber-700">
        <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span>{event.date}</span>
      </div>

      <h3 className="mt-2 font-serif text-[1.35rem] leading-snug text-stone-900">
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out group-hover:bg-[length:100%_1px] pb-0.5">
          {event.title}
        </span>
      </h3>

      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors duration-300 group-hover:text-stone-900">
        Details
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      </span>
    </a>
  );
}

export default function EventsSection() {
  return (
    <section className="bg-yellow-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between border-b border-stone-200 pb-6">
          <div>
            <p className="text-xs font-medium font-serif italic uppercase tracking-[0.2em] text-amber-700">
              What's on
            </p>
            <h2 className="mt-2 font-serif text-4xl text-stone-900 font-serif italic sm:text-5xl">
              Awards
            </h2>
          </div>
          <a
            href="/gallery"
            className="hidden shrink-0 items-center gap-1.5 border-b border-stone-300 pb-1 text-sm font-medium text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900 sm:inline-flex"
          >
            View all Awards
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>    
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>        

        <div className="mt-12 flex justify-center sm:hidden">
          <a
            href="https://www.ashoka.edu.in/events"
            className="inline-flex items-center gap-1.5 border-b border-stone-300 pb-1 text-sm font-medium text-stone-700"
          >
            View all events
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}