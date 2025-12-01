"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"

export default function FootwearPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Footwear</h1>
          <p className="text-lg text-purple-100">Comfortable and stylish shoes for every occasion</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Footwear Collection</h2>
          <p className="text-muted-foreground mb-8">Step into style with our premium selection of sneakers and shoes</p>
        </div>

        <ProductGrid category="Footwear" />

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
