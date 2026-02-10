import { Award, Users, Target, Zap } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sobre() {
  const valores = [
    {
      icon: Award,
      title: "Qualidade Técnica",
      description: "Fornecemos apoio técnico de qualidade, baseado em expertise e rigor profissional.",
    },
    {
      icon: Users,
      title: "Transparência",
      description: "Clareza na informação e comunicação transparente em todos os projetos.",
    },
    {
      icon: Target,
      title: "Sustentabilidade",
      description: "Foco em soluções sustentáveis e responsáveis ambientalmente.",
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Aplicação de tecnologia e dados para apoiar decisões eficientes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-accent">
          <div className="container mx-auto px-4">
            <h1 className="display text-5xl md:text-6xl font-bold text-white mb-6">
              Sobre a AgroGeo Consulting
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Conheça nossa história, missão e compromisso com a excelência técnica.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
                Quem Somos
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  A AgroGeo Consulting é uma consultoria técnica independente, dedicada a apoiar projetos agrícolas, ambientais e hídricos, oferecendo soluções sustentáveis, eficientes e baseadas em dados.
                </p>
                <p>
                  Atuamos no apoio a projetos de desenvolvimento sustentável, combinando conhecimento técnico, tecnologia e análise de dados para apoiar decisões seguras e eficientes. Nossa abordagem integra expertise técnica com ferramentas modernas de análise e monitoramento.
                </p>
                <p>
                  A consultoria é liderada por profissional com formação em Engenharia Florestal e experiência em projetos ambientais, agrícolas, hidráulicos e análise de dados, atuando em colaboração com consultores associados conforme a natureza de cada projeto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl border border-secondary/20">
                <h3 className="text-2xl font-bold text-secondary mb-4">Nossa Missão</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Fornecer apoio técnico de qualidade, clareza na informação e suporte confiável para a tomada de decisão em projetos ambientais, agrícolas e hídricos, contribuindo para o desenvolvimento sustentável e a eficiência operacional.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl border border-accent/20">
                <h3 className="text-2xl font-bold text-accent mb-4">Nossa Visão</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Ser referência em consultoria técnica independente para projetos de sustentabilidade, agricultura e recursos hídricos, reconhecida pela qualidade, inovação e impacto positivo nos projetos que apoiamos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <div
                    key={index}
                    className="p-8 bg-white rounded-xl border border-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {valor.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {valor.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Geographic Scope */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Área de Atuação Geográfica
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Atuamos em Moçambique, com possibilidade de apoio técnico remoto e presencial, conforme a natureza e localização dos projetos. Nossa experiência abrange diferentes contextos geográficos e climáticos, permitindo-nos adaptar nossas soluções às características específicas de cada região.
              </p>
              <div className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl border border-border">
                <p className="text-foreground/70 italic">
                  Estamos disponíveis para colaborações em projetos que alinhados com nossa missão de sustentabilidade e desenvolvimento técnico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quer Conhecer Melhor Nossa Equipe?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Visite a página de equipe para conhecer os profissionais por trás da AgroGeo Consulting.
            </p>
            <Link href="/equipe">
              <a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-secondary rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 no-underline">
                Conheça Nossa Equipe
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
