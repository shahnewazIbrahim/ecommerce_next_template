import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductGrid from "@/components/product-grid"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="text-xl font-bold">
            StyleShop
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="/wishlist" className="font-medium transition-colors hover:text-primary">
              Wishlist
            </Link>
            <Link href="/orders" className="font-medium transition-colors hover:text-primary">
              Orders
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-primary rounded-full -mt-1 -mr-1">
                  3
                </span>
              </Button>
            </Link>
            <Link href="/account">
              <Button>Account</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 bg-muted">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Summer Collection 2025</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover our latest arrivals with styles perfect for the season.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg">Shop Women</Button>
                <Button size="lg" variant="outline">
                  Shop Men
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <ProductGrid />
          </div>
        </section>
      </main>
      <footer className="py-6 border-t">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-medium">StyleShop</h3>
              <p className="text-sm text-muted-foreground">
                Your destination for trendy fashion and accessories at affordable prices.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Newsletter</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Subscribe to get updates on new arrivals and special offers.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 text-sm text-center text-muted-foreground border-t">
            &copy; {new Date().getFullYear()} StyleShop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
