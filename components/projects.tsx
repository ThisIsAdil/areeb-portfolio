"use client"

import Image from "next/image"
import { useState } from "react"

const projectsData = [
  {
    id: 1,
    title: "Tech Creator Series",
    category: "YouTube Thumbnails",
    image: "/vibrant-tech-thumbnail.jpg",
    description: "High-engagement thumbnails for a tech review channel",
  },
  {
    id: 2,
    title: "Gaming Channel Branding",
    category: "Channel Pack",
    image: "/gaming-channel-branding.jpg",
    description: "Complete visual identity for gaming content creator",
  },
  {
    id: 3,
    title: "Music Producer Posters",
    category: "Posters & Graphics",
    image: "/music-producer-poster.jpg",
    description: "Event promotion posters for music production brand",
  },
  {
    id: 4,
    title: "Business Startup Pack",
    category: "Social Media Graphics",
    image: "/business-startup-graphics.jpg",
    description: "Cohesive social media content calendar design",
  },
  {
    id: 5,
    title: "Education Channel Series",
    category: "YouTube Thumbnails",
    image: "/education-channel-thumbnail.jpg",
    description: "Engaging educational content thumbnails",
  },
  {
    id: 6,
    title: "Lifestyle Influencer Pack",
    category: "Channel Pack",
    image: "/lifestyle-influencer-pack.jpg",
    description: "Complete branding for lifestyle content creator",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            A showcase of high-performing designs that helped creators and businesses stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href="#"
              className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:border-accent/50"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <p className="text-sm text-accent font-semibold mb-2">{project.category}</p>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-foreground/60">{project.description}</p>
              </div>

              {hoveredId === project.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg animate-in fade-in duration-200">
                  <span className="text-white font-semibold">View Case Study</span>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
          >
            View full portfolio on Behance
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l4-4m0 0l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
