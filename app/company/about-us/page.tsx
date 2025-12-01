"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Heart } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About SimpleShop</h1>
          <p className="text-lg text-orange-100">
            Your destination for quality products and exceptional shopping experience
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              SimpleShop was founded in 2020 with a simple mission: to provide high-quality products at affordable
              prices with exceptional customer service.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small online store has grown into a trusted destination for thousands of customers
              worldwide. We're committed to offering a carefully curated selection of products that enhance your
              lifestyle.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to innovate and expand our product range while maintaining our core values of quality,
              affordability, and customer satisfaction.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">By The Numbers</h3>
            <div className="space-y-4">
              <div>
                <p className="text-4xl font-bold text-orange-600">50K+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-600">5K+</p>
                <p className="text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-600">50+</p>
                <p className="text-muted-foreground">Countries Shipped</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide exceptional products and services that empower our customers to live their best lives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-600" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Quality, integrity, customer-first approach, sustainability, and continuous innovation guide everything
                we do.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A dedicated team of passionate individuals committed to delivering excellence in every customer
                interaction.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
          <CardHeader>
            <CardTitle>Why Choose SimpleShop?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Curated selection of quality products</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Competitive pricing and regular discounts</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Fast and reliable shipping</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Hassle-free returns and exchanges</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Responsive customer support</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Secure and convenient checkout</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
