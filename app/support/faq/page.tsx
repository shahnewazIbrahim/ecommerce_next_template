"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQPage() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days. International orders take 10-15 business days.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all items. Items must be unused and in original packaging. Return shipping is free for most items.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by location and are calculated at checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email that you can use to track your package in real-time.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.",
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use industry-standard SSL encryption to protect your personal and payment information.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team via email at support@simpleshop.com or call +1 (555) 123-4567 during business hours.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "If your order hasn't shipped yet, you can cancel it within 2 hours of purchase. Contact support for assistance.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-orange-100">Find answers to common questions about our products and services</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle>Didn't find what you're looking for?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our support team is here to help! Contact us at support@simpleshop.com or call +1 (555) 123-4567.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
