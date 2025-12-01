"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/product-card"
import { fetchAllProducts } from "@/lib/api"
import { getAllProducts } from "@/lib/products"
import type { Product } from "@/lib/products"

export function ProductGrid({ category }: { category?: string } = {}) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      const apiProducts = await fetchAllProducts()
      let allProducts = apiProducts.length > 0 ? apiProducts : getAllProducts()

      // Filter by category if provided
      if (category) {
        allProducts = allProducts.filter((p) => p.category === category)
      }

      setProducts(allProducts)
      setLoading(false)
    }
    loadProducts()
  }, [category])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-muted rounded-lg h-96 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
