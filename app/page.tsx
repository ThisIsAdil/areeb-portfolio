import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Projects />
      {/* <Testimonials /> */}
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
