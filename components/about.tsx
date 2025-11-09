export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About</h2>
        </div>

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            Hey, I'm Areeb. I've spent the last 5+ years obsessed with visual design—specifically, what makes people
            click, watch, and engage.
          </p>

          <p>
            I started by creating thumbnails for my own YouTube channel, and I quickly realized that great design isn't
            just about looking good—it's about driving results. Since then, I've helped 200+ creators and businesses
            craft visuals that perform.
          </p>

          <p>
            My design philosophy is simple: every pixel has a purpose. Whether it's a YouTube thumbnail, poster, or
            social media graphic, I focus on creating designs that grab attention, communicate clearly, and compel
            action.
          </p>

          <p>
            When I'm not designing, you'll find me analyzing design trends, experimenting with new techniques, or
            nerding out about color psychology. Let's create something extraordinary together.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { number: "200+", label: "Projects Completed" },
            { number: "50+", label: "Active Clients" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.number}</p>
              <p className="text-foreground/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
