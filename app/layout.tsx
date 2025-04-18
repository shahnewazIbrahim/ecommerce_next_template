import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { Toaster } from "@/components/toaster"
import DebugCart from "./debug-cart"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SimpleShop - Ecommerce Store",
  description: "A simple ecommerce store built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
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
