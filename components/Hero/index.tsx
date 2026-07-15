"use client";
import Image from "next/image";
import Link from "next/link"
import { ArrowRight, Heart, Users } from 'lucide-react'
import Button from "../Button/button"
import * as React from "react"


const Hero = () => {

  return (
    <>

            <section className="relative overflow-hidden gradient-warm">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h4 className="mb-4.5 text-base font-semibold text-primary uppercase tracking-wide">
                🌟 Shantica Leadership Academy
              </h4>

              <h1 className="mb-5 pr-16 font-serif italic text-3xl font-extrabold text-black dark:text-white xl:text-hero leading-tight">
                Every "Somebody" was once told they were {" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  "Nobody."
                </span>
              </h1>

              <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Shantica Leadership Academy empowers Northeast India’s youth by bridging the gap between education and employability through experiential learning, industry mentorship, and real-world leadership development.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-base shadow-md shadow-primary/20">
                  <Link href="/contact"><Heart className="h-5 w-5 mr-2" /> Join us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-foreground/20 hover:bg-secondary px-8 h-12 text-base">
                  <Link href="/gallery">Gallery <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { v: '10,000+', l: 'Youth Impacted' },
                  { v: '120+', l: 'Global Mentors' },
                  { v: '400+', l: 'Workshops Delivered' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-serif-display text-3xl md:text-4xl font-bold text-foreground">{s.v}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
                <Image src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2252.JPG.jpeg?updatedAt=1783432450439" alt="Women of strength and community" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
              <div className="hidden bg-white md:block absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 max-w-[260px] border border-border">
                <div className="flex items-center gap-3 bg-white">
                  <div>
                    <div className="font-serif-display text-2xl font-bold leading-none">90%</div>
                    <div className="text-xs text-muted-foreground mt-1">positive reiviews</div>
                  </div>
                </div>
              </div>        
              <div className="hidden md:flex absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl bg-white px-5 py-4 items-center gap-3 border border-border">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium bg-white">3,000+ positive reviews</span>
              </div>    
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;

    