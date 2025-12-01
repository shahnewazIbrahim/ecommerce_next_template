"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Category {
  id: string
  name: string
  icon: string
  description: string
  color: string
}

const categories: Category[] = [
  {
    id: "clothing",
    name: "Clothing",
    icon: "👕",
    description: "Premium t-shirts, jeans & more",
    color: "from-blue-50 to-blue-100",
  },
  {
    id: "footwear",
    name: "Footwear",
    icon: "👟",
    description: "Comfortable sneakers & shoes",
    color: "from-orange-50 to-orange-100",
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: "🎒",
    description: "Bags, belts & lifestyle items",
    color: "from-green-50 to-green-100",
  },
]

export default function CategorySection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of products carefully curated just for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.id}`}>
              <div className="group cursor-pointer h-full">
                <div
                  className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2`}
                >
                  <div className="text-6xl mb-4 transition-transform group-hover:scale-110">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{category.description}</p>
                  <Button
                    variant="ghost"
                    className="text-secondary font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    Explore →
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
