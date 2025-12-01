"use client"

import Link from "next/link"
import { ShoppingBag, Search, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useState, useEffect } from "react"
import { getAllProducts } from "@/lib/products"

export default function Header() {
  const { totalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Get unique categories from products
  const categories = Array.from(new Set(getAllProducts().map((p) => p.category)))

  const categoryDropdowns: Record<string, string[]> = {
    Clothing: ["T-Shirts", "Jeans", "Jackets", "Hoodies"],
    Footwear: ["Sneakers", "Boots", "Sandals", "Formal Shoes"],
    Accessories: ["Bags", "Belts", "Watches", "Scarves"],
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY) {
        setIsNavVisible(true)
      } else if (currentScrollY > 100) {
        // Only hide after scrolling past header
        setIsNavVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Top Header Section */}
      <header
        className={`bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg sticky top-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold font-serif">SimpleShop</div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md ml-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 text-gray-900 rounded-l-lg focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 hover:bg-orange-600 rounded-r-lg transition-colors">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6 ml-auto">
            {/* Offers */}
            <div className="hidden lg:flex items-center gap-2 text-sm hover:text-orange-400 cursor-pointer transition-colors">
              <div className="text-base">🎁</div>
              <div>
                <div className="font-semibold">Offers</div>
                <div className="text-xs text-gray-300">Latest Deals</div>
              </div>
            </div>

            {/* Account */}
            <div className="hidden lg:flex items-center gap-2 text-sm hover:text-orange-400 cursor-pointer transition-colors">
              <div className="text-base">👤</div>
              <div>
                <div className="font-semibold">Account</div>
                <div className="text-xs text-gray-300">Login</div>
              </div>
            </div>

            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-white/20"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-white/20">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 text-gray-900 rounded-l-lg focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 hover:bg-orange-600 rounded-r-lg transition-colors">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Category Navigation */}
      <nav className={`sticky top-0 z-40 bg-white border-b border-gray-200 shadow-md`}>
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-start gap-8">
            {categories.map((category) => (
              <div key={category} className="relative group">
                <button className="py-4 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors flex items-center gap-1">
                  {category}
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-200 rounded-b-lg shadow-lg min-w-max">
                  {categoryDropdowns[category]?.map((subcategory) => (
                    <Link
                      key={subcategory}
                      href={`/products?category=${category}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {subcategory}
                    </Link>
                  ))}
                  <Link
                    href={`/products?category=${category}`}
                    className="block px-4 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 border-t border-gray-200"
                  >
                    View All {category}
                  </Link>
                </div>
              </div>
            ))}

            {/* Additional Links */}
            <Link
              href="/orders"
              className="py-4 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors"
            >
              Orders
            </Link>
            <Link
              href="/wishlist"
              className="py-4 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors"
            >
              Wishlist
            </Link>
          </div>

          {/* Mobile Category Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              {categories.map((category) => (
                <div key={category} className="py-2">
                  <Link
                    href={`/products?category=${category}`}
                    className="block px-4 py-2 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category}
                  </Link>
                </div>
              ))}
              <Link
                href="/orders"
                className="block px-4 py-2 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Orders
              </Link>
              <Link
                href="/wishlist"
                className="block px-4 py-2 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
