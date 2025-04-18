"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export default function Header() {
  const { totalItems } = useCart()

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-xl font-bold">
          SimpleShop
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-600">
            Products
          </Link>
          <Link href="/wishlist" className="hover:text-gray-600">
            Wishlist
          </Link>
          <Link href="/orders" className="hover:text-gray-600">
            Orders
          </Link>
        </nav>
        <Link href="/cart">
          <Button variant="outline" size="icon" className="relative">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </header>
  )
}
