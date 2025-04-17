import Link from "next/link"
import { ChevronRight, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock order history data
const orders = [
  {
    id: "ORD-2023-1234",
    date: "April 12, 2023",
    total: 119.97,
    status: "Delivered",
    items: [
      { name: "Casual T-Shirt", quantity: 2 },
      { name: "Denim Jeans", quantity: 1 },
    ],
  },
  {
    id: "ORD-2023-0987",
    date: "March 28, 2023",
    total: 89.99,
    status: "Delivered",
    items: [{ name: "Leather Sneakers", quantity: 1 }],
  },
  {
    id: "ORD-2023-5678",
    date: "February 15, 2023",
    total: 74.98,
    status: "Delivered",
    items: [
      { name: "Sunglasses", quantity: 1 },
      { name: "Crossbody Bag", quantity: 1 },
    ],
  },
]

export default function OrdersPage() {
  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="text-3xl font-bold">Order History</h1>

      {orders.length > 0 ? (
        <div className="mt-8 space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <CardDescription>{order.date}</CardDescription>
                </div>
                <Badge variant={order.status === "Delivered" ? "default" : "outline"}>{order.status}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div className="flex items-center">
                        <Package className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-muted-foreground">Qty: {item.quantity}</span>
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t">
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-medium">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href={`/orders/${order.id}`}>
                    <Button variant="outline" className="w-full">
                      View Order Details
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="p-8 mt-8 text-center border rounded-lg">
          <p className="mb-4 text-lg">You haven't placed any orders yet</p>
          <Link href="/products">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
