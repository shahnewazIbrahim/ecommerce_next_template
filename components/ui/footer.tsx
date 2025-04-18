import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-medium">StyleShop</h3>
            <p className="text-sm text-muted-foreground">
              Your destination for trendy fashion and accessories at affordable
              prices.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground"
                >
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
  );
}
