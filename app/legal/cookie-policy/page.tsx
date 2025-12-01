"use client"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg text-orange-100">Last updated: March 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl prose prose-sm">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They allow websites to
            recognize your device and remember information about your visit.
          </p>

          <h2>2. Why We Use Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience, remember your preferences, understand how you use our
            website, and provide personalized recommendations. This helps us deliver a better service to you.
          </p>

          <h2>3. Types of Cookies We Use</h2>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Required for basic website functionality
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand how visitors interact with our website
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your preferences and settings
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Track your activity for advertising purposes
            </li>
          </ul>

          <h2>4. Third-Party Cookies</h2>
          <p>
            Some cookies come from third parties, such as analytics providers and advertising networks. These third
            parties may use cookies to track your behavior across multiple websites.
          </p>

          <h2>5. Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert
            you when cookies are being sent. However, blocking cookies may affect your ability to use our website fully.
          </p>

          <h2>6. Contact Us</h2>
          <p>If you have questions about our use of cookies, please contact us at privacy@simpleshop.com.</p>
        </div>
      </div>
    </div>
  )
}
