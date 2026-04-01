import { Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Equipe() {
  const equipe = [
    {
      nome: "Bilton Gilberto Nhantumbo",
      cargo: "",
      descricao: `PhD em Engenharia Florestal
Mestre em Engenharia Agrícola e Ambiental
Licenciado em Engenharia Hidráulica Agrícola e Água Rural`,
      especializacoes: [],
    },
    {
      nome: "Nélia Dalúvia Rafael Cambanhane",
      cargo: "",
      descricao: `PhD em Agronomia e Ciência Do Solo
Mestra em Engenharia Agrícola e Ambiental
Licenciada em Engenharia Hidráulica Agrícola e Água Rural`,
      especializacoes: [],
    },
    {
      nome: "Inácio Alfredo Chauque",
      cargo: "",
      descricao: `Mestre em Mudanças Climáticas e Gestão de Recursos Naturais
Licenciado em Engenharia Hidráulica Agrícola e Água Rural`,
      especializacoes: [],
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
              Nossa Equipe
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Equipe técnica com formação sólida e reconhecimento académico.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {equipe.map((membro, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border h-full flex flex-col"
                >
                  {/* Member Header */}
                  <div className="h-20 bg-gradient-to-r from-secondary to-accent"></div>

                  {/* Member Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      {membro.nome}
                    </h3>

                    {membro.cargo && (
                      <p className="text-accent font-semibold mb-6">
                        {membro.cargo}
                      </p>
                    )}

                    <div className="text-foreground/80 leading-relaxed whitespace-pre-line mb-6 flex-1">
                      {membro.descricao}
                    </div>

                    {/* Contact */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <a
                        href="mailto:info@agrogeo.mz"
                        className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Associates Info */}
            <div className="mt-16 max-w-4xl mx-auto p-8 bg-white rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Consultores Associados
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Trabalhamos com uma rede estratégica de consultores especializados,
                acionados conforme a natureza e complexidade de cada projeto,
                garantindo sempre elevado rigor técnico e científico.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Colaborar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contacto connosco para discutir como a AgroGeo Consulting
              pode apoiar tecnicamente o seu projeto.
            </p>
            <Link href="/contacto">
              <a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-secondary rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 no-underline">
                Fale Connosco
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}