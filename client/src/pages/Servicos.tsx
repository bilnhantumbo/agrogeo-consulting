import { CheckCircle2, Leaf, Zap, Droplets, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Servicos() {
  const servicos = [
    {
      icon: Leaf,
      title: "Consultoria Ambiental e Florestal",
      description: "Apoiamos projetos ambientais e florestais desde o planeamento até o monitoramento, oferecendo análises técnicas confiáveis para ONGs, instituições e financiadores.",
      items: [
        "Monitoramento de reflorestamento e sobrevivência de mudas",
        "Delimitação e avaliação de áreas ambientais",
        "Análise de uso e cobertura da terra",
        "Monitoramento de degradação ambiental",
        "Apoio técnico a projetos climáticos e ambientais",
        "Elaboração de relatórios técnicos ambientais",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Agricultura de Precisão e Monitoramento por Drone",
      description: "Utilizamos drones e análise de imagens para apoiar decisões agrícolas e o acompanhamento técnico das culturas.",
      items: [
        "Detecção de falhas de plantio",
        "Monitoramento do desenvolvimento das culturas",
        "Delimitação e medição de áreas agrícolas",
        "Zoneamento visual de lavouras",
        "Apoio técnico ao manejo agrícola baseado em dados",
      ],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Droplets,
      title: "Consultoria e Fiscalização Hidráulica",
      description: "Prestamos serviços de fiscalização e supervisão técnica de projetos hidráulicos, assegurando qualidade, conformidade com os projetos aprovados e transparência na execução das obras.",
      items: [
        "Fiscalização e supervisão técnica de obras de abastecimento de água",
        "Acompanhamento da execução de projetos hidráulicos",
        "Verificação de conformidade com os projetos",
        "Controle de qualidade dos trabalhos",
        "Conferência de materiais e componentes",
        "Elaboração de relatórios técnicos de progresso",
        "Medições de obra e validação de quantidades executadas",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: BarChart3,
      title: "Análise de Dados, Modelagem e Soluções Digitais",
      description: "Desenvolvemos e aplicamos soluções baseadas em dados para apoiar decisões técnicas e estratégicas.",
      items: [
        "Análise de dados ambientais, agrícolas e hídricos",
        "Processamento de imagens de drones e satélite",
        "Modelagem e estimativas técnicas",
        "Desenvolvimento de ferramentas e aplicações de apoio à decisão",
        "Automação de análises e relatórios técnicos",
        "Apoio técnico a projetos de pesquisa aplicada",
      ],
      color: "from-indigo-500 to-purple-600",
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
              Nossos Serviços
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Oferecemos uma gama completa de serviços técnicos especializados para apoiar seus projetos.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {servicos.map((servico, index) => {
                const Icon = servico.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${servico.color} flex items-center justify-center mb-6`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">
                      {servico.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {servico.description}
                    </p>
                    <div className="space-y-3">
                      {servico.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                          <span className="text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center">
              Tecnologia e Ferramentas
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Drones", description: "Para monitoramento ambiental e agrícola de alta precisão" },
                { title: "Análise de Imagens", description: "Processamento de dados geoespaciais e de satélite" },
                { title: "Modelagem Técnica", description: "Estimativas e simulações baseadas em dados" },
                { title: "Dashboards Interativos", description: "Relatórios técnicos, mapas e ferramentas de visualização" },
              ].map((tech, index) => (
                <div key={index} className="p-6 bg-background rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-secondary mb-2">{tech.title}</h3>
                  <p className="text-foreground/70">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contacto connosco para discutir qual serviço melhor se adequa às suas necessidades.
            </p>
            <Link href="/contacto">
              <a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-secondary rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 no-underline">
                Solicitar Orçamento
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
