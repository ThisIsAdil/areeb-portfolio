"use client"

import Image from "next/image"
import { useState } from "react"

const projectsData = [
  {
    id: 1,
    title: "The Hit Show",
    image: "/portfolio-1.jpg",
    description: "Minecraft gaming show thumbnails",
  },
  {
    id: 2,
    title: "Secret",
    image: "/portfolio-2.jpg",
    description: "Mystery-themed YouTube thumbnails",
  },
  {
    id: 3,
    title: "Whole Server",
    image: "/portfolio-3.jpg",
    description: "SMP series thumbnail designs",
  },
  {
    id: 4,
    title: "PvP Legends",
    image: "/portfolio-4.jpg",
    description: "Competitive gaming thumbnails",
  },
  {
    id: 5,
    title: "Me vs Ender Dragon",
    image: "/portfolio-5.jpg",
    description: "Epic Minecraft boss battle thumbnails",
  },
  {
    id: 6,
    title: "1 vs Many Fight",
    image: "/portfolio-6.jpg",
    description: "Dynamic poster design for gaming event",
  },
  {
    id: 7,
    title: "Grow Your Channel",
    image: "/portfolio-7.jpg",
    description: "YouTube channel growth tips thumbnails",
  },
  {
    id: 9,
    title: "Restaurant Vlog Thumbnails",
    category: "YouTube Thumbnails",
    image: "/portfolio-9.jpg",
    description: "Eye-catching thumbnails for restaurant vlogging channel",
  },
  {
    id: 10,
    title: "Food Blogger Branding",
    category: "Channel Pack",
    image: "/portfolio-10.jpeg",
    description: "Complete visual identity for food blogging channel",
  }
]

export default function Projects() {


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
                <h3 className="text-sm text-accent font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/60">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/_areeb_designs_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
          >
            View more samples on Instagram
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
