import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-xl font-bold">
          StyleShop
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link
            href="/"
            className="font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="font-medium transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/wishlist"
            className="font-medium transition-colors hover:text-primary"
          >
            Wishlist
          </Link>
          <Link
            href="/orders"
            className="font-medium transition-colors hover:text-primary"
          >
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
  );
}
