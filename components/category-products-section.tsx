"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/product-card"
import { fetchProductsByCategory } from "@/lib/api"
import type { Product } from "@/lib/products"

interface CategoryProductsSectionProps {
  category: string
  title: string
}

export default function CategoryProductsSection({ category, title }: CategoryProductsSectionProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      const categoryProducts = await fetchProductsByCategory(category)
      setProducts(categoryProducts.slice(0, 4))
      setLoading(false)
    }
    loadProducts()
  }, [category])

  if (!loading && products.length === 0) {
    return null
  }

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2 capitalize">{title}</h3>
          <p className="text-muted-foreground">Explore our {title.toLowerCase()} collection</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? [...Array(4)].map((_, i) => <div key={i} className="bg-muted rounded-lg h-96 animate-pulse" />)
            : products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  )
}
