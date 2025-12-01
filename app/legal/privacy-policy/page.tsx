"use client"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-orange-100">Last updated: March 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl prose prose-sm">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, make a purchase, or
            contact our customer service team. This includes your name, email address, shipping address, payment
            information, and any messages you send to us.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to process your orders, provide customer support, send promotional
            communications (if you've opted in), and improve our services. We do not sell your personal information to
            third parties.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We may share your information with third-party service providers who assist us in operating our website and
            conducting our business, such as payment processors and shipping carriers. These providers are bound by
            confidentiality agreements.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. However, no method of
            transmission over the internet is completely secure. We cannot guarantee absolute security.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your experience and gather website usage analytics. You can control
            cookie settings through your browser.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Please contact us at
            privacy@simpleshop.com to exercise these rights.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@simpleshop.com or call +1
            (555) 123-4567.
          </p>
        </div>
      </div>
    </div>
  )
}
