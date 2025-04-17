import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Mock wishlist data
const wishlistItems = [
  {
    id: 2,
    name: "Denim Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
  },
]

export default function WishlistPage() {
  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="text-3xl font-bold">Your Wishlist</h1>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative">
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-[250px]"
                  />
                </Link>
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground">{item.category}</div>
                <Link href={`/products/${item.id}`} className="block mt-1 text-lg font-medium hover:underline">
                  {item.name}
                </Link>
                <div className="mt-1 font-semibold">${item.price.toFixed(2)}</div>
              </CardContent>
              <CardFooter className="flex gap-2 p-4 pt-0">
                <Button className="flex-1">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="text-red-500">
                  <Trash2 className="w-4 h-4" />
                  <span className="sr-only">Remove from wishlist</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="p-8 mt-8 text-center border rounded-lg">
          <p className="mb-4 text-lg">Your wishlist is empty</p>
          <Link href="/products">
            <Button>Explore Products</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
