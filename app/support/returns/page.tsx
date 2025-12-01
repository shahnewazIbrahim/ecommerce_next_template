"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, RotateCcw, Package } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Returns & Exchanges</h1>
          <p className="text-lg text-orange-100">Easy returns within 30 days of purchase</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Return Window
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600 mb-2">30 Days</p>
              <p className="text-muted-foreground">You have 30 days from the purchase date to initiate a return.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-blue-600" />
                Processing Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600 mb-2">5-7 Days</p>
              <p className="text-muted-foreground">
                Refunds are processed within 5-7 business days after we receive your return.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-purple-600" />
                Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600 mb-2">Free</p>
              <p className="text-muted-foreground">We provide a prepaid shipping label for most returns.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>How to Return an Item</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold">Contact Our Support Team</h4>
                    <p className="text-muted-foreground">Email support@simpleshop.com with your order number</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold">Receive Return Instructions</h4>
                    <p className="text-muted-foreground">
                      We'll send you a prepaid shipping label and return instructions
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold">Ship the Item Back</h4>
                    <p className="text-muted-foreground">Pack the item securely and ship it using the provided label</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold">Receive Your Refund</h4>
                    <p className="text-muted-foreground">
                      Once we receive and inspect the item, your refund will be processed
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle>Return Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Items must be unused and in original condition</li>
                <li>Original packaging and tags must be intact</li>
                <li>Items purchased on sale cannot be returned for full price</li>
                <li>Items damaged due to customer misuse are non-returnable</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
