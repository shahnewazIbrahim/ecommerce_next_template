"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

// Mock product data
const product = {
  id: 1,
  name: "Casual T-Shirt",
  price: 29.99,
  rating: 4.5,
  reviews: 24,
  description:
    "A comfortable and stylish casual t-shirt made from 100% organic cotton. Perfect for everyday wear with a relaxed fit and soft feel.",
  features: ["100% organic cotton", "Relaxed fit", "Machine washable", "Available in multiple colors"],
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600&text=View%202",
    "/placeholder.svg?height=600&width=600&text=View%203",
    "/placeholder.svg?height=600&width=600&text=View%204",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Black", "White", "Navy", "Gray"],
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("Black")
  const [mainImage, setMainImage] = useState(product.images[0])
  const [inWishlist, setInWishlist] = useState(false)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const addToCart = () => {
    toast({
      description: `${product.name} (${selectedColor}, ${selectedSize}) added to cart`,
    })
  }

  const toggleWishlist = () => {
    setInWishlist(!inWishlist)
    toast({
      description: inWishlist ? "Removed from wishlist" : "Added to wishlist",
    })
  }

  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="mb-4 text-sm breadcrumbs">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        {" / "}
        <Link href="/products" className="text-muted-foreground hover:text-foreground">
          Products
        </Link>
        {" / "}
        <span>{product.name}</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden border rounded-lg">
            <Image
              src={mainImage || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`border rounded-md overflow-hidden ${mainImage === image ? "ring-2 ring-primary" : ""}`}
                onClick={() => setMainImage(image)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-cover w-full h-auto"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : i < product.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <div className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="w-10 h-10 p-0"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Color</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Quantity</label>
              <div className="flex items-center">
                <Button variant="outline" size="icon" onClick={decreaseQuantity}>
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={increaseQuantity}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button className="flex-1" size="lg" onClick={addToCart}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className={inWishlist ? "text-red-500" : ""} onClick={toggleWishlist}>
                <Heart className={`w-5 h-5 mr-2 ${inWishlist ? "fill-red-500" : ""}`} />
                {inWishlist ? "In Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
          </div>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p>{product.description}</p>
            </TabsContent>
            <TabsContent value="features" className="pt-4">
              <ul className="pl-5 space-y-1 list-disc">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
