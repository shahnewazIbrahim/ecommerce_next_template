"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

// Mock product data
const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Leather Sneakers",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Crossbody Bag",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Watch",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
]

export default function ProductGrid() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId))
      toast({
        description: "Removed from wishlist",
      })
    } else {
      setWishlist([...wishlist, productId])
      toast({
        description: "Added to wishlist",
      })
    }
  }

  const addToCart = (productName: string) => {
    toast({
      description: `${productName} added to cart`,
    })
  }

  return (
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={400}
                className="object-cover w-full h-[300px]"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : ""}`} />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">{product.category}</div>
            <Link href={`/products/${product.id}`} className="block mt-1 text-lg font-medium hover:underline">
              {product.name}
            </Link>
            <div className="mt-1 font-semibold">${product.price.toFixed(2)}</div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" onClick={() => addToCart(product.name)}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
