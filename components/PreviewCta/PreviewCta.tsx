import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "../Button/button";
import Image from "next/image";
import Link from "next/link";

const MENTOR_IMG = 'https://images.unsplash.com/photo-1586726370832-3440a511e479?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxoZWxwaW5nJTIwaGFuZHN8ZW58MHx8fHwxNzgxNjEwMzQ1fDA&ixlib=rb-4.1.0&q=85'

export default function CareerPromiseSection() {
  return (
<section className="relative py-18 lg:py-20 overflow-hidden">
<div className="absolute inset-0">
  <Image src={MENTOR_IMG} alt="" fill className="object-cover" />
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse at center, hsl(210 40% 98% / 0.1 ) 0%, hsl(213 45% 94% / 0.1 ) 55%, hsl(217 50% 88% / 0.1 ) 100%)",
    }}
  />
</div>
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
    <div className="max-w-2xl text-slate-900">
      <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-medium mb-3">Our promise</p>
      <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-balance mb-4">Careers built one interview at a time.</h2>
      <p className="text-base text-slate-700 leading-relaxed mb-6">
        From your first resume draft to your final round, our mentors coach you the way a hiring manager thinks — because the goal was never a polished PDF, it was a job offer.
      </p>
      <div className="space-y-2.5">
        {[
          '1:1 resume reviews with industry mentors',
          'Mock interviews across 30+ job roles',
          'LinkedIn and portfolio makeovers that get noticed',
          'Placement support until you sign the offer',
        ].map((t) => (
          <div key={t} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
            <span className="text-slate-800">{t}</span>
          </div>
        ))}
      </div>
      <Button asChild size="lg" className="mt-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-11">
        <Link href="/contact">Start your journey <ArrowRight className="h-4 w-4 ml-2" /></Link>
      </Button>
    </div>
  </div>
</section>
);    
}

    
  