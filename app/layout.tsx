import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import Header from "@/components/header"
import { Toaster } from "@/components/toaster"
import RouteLoader from "@/components/route-loader"
import DebugCart from "./debug-cart"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SimpleShop - Ecommerce Store",
  description: "A simple ecommerce store built with Next.js",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Add suppressHydrationWarning to the body element */}
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <RouteLoader />
          <CartProvider>
            <ScrollToTop />
            <div className="min-h-screen bg-white flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <DebugCart />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
