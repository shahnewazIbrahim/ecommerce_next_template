import { Button } from "@/components/ui/button"
import ProductGrid from "@/components/product-grid"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        <section className="py-12 bg-muted">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Summer Collection 2025</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover our latest arrivals with styles perfect for the season.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg">Shop Women</Button>
                <Button size="lg" variant="outline">
                  Shop Men
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <ProductGrid />
          </div>
        </section>
      </main>

    </div>
  )
}
