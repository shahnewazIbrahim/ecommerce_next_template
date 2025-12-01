"use client"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-orange-100">Last updated: March 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl prose prose-sm">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using SimpleShop, you accept and agree to be bound by the terms and provision of this
            agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on
            SimpleShop for personal, non-commercial transitory viewing only. This is the grant of a license, not a
            transfer of title.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on SimpleShop are provided "as is." SimpleShop makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall SimpleShop or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption).
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on SimpleShop could include technical, typographical, or photographic errors.
            SimpleShop does not warrant that any of the materials on our website are accurate, complete, or current.
          </p>

          <h2>6. Links</h2>
          <p>
            SimpleShop has not reviewed all of the sites linked to our website and is not responsible for the contents
            of any such linked site. The inclusion of any link does not imply endorsement by SimpleShop of the site.
          </p>

          <h2>7. Modifications</h2>
          <p>
            SimpleShop may revise these terms of service for our website at any time without notice. By using this
            website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States.
          </p>
        </div>
      </div>
    </div>
  )
}
