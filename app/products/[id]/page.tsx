"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Minus, Plus, ShoppingBag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/context/cart-context"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"
import { use } from "react"
import { getProductById } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  // Unwrap params and get product
  const unwrappedParams = use(params)
  const productId = unwrappedParams.id
  const product = getProductById(productId)

  const { addItem, getItemQuantity } = useCart()

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="container px-4 py-10 mx-auto text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="mt-4 text-gray-500">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/">
          <Button className="mt-4">Back to Home</Button>
        </Link>
      </div>
    )
  }

  const itemQuantityInCart = getItemQuantity(product.id)

  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [inWishlist, setInWishlist] = useState(false)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
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
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>
        {" / "}
        <Link href="/products" className="text-gray-500 hover:text-gray-700">
          Products
        </Link>
        {" / "}
        <span>{product.name}</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center bg-gray-100 rounded-lg">
          <Image
            src={product.image || "/placeholder.svg?height=400&width=300"}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</div>
            {itemQuantityInCart > 0 && <div className="mt-2 text-sm text-green-600">{itemQuantityInCart} in cart</div>}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={size === "One Size" ? "px-4" : "w-10 h-10 p-0"}
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
              <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                {itemQuantityInCart > 0 ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Add More to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Cart
                  </>
                )}
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
