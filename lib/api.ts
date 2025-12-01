import type { Product } from "@/lib/products"

export interface DummyJSONProduct {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  thumbnail?: string
  category: string
  rating?: number
  reviews?: Array<{ rating: number; comment: string; reviewerName: string }>
}

function getVariantsForCategory(category: string): { sizes: string[]; colors: string[] } {
  const categoryLower = category.toLowerCase()

  if (categoryLower.includes("clothing") || categoryLower.includes("shirt") || categoryLower.includes("dress")) {
    return {
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Navy", "Gray", "Red", "Blue"],
    }
  }

  if (categoryLower.includes("shoe") || categoryLower.includes("sneaker") || categoryLower.includes("footwear")) {
    return {
      sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
      colors: ["Black", "White", "Gray", "Navy", "Brown"],
    }
  }

  if (categoryLower.includes("watch") || categoryLower.includes("jewelry")) {
    return {
      sizes: ["One Size"],
      colors: ["Gold", "Silver", "Black", "Rose Gold"],
    }
  }

  return {
    sizes: ["One Size", "S", "M", "L"],
    colors: ["Black", "White", "Gray", "Navy"],
  }
}

// Transform DummyJSON product to our Product type
export function transformDummyJSONProduct(dummyProduct: DummyJSONProduct): Product {
  const variants = getVariantsForCategory(dummyProduct.category)

  return {
    id: dummyProduct.id,
    name: dummyProduct.title,
    price: dummyProduct.price,
    description: dummyProduct.description,
    image: dummyProduct.thumbnail || dummyProduct.images?.[0] || "/placeholder.svg",
    category: dummyProduct.category,
    features: [
      `Rating: ${dummyProduct.rating || "N/A"} stars`,
      `Category: ${dummyProduct.category}`,
      "Premium Quality",
      "Fast Shipping Available",
      "Authentic Product",
    ],
    sizes: variants.sizes,
    colors: variants.colors,
  }
}

// Fetch all products from DummyJSON
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=20")
    const data = await response.json()
    return data.products.map(transformDummyJSONProduct)
  } catch (error) {
    console.error("Failed to fetch products from API:", error)
    return []
  }
}

// Fetch single product by ID
export async function fetchProductById(id: string): Promise<DummyJSONProduct | null> {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error("Failed to fetch product:", error)
    return null
  }
}

// Fetch products by category
export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`)
    const data = await response.json()
    return data.products.map(transformDummyJSONProduct)
  } catch (error) {
    console.error("Failed to fetch products by category:", error)
    return []
  }
}

// Get available categories
export async function fetchCategories(): Promise<string[]> {
  try {
    const response = await fetch("https://dummyjson.com/products/categories")
    const data = await response.json()

    // DummyJSON returns an array of strings directly
    if (Array.isArray(data)) {
      return data.map((cat) => (typeof cat === "string" ? cat : cat.name || cat.slug || String(cat)))
    }
    return []
  } catch (error) {
    console.error("Failed to fetch categories:", error)
    return []
  }
}
