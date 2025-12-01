"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/product-card"
import HeroBanner from "@/components/hero-banner"
import CategorySection from "@/components/category-section"
import CategoryProductsSection from "@/components/category-products-section"
import { fetchAllProducts, fetchCategories } from "@/lib/api"
import { getAllProducts } from "@/lib/products"
import type { Product } from "@/lib/products"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [apiProducts, fetchedCategories] = await Promise.all([fetchAllProducts(), fetchCategories()])

        const loadedProducts = apiProducts && apiProducts.length > 0 ? apiProducts : getAllProducts()
        setProducts(loadedProducts)
        setCategories(fetchedCategories && Array.isArray(fetchedCategories) ? fetchedCategories.slice(0, 6) : [])
      } catch (error) {
        console.error("[v0] Error loading data:", error)
        setProducts(getAllProducts())
        setCategories([])
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const featuredProducts = loading ? [] : products.slice(0, 4)

  return (
    <>
      <HeroBanner />
      <CategorySection />

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Handpicked items just for you</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading
              ? [...Array(4)].map((_, i) => <div key={i} className="bg-muted rounded-lg h-96 animate-pulse" />)
              : featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.length > 0 &&
        categories.map((category) => {
          const categoryStr = typeof category === "string" ? category : String(category)
          const categoryTitle = categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1)
          return <CategoryProductsSection key={categoryStr} category={categoryStr} title={categoryTitle} />
        })}
    </>
  )
}
