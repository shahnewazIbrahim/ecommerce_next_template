"use client";

import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/lib/products";

export default function ProductGrid() {
  const products = getAllProducts();

  return (
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
