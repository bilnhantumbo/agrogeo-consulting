import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <>
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-full w-64 bg-background border-r border-border p-6 z-50">
        
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 mb-10 no-underline">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">AG</span>
            </div>
            <div>
              <div className="font-display text-lg font-bold text-secondary">AgroGEO</div>
              <div className="text-xs text-muted-foreground">Consulting</div>
            </div>
          </a>
        </Link>

        {/* Menu vertical */}
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-foreground hover:text-accent transition-colors font-medium no-underline">
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Botão */}
        <div className="mt-auto">
          <Link href="/contacto">
            <a className="block text-center px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-opacity-90 transition-all no-underline">
              Fale Connosco
            </a>
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between px-4 py-4">
          
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 no-underline">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">AG</span>
              </div>
              <span className="font-bold text-secondary">AgroGEO</span>
            </a>
          </Link>

          {/* Botão menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="px-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="py-2 no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}