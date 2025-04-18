import ProductGrid from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="text-3xl font-bold">All Products</h1>
      <ProductGrid />
    </div>
  )
}
