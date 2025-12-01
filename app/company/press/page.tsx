"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper } from "lucide-react"

export default function PressPage() {
  const releases = [
    {
      title: "SimpleShop Announces 50,000+ Customer Milestone",
      date: "March 2024",
      excerpt:
        "The online retailer celebrates reaching a significant customer base milestone as it continues its rapid expansion.",
    },
    {
      title: "New Product Categories Launch in Global Markets",
      date: "February 2024",
      excerpt:
        "SimpleShop expands its offerings with new fashion and lifestyle categories to meet diverse customer needs.",
    },
    {
      title: "SimpleShop Launches Sustainability Initiative",
      date: "January 2024",
      excerpt: "Company commits to eco-friendly packaging and carbon-neutral shipping for all orders starting 2024.",
    },
    {
      title: "Record Breaking Black Friday Sales",
      date: "December 2023",
      excerpt: "SimpleShop reports 300% increase in sales during annual Black Friday and Cyber Monday events.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Press Center</h1>
          <p className="text-lg text-orange-100">Latest news and press releases from SimpleShop</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Latest Press Releases</h2>
          <div className="grid gap-6">
            {releases.map((release, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Newspaper className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle>{release.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{release.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{release.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle>Media Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              For press inquiries, interview requests, or to receive our latest press releases, please contact our media
              relations team.
            </p>
            <p className="text-muted-foreground">Email: press@simpleshop.com</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
