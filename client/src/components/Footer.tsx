import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="font-display text-2xl font-bold mb-4">AgroGeo</div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Soluções inteligentes para agricultura, meio ambiente e recursos hídricos.
            </p>
            <p className="text-xs text-secondary-foreground/60">
              © 2026 AgroGeo Consulting. Todos os direitos reservados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-accent transition-colors">Inicial</a></li>
              <li><a href="/areas" className="hover:text-accent transition-colors">Áreas de Atuação</a></li>
              <li><a href="/servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="/sobre" className="hover:text-accent transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/servicos" className="hover:text-accent transition-colors">Consultoria Ambiental</a></li>
              <li><a href="/servicos" className="hover:text-accent transition-colors">Agricultura de Precisão</a></li>
              <li><a href="/servicos" className="hover:text-accent transition-colors">Recursos Hídricos</a></li>
              <li><a href="/servicos" className="hover:text-accent transition-colors">Geotecnologia</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@agrogeo.mz" className="hover:text-accent transition-colors">
                  info@agrogeo.mz
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+258843000000" className="hover:text-accent transition-colors">
                  +258 84 300 0000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="#" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-xs text-secondary-foreground/70">
            <strong>Disclaimer Legal:</strong> A AgroGeo Consulting atua como consultoria técnica independente, não executando obras nem assumindo responsabilidade direta pela execução física dos projetos, a qual é de responsabilidade dos empreiteiros contratados.
          </p>
        </div>
      </div>
    </footer>
  );
}
