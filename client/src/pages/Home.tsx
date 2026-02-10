import { ArrowRight, Leaf, Droplets, Zap, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const areas = [
    {
      icon: Leaf,
      title: "Meio Ambiente e Florestas",
      description: "Atuamos em projetos ambientais, florestais e climáticos, apoiando o planeamento, monitoramento e avaliação ambiental.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: BarChart3,
      title: "Agricultura e Produção Rural",
      description: "Apoiamos agricultores e instituições no uso de tecnologia e dados para melhorar a produtividade e eficiência dos recursos.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Droplets,
      title: "Água e Recursos Hídricos",
      description: "Atuamos em projetos de abastecimento de água com foco em fiscalização, supervisão técnica e transparência.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Dados e Geotecnologias",
      description: "Aplicamos análise de dados e geotecnologias como apoio à tomada de decisão em projetos ambientais e agrícolas.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/HBeoTsGBXiLxMLTjN5WUcE/sandbox/n2XPbKaSjjXnBbjLrjYeWe-img-1_1770150596000_na1fn_aGVyby1hZ3JvZ2Vv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSEJlb1RzR0JYaUx4TUxUak41V1VjRS9zYW5kYm94L24yWFBiS2FTampYbkJiakxyalllV2UtaW1nLTFfMTc3MDE1MDU5NjAwMF9uYTFmbl9hR1Z5YnkxaFozSnZaMlZ2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kN7Q3FQLd8W3jXnwR9O4toAMaTNiTo3zC7tPydPhcjDlo7nUq2UFvKKjij-bIBazN2WgGYITtf5oQ7BbDJi4PPbXU15z7q88Kc79g9nH2dwsVgQVc9sWcTM0um2FmHqVM9SXwKbC0v6krV4Xqz~9PDNKe0ChU30bX5ULr0Af1tQNX2unk6o~~lczC8ndNi2MkV39jy7tjldaPVJhIpijJzpkZs3-xq-j84Zk5n-y9nhKkyL9tKd513TuSLncvBMCxwh~MiyZ6x5PCkonU0lY3UEqqpirbKzNEVKlv8Xl4Gb6x8Q3d93MkVq1OB4e03P1PhVGjZE~3zUmkRQOoAYqTA__')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative container mx-auto px-4 py-32 md:py-48">
            <div className="max-w-2xl">
              <h1 className="display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Soluções Inteligentes para Agricultura e Meio Ambiente
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Tecnologia, dados e experiência técnica aplicadas a projetos ambientais, agrícolas e hídricos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/areas">
                  <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 no-underline">
                    Conheça Nossas Áreas <ArrowRight size={20} />
                  </a>
                </Link>
                <Link href="/contacto">
                  <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30 no-underline">
                    Fale Connosco
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Sobre a AgroGeo Consulting
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                A AgroGeo Consulting é uma consultoria técnica independente, dedicada a apoiar projetos agrícolas, ambientais e hídricos, oferecendo soluções sustentáveis, eficientes e baseadas em dados. Combinamos conhecimento técnico, tecnologia e análise de dados para apoiar decisões seguras e eficientes.
              </p>
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 text-center">
              Áreas de Atuação
            </h2>
            <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
              Oferecemos expertise em múltiplas áreas complementares para atender às necessidades complexas de projetos sustentáveis
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent"
                  >
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-semibold text-secondary mb-3">
                      {area.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/areas">
                <a className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 no-underline">
                  Ver Todas as Áreas <ArrowRight size={20} />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Transformar Seu Projeto?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contacto connosco para discutir como podemos apoiar seus objetivos de sustentabilidade e eficiência.
            </p>
            <Link href="/contacto">
              <a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-secondary rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 no-underline">
                Iniciar Conversa <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
