"use client";

import { Check, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const { addItem, getItemQuantity } = useCart();
  const itemInCart = getItemQuantity(product.id) > 0;

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
      toast({
        description: "Removed from wishlist",
      });
    } else {
      setWishlist([...wishlist, productId]);
      toast({
        description: "Added to wishlist",
      });
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
    });
    toast({
      description: `${product.name} added to cart`,
    });
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg?height=400&width=300"}
            alt={product.name}
            width={300}
            height={400}
            className="object-cover w-full h-[300px]"
          />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart
            className={`w-5 h-5 ${
              wishlist.includes(product.id) ? "fill-red-500 text-red-500" : ""
            }`}
          />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground">{product.category}</div>
        <Link
          href={`/products/${product.id}`}
          className="block mt-1 text-lg font-medium hover:underline"
        >
          {product.name}
        </Link>
        <div className="mt-1 font-semibold">${product.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={handleAddToCart}
          variant={itemInCart ? "secondary" : "default"}
        >
          {itemInCart ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
