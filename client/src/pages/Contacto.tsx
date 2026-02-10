import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    setEnviado(true);
    setTimeout(() => {
      setFormData({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
      setEnviado(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-accent">
          <div className="container mx-auto px-4">
            <h1 className="display text-5xl md:text-6xl font-bold text-white mb-6">
              Fale Connosco
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Estamos aqui para responder suas perguntas e discutir como podemos apoiar seu projeto.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Email</h3>
                      <a href="mailto:info@agrogeo.mz" className="text-foreground/70 hover:text-accent transition-colors">
                        info@agrogeo.mz
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Telefone</h3>
                      <a href="tel:+258843000000" className="text-foreground/70 hover:text-accent transition-colors">
                        +258 84 300 0000
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Localização</h3>
                      <p className="text-foreground/70">Moçambique</p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <Linkedin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">LinkedIn</h3>
                      <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                        AgroGeo Consulting
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
                  {enviado ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Mensagem Enviada!</h3>
                      <p className="text-foreground/70">Obrigado por entrar em contacto. Responderemos em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-secondary mb-2">
                            Nome Completo
                          </label>
                          <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-secondary mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-secondary mb-2">
                            Telefone
                          </label>
                          <input
                            type="tel"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                            placeholder="+258 84 XXX XXXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-secondary mb-2">
                            Assunto
                          </label>
                          <select
                            name="assunto"
                            value={formData.assunto}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                          >
                            <option value="">Selecione um assunto</option>
                            <option value="consultoria">Consultoria Ambiental</option>
                            <option value="agricultura">Agricultura de Precisão</option>
                            <option value="hidrica">Recursos Hídricos</option>
                            <option value="dados">Análise de Dados</option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          Mensagem
                        </label>
                        <textarea
                          name="mensagem"
                          value={formData.mensagem}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                          placeholder="Descreva sua necessidade ou pergunta..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
                      >
                        Enviar Mensagem
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
