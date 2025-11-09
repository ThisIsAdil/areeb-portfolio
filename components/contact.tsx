"use client"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Create Together</h2>
        <p className="text-foreground/70 text-lg mb-8">
          Ready to bring your vision to life? Reach out and let's collaborate.
        </p>

        <div className="bg-card border border-border rounded-lg p-8 mb-12">
          <p className="text-foreground/60 mb-3">Get in touch:</p>
          <a
            href="mailto:areeb@example.com"
            className="inline-block text-2xl font-semibold text-accent hover:underline transition-colors"
          >
            areeb@example.com
          </a>
        </div>

        <div className="pt-8 border-t border-border space-y-4">
          <p className="text-foreground/60">Or connect on social</p>
          <div className="flex justify-center gap-6">
            {[
              { name: "Behance", icon: "🎨", url: "#" },
              { name: "Instagram", icon: "📸", url: "#" },
              { name: "X", icon: "𝕏", url: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-foreground/60 hover:text-accent transition-colors text-2xl"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
