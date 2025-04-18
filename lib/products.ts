// Product type definition
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  category: string;
  image: string;
};

// Products data
export const products: Record<string, Product> = {
  "1": {
    id: 1,
    name: "Basic T-Shirt",
    price: 19.99,
    description:
      "A comfortable and stylish basic t-shirt made from 100% cotton.",
    features: [
      "100% cotton",
      "Regular fit",
      "Machine washable",
      "Available in multiple colors",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy", "Gray"],
    category: "Clothing",
    image: "/placeholder.svg?height=400&width=300&text=Basic+T-Shirt",
  },
  "2": {
    id: 2,
    name: "Denim Jeans",
    price: 49.99,
    description: "Classic denim jeans with a comfortable stretch fit.",
    features: [
      "98% cotton, 2% elastane",
      "Regular fit",
      "Machine washable",
      "Five pocket design",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    category: "Clothing",
    image: "/placeholder.svg?height=400&width=300&text=Denim+Jeans",
  },
  "3": {
    id: 3,
    name: "Sneakers",
    price: 79.99,
    description: "Comfortable everyday sneakers with cushioned insoles.",
    features: [
      "Synthetic upper",
      "Rubber outsole",
      "Cushioned insole",
      "Lace-up closure",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Gray", "Red"],
    category: "Footwear",
    image: "/placeholder.svg?height=400&width=300&text=Sneakers",
  },
  "4": {
    id: 4,
    name: "Backpack",
    price: 39.99,
    description:
      "Durable backpack with multiple compartments for everyday use.",
    features: [
      "Water-resistant material",
      "Padded laptop sleeve",
      "Multiple pockets",
      "Adjustable straps",
    ],
    sizes: ["One Size"],
    colors: ["Black", "Navy", "Gray", "Green"],
    category: "Accessories",
    image: "/placeholder.svg?height=400&width=300&text=Backpack",
  },
};

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products[id];
}

export function getAllProducts(): Product[] {
  return Object.values(products);
}

export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter((product) => product.category === category);
}

export function getFeaturedProducts(count = 4): Product[] {
  return getAllProducts().slice(0, count);
}
