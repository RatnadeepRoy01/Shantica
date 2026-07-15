import Image from "next/image"
import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"
import { Card, CardContent } from "../Card/card"

export interface Pillar {
  icon: LucideIcon
  title: string
  img: string
  desc: string
}

function AchievementsCard({ icon: Icon, title, img, desc }: Pillar) {
  return (
    <Card className="group overflow-hidden border-border/60 bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent>
        <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-serif-display text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-[15px]">{desc}</p>
        <Link
          href="/about"
          className="inline-flex items-center text-primary font-medium mt-5 text-sm hover:gap-2 gap-1 transition-all"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

export default AchievementsCard