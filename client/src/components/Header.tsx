import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicial", href: "/" },
    { label: "Áreas de Atuação", href: "/areas" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Equipe", href: "/equipe" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 no-underline">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">AG</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold text-secondary">AgroGEO</div>
              <div className="text-xs text-muted-foreground">Consulting</div>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-foreground hover:text-accent transition-colors duration-200 font-medium text-sm">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/contacto">
          <a className="hidden md:inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 no-underline">
            Fale Connosco
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-foreground hover:text-accent transition-colors py-2 no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contacto">
              <a
                className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-center no-underline"
                onClick={() => setIsOpen(false)}
              >
                Fale Connosco
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
