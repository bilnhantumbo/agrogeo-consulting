import { ArrowRight, Leaf, Droplets, Zap, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Areas() {
  const areas = [
    {
      icon: Leaf,
      title: "Meio Ambiente e Florestas",
      description: "Atuamos em projetos ambientais, florestais e climáticos, apoiando o planeamento, monitoramento e avaliação ambiental. Trabalhamos com foco em sustentabilidade, reflorestamento, adaptação às mudanças climáticas e apoio técnico a projetos financiados por ONGs e instituições.",
      color: "from-green-500 to-emerald-600",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/HBeoTsGBXiLxMLTjN5WUcE/sandbox/n2XPbKaSjjXnBbjLrjYeWe-img-2_1770150597000_na1fn_ZW52aXJvbm1lbnQtc2VjdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSEJlb1RzR0JYaUx4TUxUak41V1VjRS9zYW5kYm94L24yWFBiS2FTampYbkJiakxyalllV2UtaW1nLTJfMTc3MDE1MDU5NzAwMF9uYTFmbl9aVzUyYVhKdmJtMWxiblF0YzJWamRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lEqgZCHNPJ4MDwJwoAl4x728~Ccey3eRAdEW0ATVlveSmKGXWUaNmlldeQVYozkLGFxTDm7dm-AHN2qA2P4JlUS0sFRqsfgWi-8Vx7zceQ6ZeMu-jLPk1C5b8YU6aczRdzh16aTO2FQmTBP4MX0FW-n-8L9mCe8i3cAxAzYyxkFiBaR4IYdvSDIOvwJ2iUtjMmheD5LYXLSydosCelTZ2sZhgVhoCUTxIZP--DeNDG2PsNdL41ZyGp8EiQMKo0v8k3N0V6W9DUK6AlUVfRLtbKW7rlDgDcORlHK6ytoraiPKdiBXO6IWU2CqOlfunQwQBkhmGWNTTtTNGBlWsC13mA__",
    },
    {
      icon: BarChart3,
      title: "Agricultura e Produção Rural",
      description: "Apoiamos agricultores, projetos agrícolas e instituições no uso de tecnologia e dados para melhorar a produtividade, o uso eficiente dos recursos e o acompanhamento técnico das culturas, com foco em agricultura de precisão.",
      color: "from-amber-500 to-orange-600",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/HBeoTsGBXiLxMLTjN5WUcE/sandbox/n2XPbKaSjjXnBbjLrjYeWe-img-1_1770150596000_na1fn_aGVyby1hZ3JvZ2Vv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSEJlb1RzR0JYaUx4TUxUak41V1VjRS9zYW5kYm94L24yWFBiS2FTampYbkJiakxyalllV2UtaW1nLTFfMTc3MDE1MDU5NjAwMF9uYTFmbl9hR1Z5YnkxaFozSnZaMlZ2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kN7Q3FQLd8W3jXnwR9O4toAMaTNiTo3zC7tPydPhcjDlo7nUq2UFvKKjij-bIBazN2WgGYITtf5oQ7BbDJi4PPbXU15z7q88Kc79g9nH2dwsVgQVc9sWcTM0um2FmHqVM9SXwKbC0v6krV4Xqz~9PDNKe0ChU30bX5ULr0Af1tQNX2unk6o~~lczC8ndNi2MkV39jy7tjldaPVJhIpijJzpkZs3-xq-j84Zk5n-y9nhKkyL9tKd513TuSLncvBMCxwh~MiyZ6x5PCkonU0lY3UEqqpirbKzNEVKlv8Xl4Gb6x8Q3d93MkVq1OB4e03P1PhVGjZE~3zUmkRQOoAYqTA__",
    },
    {
      icon: Droplets,
      title: "Água e Recursos Hídricos",
      description: "Atuamos em projetos de abastecimento de água e recursos hídricos, com foco em fiscalização, supervisão técnica, acompanhamento da execução e apoio técnico à gestão e transparência dos projetos.",
      color: "from-blue-500 to-cyan-600",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/HBeoTsGBXiLxMLTjN5WUcE/sandbox/n2XPbKaSjjXnBbjLrjYeWe-img-3_1770150599000_na1fn_d2F0ZXItcmVzb3VyY2Vz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSEJlb1RzR0JYaUx4TUxUak41V1VjRS9zYW5kYm94L24yWFBiS2FTampYbkJiakxyalllV2UtaW1nLTNfMTc3MDE1MDU5OTAwMF9uYTFmbl9kMkYwWlhJdGNtVnpiM1Z5WTJWei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=h0S2VUHCtsO2lH0eBckshyOdOCzlBpNnY9-nEarvg~VjsJ~ed11eCM7S5tNGg77Y790vqSw4cKmltKc-0fyYIJoyFJGNO4VF7uhMPgbVY7~B902liUiZfO6Tz3wci4C35cEiLKzzyNnf1BeZ-E66yovRW78GhwVgLiP-oSVpcq5OCw24Gro4U0sqPhBRZkWreN3kxmHhwQrHKjToRhq9LK7F3ZKuCCXV~H4h7MZcsethgLY1YOV3MklaqqIw5fMgVLQQmDZERXQrTemRKDnVevD9Z00tOYpAsG9S5cgdy5vVOp-Sev4D0FvMxMmvGgMnkp~vqwai~E8MCR24bm4~nw__",
    },
    {
      icon: Zap,
      title: "Dados e Geotecnologias",
      description: "Aplicamos análise de dados, geotecnologias e desenvolvimento de ferramentas digitais como apoio à tomada de decisão em projetos ambientais, agrícolas e hídricos. Integramos tecnologia e conhecimento técnico para transformar dados em informação útil.",
      color: "from-indigo-500 to-purple-600",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/HBeoTsGBXiLxMLTjN5WUcE/sandbox/n2XPbKaSjjXnBbjLrjYeWe-img-4_1770150603000_na1fn_Z2VvdGVjaG5vbG9neS1kYXRh.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSEJlb1RzR0JYaUx4TUxUak41V1VjRS9zYW5kYm94L24yWFBiS2FTampYbkJiakxyalllV2UtaW1nLTRfMTc3MDE1MDYwMzAwMF9uYTFmbl9aMlZ2ZEdWamFHNXZiRzluZVMxa1lYUmgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TzNjmz6~1UeHsNkg6OMPE8K1vGhPYrEellJQQbYhiHotJsUw2SGjaaV6riS2OqJTo3kgCd7C-ZVIdeI1UIv6VYG1hmfuwsX7xzwUjZlawZKRHHqgIkEQliJ5ehuV2lxkvYIPYrt4BTvGsJCyqA-mQcvB1rlzVXQPKzuY0A~l9jLIsnCBFCbk92JXjuWjEQWHpgArtNmWCNxnY4jUR-srS5MKRbN5mPcI0zb-ratCHI1wRDpETF1bhyStCm6a7td1MYPyakc26y5eNNBqGz67lPc7qBeDQ5nX2hV3PigXA5wRhNY1aMGgYGNJKcaymEI8mZZAulbyNbxcWf4uau8DNg__",
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
              Áreas de Atuação
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Oferecemos expertise em múltiplas áreas complementares para atender às necessidades complexas de projetos sustentáveis.
            </p>
          </div>
        </section>

        {/* Areas Details */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {areas.map((area, index) => {
              const Icon = area.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="mb-20 last:mb-0">
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? "md:grid-flow-dense" : ""}`}>
                    {/* Image */}
                    <div className={isEven ? "" : "md:col-start-2"}>
                      <div className="relative rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
                        <img
                          src={area.image}
                          alt={area.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-20`}></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? "" : "md:col-start-1"}>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        {area.title}
                      </h2>
                      <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                        {area.description}
                      </p>
                      <Link href="/servicos">
                        <a className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 no-underline">
                          Ver Serviços <ArrowRight size={20} />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tem um Projeto em Mente?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contacto connosco para discutir como podemos apoiar seus objetivos.
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
