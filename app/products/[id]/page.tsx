"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Minus, Plus, ShoppingBag, Check, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/context/cart-context"
import { toast } from "@/components/ui/use-toast"
import { getProductById } from "@/lib/products"
import { fetchProductById, transformDummyJSONProduct } from "@/lib/api"
import type { Product } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const { addItem, getItemQuantity } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [inWishlist, setInWishlist] = useState(false)

  useEffect(() => {
    async function loadProduct() {
      try {
        const apiProduct = await fetchProductById(productId)
        if (apiProduct) {
          setProduct(transformDummyJSONProduct(apiProduct))
        } else {
          const localProduct = getProductById(productId)
          setProduct(localProduct || null)
        }
      } catch (error) {
        console.error("Error loading product:", error)
        const localProduct = getProductById(productId)
        setProduct(localProduct || null)
      } finally {
        setLoading(false)
      }
    }
    loadProduct()
  }, [productId])

  useEffect(() => {
    if (product && selectedSize === "" && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0])
    }
    if (product && selectedColor === "" && product.colors.length > 0) {
      setSelectedColor(product.colors[0])
    }
  }, [product, selectedSize, selectedColor])

  if (loading) {
    return (
      <div className="container px-4 py-20 mx-auto text-center">
        <div className="bg-muted rounded-lg h-96 animate-pulse" />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container px-4 py-20 mx-auto text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="mt-4 text-muted-foreground">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/">
          <Button className="mt-4">Back to Home</Button>
        </Link>
      </div>
    )
  }

  const itemQuantityInCart = getItemQuantity(product.id)

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
      description: `${product.name} added to cart`,
    })
  }

  const toggleWishlist = () => {
    setInWishlist(!inWishlist)
    toast({
      description: inWishlist ? "Removed from wishlist" : "Added to wishlist",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container px-4 py-4 mx-auto text-sm flex items-center gap-2">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
            Products
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={product.image || "/placeholder.svg?height=500&width=500"}
                alt={product.name}
                width={500}
                height={500}
                className="object-contain w-full h-full p-8"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            {/* Header Section */}
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase bg-secondary/20 text-secondary rounded-full">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold font-serif mb-4">{product.name}</h1>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
                {itemQuantityInCart > 0 && (
                  <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                    <Check className="w-4 h-4" /> {itemQuantityInCart} in cart
                  </span>
                )}
              </div>
            </div>

            {/* Product Description */}
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div>
              <label className="block text-sm font-semibold mb-3">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={`${selectedSize === size ? "bg-foreground text-primary-foreground" : "hover:border-foreground"} ${size === "One Size" ? "px-6" : "w-12 h-12"}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Color</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    className={
                      selectedColor === color ? "bg-foreground text-primary-foreground" : "hover:border-foreground"
                    }
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-3">Quantity</label>
                <div className="flex items-center border border-border rounded-lg w-fit">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={decreaseQuantity}
                    className="rounded-none hover:bg-muted"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={increaseQuantity}
                    className="rounded-none hover:bg-muted"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  className="flex-1 h-12 bg-foreground hover:bg-foreground/90 text-primary-foreground rounded-lg font-semibold"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {itemQuantityInCart > 0 ? "Add More to Cart" : "Add to Cart"}
                </Button>
                <Button variant="outline" className="h-12 px-6 hover:bg-muted bg-transparent" onClick={toggleWishlist}>
                  <Heart className={`w-5 h-5 ${inWishlist ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
              </div>
            </div>

            <div className="border-t border-border pt-6 space-y-3">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">100% secure transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="description" className="text-base">
                Description
              </TabsTrigger>
              <TabsTrigger value="features" className="text-base">
                Features
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </TabsContent>
            <TabsContent value="features" className="space-y-4">
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
