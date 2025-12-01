"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "10 Fashion Tips for Spring Season",
      date: "March 15, 2024",
      category: "Fashion",
      excerpt: "Discover the latest fashion trends and styling tips to refresh your wardrobe for the spring season.",
    },
    {
      title: "How to Care for Your Shoes Properly",
      date: "March 10, 2024",
      category: "Care & Maintenance",
      excerpt:
        "Learn the best practices for maintaining your footwear to ensure they last longer and stay in great condition.",
    },
    {
      title: "The Ultimate Guide to Building a Capsule Wardrobe",
      date: "March 5, 2024",
      category: "Fashion",
      excerpt:
        "Create a versatile and timeless wardrobe with our comprehensive guide to building a capsule collection.",
    },
    {
      title: "Sustainable Fashion: Making Eco-Friendly Choices",
      date: "February 28, 2024",
      category: "Sustainability",
      excerpt: "Explore how you can make environmentally conscious shopping decisions without compromising on style.",
    },
    {
      title: "Accessory Trends You Need to Know About",
      date: "February 20, 2024",
      category: "Accessories",
      excerpt: "Stay ahead of the curve with our latest accessory trends that are taking the fashion world by storm.",
    },
    {
      title: "Comfort Meets Style: The Best Casual Outfits",
      date: "February 15, 2024",
      category: "Style",
      excerpt:
        "Master the art of looking effortlessly stylish with our guide to comfortable and fashionable casual outfits.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">SimpleShop Blog</h1>
          <p className="text-lg text-orange-100">Fashion tips, style guides, and shopping inspiration</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link href="#" className="text-orange-600 hover:text-orange-700 font-semibold">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
