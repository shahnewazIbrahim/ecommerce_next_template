"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Shop: [
      { label: "New Arrivals", href: "/shop/new-arrivals" },
      { label: "Clothing", href: "/shop/clothing" },
      { label: "Footwear", href: "/shop/footwear" },
      { label: "Accessories", href: "/shop/accessories" },
    ],
    Support: [
      { label: "Contact Us", href: "/support/contact-us" },
      { label: "Shipping Info", href: "/support/shipping-info" },
      { label: "Returns", href: "/support/returns" },
      { label: "FAQ", href: "/support/faq" },
    ],
    Company: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Blog", href: "/company/blog" },
      { label: "Careers", href: "/company/careers" },
      { label: "Press", href: "/company/press" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Accessibility", href: "/legal/accessibility" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">
      <div className="container px-4 mx-auto py-12">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-slate-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-slate-400 mb-6">Get the latest updates on new products and upcoming sales</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-5 mb-12">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">SimpleShop</h2>
            <p className="text-slate-400 text-sm mb-6">
              Your destination for quality products and exceptional shopping experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 text-orange-500" />
                <span>123 Shopping Street, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-orange-500" />
                <span>support@simpleshop.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-400 text-sm hover:text-orange-500 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-600 flex items-center justify-center transition-colors text-slate-400 hover:text-white"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-slate-500 text-sm">
              <p>&copy; {currentYear} SimpleShop. All rights reserved.</p>
              <p className="mt-1">
                Designed with <span className="text-orange-500">♥</span> by SimpleShop Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
