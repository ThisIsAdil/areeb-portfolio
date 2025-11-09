"use client"

import { useState } from "react"

export default function Services() {
  const [selectedService, setSelectedService] = useState(0)

  const services = [
    {
      id: 0,
      title: "Single Thumbnail",
      price: "$50",
      description: "Perfect for testing or one-off projects",
      features: [
        "High-impact custom design",
        " 2 revision rounds",
        "Fast 48-hour turnaround",
        "High-res PNG & source file",
      ],
    },
    {
      id: 1,
      title: "Channel Pack",
      price: "$400",
      description: "Complete visual identity for your channel",
      features: [
        "10 custom thumbnails",
        "Channel banner & profile picture",
        "Intro/outro graphics",
        "Unlimited revisions",
        "5-day turnaround",
        "Quarterly updates",
      ],
      popular: true,
    },
    {
      id: 2,
      title: "Poster Design",
      price: "$150",
      description: "Eye-catching print or digital posters",
      features: [
        "Custom poster design",
        "Multiple size formats",
        "3 revision rounds",
        "Print-ready files",
        "72-hour turnaround",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Services & Pricing</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Flexible packages designed for creators at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`relative p-8 rounded-lg border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                service.popular
                  ? "md:scale-105 bg-accent/10 border-accent ring-2 ring-accent/20"
                  : "bg-background border-border hover:border-accent/50"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-4xl font-bold text-accent mb-1">{service.price}</p>
              <p className="text-foreground/60 text-sm mb-6">{service.description}</p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 text-center ${
                  service.popular
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "border border-foreground/20 text-foreground hover:bg-foreground/5"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
