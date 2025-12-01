"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">New Arrivals</h1>
          <p className="text-lg text-orange-100">Discover the latest additions to our collection</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Products</h2>
          <p className="text-muted-foreground mb-8">Check out our newest items handpicked just for you</p>
        </div>

        <ProductGrid />

        <div className="mt-16 text-center">
          <Link href="/products">
            <Button size="lg" className="gap-2">
              View All Products <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
