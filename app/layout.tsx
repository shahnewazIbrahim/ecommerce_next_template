import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />

      <body>{children}</body>

      <Footer />
    </html>
  );
}
