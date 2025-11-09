export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Areeb completely transformed my channel's thumbnail game. Within a month, my CTR jumped 35%. Highly recommended!",
      author: "Alex Johnson",
      role: "Tech YouTuber",
      avatar: "/professional-avatar-1.jpg",
    },
    {
      id: 2,
      text: "The poster designs helped us sell out our first event. The quality and attention to detail were exceptional.",
      author: "Sarah Chen",
      role: "Event Organizer",
      avatar: "/professional-avatar-2.jpg",
    },
    {
      id: 3,
      text: "Working with Areeb was seamless. Fast turnarounds, incredible creativity, and exactly what we needed for our brand launch.",
      author: "Marcus Rodriguez",
      role: "Startup Founder",
      avatar: "/professional-avatar-3.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Real testimonials from creators and businesses who've transformed their visuals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-background border border-border rounded-lg hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
