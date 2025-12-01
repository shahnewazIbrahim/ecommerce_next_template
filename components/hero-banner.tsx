"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-50 px-4 py-24 sm:py-32 lg:py-40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 md:items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Welcome to StyleHub
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-foreground">
                Discover Your Perfect Style
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Explore our curated collection of premium clothing, footwear, and accessories designed for the modern
                lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button className="w-full sm:w-auto px-8 py-6 text-base bg-foreground hover:bg-foreground/90">
                    Shop Collection
                  </Button>
                </Link>
                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-base bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-secondary/10 to-accent/10 rounded-2xl"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-6xl mb-4">👕</p>
                  <p className="text-muted-foreground text-lg font-medium">Premium Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
