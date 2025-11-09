export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-foreground font-semibold mb-1">Areeb Design</p>
            <p className="text-foreground/60 text-sm">Creating visuals that get clicks</p>
          </div>

          <div className="flex gap-6">
            {["Privacy", "Terms", "Impressum"].map((link) => (
              <a key={link} href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-foreground/40 text-sm">
          <p>© 2025 Areeb Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
