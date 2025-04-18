import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StyleShop",
  description: "Your destination for trendy fashion and accessories.",
  keywords: ["fashion", "clothing", "accessories", "style", "shop"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name",
  publisher: "Your Name",
  openGraph: {
    title: "StyleShop",
    description: "Your destination for trendy fashion and accessories.",
    url: "https://yourwebsite.com",
    siteName: "StyleShop",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StyleShop - Your destination for trendy fashion and accessories.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StyleShop",
    description: "Your destination for trendy fashion and accessories.",
    images: ["https://yourwebsite.com/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
