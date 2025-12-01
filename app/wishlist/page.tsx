import Link from "next/link"
import { ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Simple wishlist data
const wishlistItems = [
  {
    id: 2,
    name: "Denim Jeans",
    price: 49.99,
    category: "Clothing",
  },
  {
    id: 4,
    name: "Backpack",
    price: 39.99,
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
            <Card key={item.id}>
              <div className="pt-4 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">{item.name[0]}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500">{item.category}</div>
                <Link href={`/products/${item.id}`} className="block mt-1 text-lg font-medium hover:underline">
                  {item.name}
                </Link>
                <div className="mt-1 font-semibold">${item.price.toFixed(2)}</div>
              </CardContent>
              <CardFooter className="flex gap-2 p-4 pt-0">
                <Button className="flex-1">
                  <ShoppingBag className="w-4 h-4 mr-2" />
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
