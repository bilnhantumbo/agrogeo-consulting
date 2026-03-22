import { ArrowRight, Leaf, Droplets, Zap, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
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
      <main className="flex-1">
        
        {/* ANIMAÇÃO GLOBAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <img src="/logo.png" alt="Logo" className="max-w-2xl w-full" />
            </div>

            <div className="relative container mx-auto px-4 md:px-8 py-20 md:py-28">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Soluções Inteligentes para Agricultura, Água e Meio Ambiente
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Tecnologia, dados e experiência técnica aplicadas a projetos ambientais, agrícolas e hídricos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/areas">
                    <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all no-underline">
                      Conheça Nossas Áreas <ArrowRight size={20} />
                    </a>
                  </Link>

                  <Link href="/contacto">
                    <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30 no-underline">
                      Fale Connosco
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SOBRE */}
          <motion.section
            className="py-14 md:py-20 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
                  Sobre a AgroGeo Consulting
                </h2>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  A AgroGeo Consulting é uma consultoria técnica independente, dedicada a apoiar projetos agrícolas, ambientais e hídricos, oferece soluções sustentáveis, eficientes e baseadas em dados.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ÁREAS */}
          <motion.section
            className="py-14 md:py-20 bg-background"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 text-center">
                Áreas de Atuação
              </h2>

              <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
                Oferecemos expertise em múltiplas áreas complementares
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {areas.map((area, index) => {
                  const Icon = area.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-border hover:border-accent"
                    >
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center mb-6`}>
                        <Icon className="text-white" size={28} />
                      </div>

                      <h3 className="text-xl font-semibold text-secondary mb-3">
                        {area.title}
                      </h3>

                      <p className="text-foreground/70 leading-relaxed">
                        {area.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            className="py-14 md:py-20 bg-gradient-to-r from-secondary to-accent text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pronto para Transformar Seu Projeto?
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-8">
                Entre em contacto connosco para discutir como podemos ajudar.
              </p>

              <Link href="/contacto">
                <a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-secondary rounded-lg font-semibold hover:bg-opacity-90 transition-all no-underline">
                  Iniciar Conversa <ArrowRight size={20} />
                </a>
              </Link>
            </div>
          </motion.section>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
}