"use client"

import { useCart } from "@/context/cart-context"

export default function DebugCart() {
  const cart = useCart()

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-black/80 text-white rounded-lg max-w-xs z-50 hidden">
      <h3 className="font-bold mb-2">Cart Debug</h3>
      <div className="text-xs">
        <p>Items: {cart.totalItems}</p>
        <p>Subtotal: ${cart.subtotal.toFixed(2)}</p>
        <details>
          <summary className="cursor-pointer">Items</summary>
          <pre className="mt-2 overflow-auto max-h-40">{JSON.stringify(cart.items, null, 2)}</pre>
        </details>
      </div>
    </div>
  )
}
