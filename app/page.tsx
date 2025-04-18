import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to SimpleShop</h1>
          <p className="mt-4 text-lg text-gray-600">
            Quality products at affordable prices
          </p>
          <Button className="mt-6">Shop Now</Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
