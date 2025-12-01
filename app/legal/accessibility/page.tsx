"use client"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-lg text-orange-100">Our commitment to digital accessibility</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl prose prose-sm">
          <h2>1. Our Commitment</h2>
          <p>
            SimpleShop is committed to ensuring digital accessibility for people with disabilities. We are continually
            improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2>2. Accessibility Features</h2>
          <ul>
            <li>Alternative text for images</li>
            <li>Keyboard navigation support</li>
            <li>High contrast mode compatibility</li>
            <li>Screen reader optimization</li>
            <li>Resizable text and fonts</li>
            <li>Clear and simple language</li>
          </ul>

          <h2>3. WCAG Compliance</h2>
          <p>
            Our website aims to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. We
            regularly test our website for accessibility issues and make improvements based on user feedback.
          </p>

          <h2>4. Accessibility Tools</h2>
          <p>
            We provide several tools to help users with disabilities navigate our website, including keyboard shortcuts,
            adjustable text size, and screen reader support.
          </p>

          <h2>5. Known Issues</h2>
          <p>
            While we strive for complete accessibility, some third-party content or functionality may not fully comply
            with accessibility standards. We are working to address these issues.
          </p>

          <h2>6. Report Accessibility Issues</h2>
          <p>
            If you encounter any accessibility barriers while using our website, please contact us at
            accessibility@simpleshop.com. We value your feedback and will work to resolve any issues.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            For accessibility-related questions or concerns, please reach out to our accessibility team at
            accessibility@simpleshop.com or call +1 (555) 123-4567.
          </p>
        </div>
      </div>
    </div>
  )
}
