"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Accessories</h1>
          <p className="text-lg text-green-100">Complete your look with our premium accessories collection</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Accessorize Your Style</h2>
          <p className="text-muted-foreground mb-8">
            From bags to belts, find the perfect accessories to elevate your outfit
          </p>
        </div>

        <ProductGrid category="Accessories" />

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
