import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/toaster";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { CartProvider } from "@/context/cart-context";
import { Inter } from "next/font/google";
import type React from "react";
import DebugCart from "./debug-cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SimpleShop - Ecommerce Store",
  description: "A simple ecommerce store built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      {/* Add suppressHydrationWarning to the body element */}
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
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
  );
}
