"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, Globe, AlertCircle } from "lucide-react"

export default function ShippingInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Shipping Information</h1>
          <p className="text-lg text-orange-100">Learn about our shipping options and delivery times</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Standard Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Our standard shipping option is perfect for most orders.</p>
              <ul className="space-y-2 text-sm">
                <li>Delivery Time: 5-7 business days</li>
                <li>Cost: Free for orders over $50</li>
                <li>Available to: Continental US</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Express Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Get your order faster with our express shipping option.</p>
              <ul className="space-y-2 text-sm">
                <li>Delivery Time: 2-3 business days</li>
                <li>Cost: $9.99</li>
                <li>Available to: Continental US & Canada</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                International Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">We ship to select international locations.</p>
              <ul className="space-y-2 text-sm">
                <li>Delivery Time: 10-15 business days</li>
                <li>Cost: Calculated at checkout</li>
                <li>Available to: 50+ countries</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Local Pickup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Pick up your order at our store location.</p>
              <ul className="space-y-2 text-sm">
                <li>Ready Time: 2-3 business days</li>
                <li>Cost: Free</li>
                <li>Location: 123 Shopping Street, NY 10001</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle>Tracking Your Order</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Once your order ships, you'll receive a tracking number via email. You can use this number to track your
              package in real-time on our shipping partner's website.
            </p>
            <p className="text-muted-foreground">Orders typically process within 1-2 business days before shipping.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
