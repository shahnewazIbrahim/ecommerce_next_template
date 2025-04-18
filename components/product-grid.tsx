"use client"

import ProductCard from "@/components/product-card"

// Mock product data
const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300&text=Casual+T-Shirt",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300&text=Denim+Jeans",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Leather Sneakers",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300&text=Leather+Sneakers",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Crossbody Bag",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300&text=Crossbody+Bag",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=300&text=Sunglasses",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Watch",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300&text=Watch",
    category: "Accessories",
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
