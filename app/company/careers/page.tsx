"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Customer Service Specialist",
      department: "Support",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      title: "Marketing Coordinator",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Warehouse Associate",
      department: "Operations",
      location: "New Jersey, NJ",
      type: "Full-time",
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg text-orange-100">Help us deliver exceptional experiences to our customers</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Work at SimpleShop?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Competitive Benefits</h3>
                <p className="text-muted-foreground text-sm">Health insurance, 401k, and generous PTO</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground text-sm">Career development and professional training</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Inclusive Culture</h3>
                <p className="text-muted-foreground text-sm">Diverse, welcoming, and collaborative team</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
          <div className="grid gap-4">
            {jobs.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        {job.title}
                      </CardTitle>
                      <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{job.department}</span>
                        <span>{job.location}</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">{job.type}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
