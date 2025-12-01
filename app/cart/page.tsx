"use client"

import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"
import { toast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart()
  const shipping = items.length > 0 ? 4.99 : 0
  const total = subtotal + shipping

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      return
    }
    updateQuantity(id, newQuantity)
    toast({
      description: "Cart updated",
    })
  }

  const handleRemoveItem = (id: number, name: string) => {
    removeItem(id)
    toast({
      description: `${name} removed from cart`,
    })
  }

  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="grid gap-8 mt-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {items.length > 0 ? (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center p-4 border rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-[100px] h-[100px] bg-gray-200 rounded-md flex items-center justify-center">
                      <span className="text-gray-500 text-2xl">{item.name[0]}</span>
                    </div>
                  </div>
                  <div className="flex-1 ml-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Unit Price: ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center ml-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="w-4 h-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-10 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                  <div className="ml-4 font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-4 text-red-500"
                    onClick={() => handleRemoveItem(item.id, item.name)}
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center border rounded-lg">
              <p className="mb-4 text-lg">Your cart is empty</p>
              <Link href="/">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          )}
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={items.length === 0}>
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
