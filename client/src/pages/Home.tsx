import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart3, Building2, CheckCircle2, ChevronRight, Clock, FileText, Headphones, ShieldCheck, TrendingUp, Users, Star, Quote } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [planCategory, setPlanCategory] = useState<"servicos" | "comercio">("servicos");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    state: "",
    contact: "whatsapp"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section - Obvia Style (Colorido) + Agilize Style (Depoimento) */}
        <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-r from-primary via-primary to-secondary">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-white">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
                  Contabilidade Digital Inteligente
                </div>
                
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  a Crescit existe para melhorar a vida de quem tem CNPJ!
                </h1>
                
                <div className="space-y-4 text-lg text-white/90">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                    <span>A contabilidade completa para o seu CNPJ</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                    <span>+ de 50% de economia mensal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
                    <span>Suporte por WhatsApp, Telefone, Chat e E-mail</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 h-14 rounded-full shadow-lg transition-all hover:scale-105">
                    Abra sua empresa agora
                  </Button>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 h-14 rounded-full shadow-lg transition-all hover:scale-105">
                    Troque de contabilidade em 24h
                  </Button>
                </div>
              </div>

              {/* Testimonial Card - Agilize Style */}
              <div className="lg:pl-8">
                <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg text-slate-700 font-medium leading-relaxed">
                      "Com a a Crescit, consegui reduzir meus impostos em mais de 40% e ainda ganhei tempo para focar no meu negócio. O atendimento é excelente!"
                    </blockquote>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                      <div>
                        <p className="font-bold text-slate-900">Maria Silva</p>
                        <p className="text-sm text-slate-600">Empreendedora, Cliente desde 2023</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Proposição de Valor - Seção Estratégica */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    Deixe a burocracia com a gente.
                  </h2>
                  <p className="text-lg text-slate-600 font-medium">
                    Resolvemos tudo, desde a abertura do CNPJ até o dia a dia da sua contabilidade.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                          <CheckCircle2 className="h-5 w-5 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">Empresa regularizada</h3>
                        <p className="text-slate-600">Sem multas indesejadas</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                          <CheckCircle2 className="h-5 w-5 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">Economia no pagamento</h3>
                        <p className="text-slate-600">Redução de impostos</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                          <CheckCircle2 className="h-5 w-5 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">Suporte especializado</h3>
                        <p className="text-slate-600">Contadores especialistas à sua disposição</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                          <CheckCircle2 className="h-5 w-5 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">Atendimento humanizado</h3>
                        <p className="text-slate-600">100% online e sempre disponível</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 h-14 rounded-full shadow-lg transition-all hover:scale-105">
                      Troque de contador
                    </Button>
                    <p className="text-xs text-slate-500 mt-3">*Consulte condições</p>
                  </div>
                </div>

                <div className="relative hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
                  <div className="relative p-8 text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center shadow-lg">
                      <FileText className="text-white" size={64} />
                    </div>
                    <p className="mt-8 text-slate-700 font-semibold text-lg">Contabilidade Completa</p>
                    <p className="text-slate-600 text-sm mt-2">Sem complicações, 100% online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Agilize Style */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h4 className="text-3xl md:text-4xl font-bold text-primary font-heading">+1000</h4>
                <p className="text-sm text-slate-600 font-medium uppercase tracking-wider">Empresas Atendidas</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl md:text-4xl font-bold text-primary font-heading">98%</h4>
                <p className="text-sm text-slate-600 font-medium uppercase tracking-wider">Satisfação</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl md:text-4xl font-bold text-primary font-heading">24h</h4>
                <p className="text-sm text-slate-600 font-medium uppercase tracking-wider">Atendimento</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl md:text-4xl font-bold text-primary font-heading">R$ 50M+</h4>
                <p className="text-sm text-slate-600 font-medium uppercase tracking-wider">Economia Gerada</p>
              </div>
            </div>
          </div>
        </section>

        {/* Processo em 3 Passos - Agilize Style */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Como Funciona</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                3 passos simples para começar
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary"></div>

              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl mb-6 relative z-10 shadow-lg">
                    1
                  </div>
                  <h4 className="font-heading text-xl font-bold text-slate-900 mb-3">Consultoria Especializada</h4>
                  <p className="text-slate-600">Nosso time ajuda você a escolher o melhor regime tributário e estrutura para sua empresa.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl mb-6 relative z-10 shadow-lg">
                    2
                  </div>
                  <h4 className="font-heading text-xl font-bold text-slate-900 mb-3">Registro da Empresa</h4>
                  <p className="text-slate-600">Assumimos toda a parte burocrática e iniciamos o processo de registro do seu CNPJ.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl mb-6 relative z-10 shadow-lg">
                    3
                  </div>
                  <h4 className="font-heading text-xl font-bold text-slate-900 mb-3">Seu CNPJ Pronto!</h4>
                  <p className="text-slate-600">Sua empresa está registrada! Agora focamos na sua contabilidade enquanto você cresce.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades Principais - Sección Destacada */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Funcionalidades</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Tudo o que sua empresa precisa para crescer!
              </h3>
              <p className="text-slate-600 text-lg">Combinamos tecnologia inteligente e suporte humano de especialistas em contabilidade para oferecer um serviço ágil, transparente e econômico.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: BarChart3, title: "Transparência Fiscal", desc: "Entenda cada imposto com base no CNAE e no faturamento da sua empresa." },
                { icon: TrendingUp, title: "Conciliação Bancária", desc: "Categorize suas transações e facilite sua organização e declaração do IR." },
                { icon: Clock, title: "Previsão de Impostos", desc: "Saiba com antecedência quanto vai pagar para se planejar melhor." },
                { icon: FileText, title: "Notas Fiscais", desc: "Emita, importe e cancele notas fiscais de maneira mais prática." },
                { icon: Building2, title: "Gestão Completa", desc: "Controle financeiro, contábil e de RH em um só lugar." },
                { icon: Headphones, title: "Notificações", desc: "Receba alertas para não perder prazos e manter tudo em dia." }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="border border-slate-200 hover:shadow-lg hover:border-secondary transition-all duration-300 bg-white">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 mb-2 text-lg">{feature.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Soluções por Profissão - Agilize/Obvia Style */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Soluções Especializadas</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Contabilidade para cada tipo de profissional
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Profissionais Liberais", desc: "Advogados, Psicólogos, Consultores" },
                { title: "Profissionais de TI", desc: "Desenvolvedores, Designers, Agências" },
                { title: "Profissionais da Saúde", desc: "Médicos, Dentistas, Fisioterapeutas" },
                { title: "Profissionais de Comunicação", desc: "Jornalistas, Publicitários, Influenciadores" }
              ].map((prof, idx) => (
                <Card key={idx} className="border border-slate-200 hover:border-secondary hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="text-primary" size={24} />
                    </div>
                    <h4 className="font-heading font-bold text-slate-900 mb-2">{prof.title}</h4>
                    <p className="text-sm text-slate-600 mb-4">{prof.desc}</p>
                    <a href="#" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                      Saiba mais <ChevronRight size={16} className="ml-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Planos - Agilize Style com Abas */}
        <section id="planos" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Nossos Planos</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Escolha o plano que melhor se adequa à sua necessidade!
              </h3>
              <p className="text-slate-600 text-lg">Planos completos, com suporte humano e tecnologia para simplificar sua rotina. Escolha o que mais faz sentido para você:</p>
            </div>

            {/* Abas de Categoria */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setPlanCategory("servicos")}
                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  planCategory === "servicos"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Serviços
              </button>
              <button
                onClick={() => setPlanCategory("comercio")}
                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  planCategory === "comercio"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Comércio
              </button>
            </div>

            {/* Planos Serviços */}
            {planCategory === "servicos" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Basic",
                      price: "259",
                      desc: "Perfeito para quem precisa de suporte, autonomia e agilidade no dia a dia.",
                      badge: "BENEFÍCIOS EXCLUSIVOS",
                      features: ["Abertura grátis*", "Contabilidade completa", "Certificado Digital", "Painel contábil", "Atendimento 8h-18h"]
                    },
                    {
                      name: "Unique",
                      price: "450",
                      desc: "Tenha um gerente de conta dedicado para sua empresa.",
                      badge: "ESPECIALISTA DEDICADO",
                      popular: true,
                      features: ["Todos os benefícios Basic", "Gerente de conta exclusivo", "Atendimento até 21h", "Consultoria contábil", "Conciliação financeira"]
                    },
                    {
                      name: "Unique Plus",
                      price: "700",
                      desc: "Para quem tem uma operação maior e mais demandas financeiras.",
                      badge: "OPERAÇÃO MAIOR",
                      features: ["Todos os benefícios Unique", "Até 10 pessoas no RH", "100 operações/mês", "3 contas bancárias", "Importação de notas"]
                    }
                  ].map((plan, idx) => (
                    <Card key={idx} className={`border-2 transition-all duration-300 overflow-hidden ${
                      plan.popular ? "border-secondary shadow-2xl scale-105" : "border-slate-200 hover:border-secondary"
                    }`}>
                      <div className={`text-center py-2 text-xs font-bold tracking-wider ${
                        plan.popular
                          ? "bg-secondary text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}>
                        {plan.badge}
                      </div>
                      <CardContent className="p-8 space-y-6">
                        <div>
                          <h4 className="font-heading text-2xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                          <p className="text-sm text-slate-600 mb-6">{plan.desc}</p>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-bold text-primary">R$ {plan.price}</span>
                            <span className="text-slate-600">/mês</span>
                          </div>
                          <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                            20% de desconto
                          </div>
                        </div>

                        <Button className={`w-full h-12 font-bold rounded-full ${
                          plan.popular
                            ? "bg-secondary hover:bg-secondary/90 text-white"
                            : "bg-primary hover:bg-primary/90 text-white"
                        }`}>
                          Ver mais
                        </Button>

                        <ul className="space-y-3">
                          {plan.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-center gap-3 text-slate-700 text-sm">
                              <CheckCircle2 size={16} className="text-secondary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <p className="text-slate-700 font-medium">Procurando um plano mais econômico?</p>
                  <p className="text-slate-600 text-sm mt-1">O <span className="font-bold">Starter</span> é o ideal para você.</p>
                  <p className="text-xs text-slate-500 mt-3">*Valores válidos para empresas do Simples Nacional. Para Lucro Presumido, fale com os especialistas.</p>
                </div>
              </div>
            )}

            {/* Planos Comércio */}
            {planCategory === "comercio" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Basic Comércio",
                      price: "359",
                      desc: "Ideal para quem quer manter tudo em dia sem complicação.",
                      badge: "BENEFÍCIOS EXCLUSIVOS",
                      features: ["Abertura grátis*", "Contabilidade completa", "Certificado Digital", "Painel contábil", "Atendimento 8h-18h"]
                    },
                    {
                      name: "Unique Comércio",
                      price: "550",
                      desc: "Tenha um gerente de conta dedicado para sua empresa.",
                      badge: "ESPECIALISTA DEDICADO",
                      popular: true,
                      features: ["Todos os benefícios Basic", "Gerente de conta exclusivo", "Atendimento até 21h", "Consultoria contábil", "Conciliação financeira"]
                    },
                    {
                      name: "Unique Plus Comércio",
                      price: "900",
                      desc: "Para quem tem uma operação maior e mais demandas financeiras.",
                      badge: "OPERAÇÃO MAIOR",
                      features: ["Todos os benefícios Unique", "Até 10 pessoas no RH", "100 operações/mês", "3 contas bancárias", "Importação de notas"]
                    }
                  ].map((plan, idx) => (
                    <Card key={idx} className={`border-2 transition-all duration-300 overflow-hidden ${
                      plan.popular ? "border-secondary shadow-2xl scale-105" : "border-slate-200 hover:border-secondary"
                    }`}>
                      <div className={`text-center py-2 text-xs font-bold tracking-wider ${
                        plan.popular
                          ? "bg-secondary text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}>
                        {plan.badge}
                      </div>
                      <CardContent className="p-8 space-y-6">
                        <div>
                          <h4 className="font-heading text-2xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                          <p className="text-sm text-slate-600 mb-6">{plan.desc}</p>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-bold text-primary">R$ {plan.price}</span>
                            <span className="text-slate-600">/mês</span>
                          </div>
                          <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                            20% de desconto
                          </div>
                        </div>

                        <Button className={`w-full h-12 font-bold rounded-full ${
                          plan.popular
                            ? "bg-secondary hover:bg-secondary/90 text-white"
                            : "bg-primary hover:bg-primary/90 text-white"
                        }`}>
                          Ver mais
                        </Button>

                        <ul className="space-y-3">
                          {plan.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-center gap-3 text-slate-700 text-sm">
                              <CheckCircle2 size={16} className="text-secondary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <p className="text-slate-700 font-medium">Procurando um plano mais econômico?</p>
                  <p className="text-slate-600 text-sm mt-1">O <span className="font-bold">Starter Comércio</span> é o ideal para você.</p>
                  <p className="text-xs text-slate-500 mt-3">*Valores válidos para empresas do Simples Nacional. Para Lucro Presumido, fale com os especialistas.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Benefícios Exclusivos - Seção Destacada */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Benefícios</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Benefícios exclusivos para você e sua empresa
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Headphones,
                  title: "Atendimento por WhatsApp",
                  desc: "Na a Crescit, todos os planos oferecem suporte direto pelo WhatsApp, rápido, prático e com a atenção do nosso time de especialistas."
                },
                {
                  icon: TrendingUp,
                  title: "Cobre online e com segurança",
                  desc: "Envie links de pagamento para seus clientes e receba de forma rápida e prática. Uma solução simples para facilitar suas cobranças."
                },
                {
                  icon: BarChart3,
                  title: "Redução de impostos",
                  desc: "Calculamos automaticamente se sua empresa pode usar o Fator R, do Simples Nacional, para reduzir seus impostos."
                }
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <Card key={idx} className="border border-slate-200 hover:shadow-lg hover:border-secondary transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 mb-3 text-lg">{benefit.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Serviços Avulsos - AQ Contabil Style */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Serviços Adicionais</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Serviços avulsos e personalizados
              </h3>
              <p className="text-slate-600 text-lg">Oferecemos diversos serviços que podem ser contratados à parte, conforme sua necessidade.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FileText, title: "Certificado Digital", desc: "Certificado A1 e-CNPJ válido por 1 ano" },
                { icon: Building2, title: "Abertura de Empresa", desc: "Processo 100% online e sem burocracia" },
                { icon: TrendingUp, title: "Consultoria Tributária", desc: "Otimização do regime tributário" },
                { icon: BarChart3, title: "Emissão de Notas", desc: "Serviço de emissão de notas fiscais" },
                { icon: Clock, title: "Migração de Contador", desc: "Troca de contabilidade em 24h" },
                { icon: ShieldCheck, title: "Regularização de Empresas", desc: "Resolução de débitos fiscais e parcelamentos tributários" }
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Card key={idx} className="border border-slate-200 hover:shadow-lg hover:border-secondary transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 mb-2">{service.title}</h4>
                      <p className="text-slate-600 text-sm">{service.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Motivos para Escolher - Obvia Style */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Por Que a a Crescit?</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Tudo o que sua empresa precisa para crescer!
              </h3>
              <p className="text-slate-600 text-lg">Tenha especialistas dedicados ao seu negócio, que cuidam diariamente de toda contabilidade da sua empresa.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  { title: "Praticidade", desc: "Resolva tudo 100% online, de onde você estiver." },
                  { title: "Especialista Contábil", desc: "Tenha um especialista para cuidar da sua empresa, a partir do plano Unique." },
                  { title: "Transparência", desc: "Acompanhe em tempo real toda a gestão contábil da sua empresa." },
                  { title: "Segurança", desc: "Você pode confiar na a Crescit. O nosso CRC MT-00000/O está habilitado em todas as regiões que atendemos." }
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <CheckCircle2 className="text-secondary" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{reason.title}</h4>
                      <p className="text-slate-600">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <img src="/images/hero-bg.jpg" alt="Dashboard" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Certificado Digital - Seção Destacada */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Certificado Digital</h2>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    Emissão de Certificado Digital
                  </h3>
                  <p className="text-lg text-slate-600">
                    a Crescit fez uma parceria com a Certificadora Digital para beneficiar você, nosso cliente.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">Por que preciso de um Certificado A1?</h4>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={18} />
                          <span><strong>Para abrir sua empresa:</strong> Na abertura de empresa com a a Crescit, será solicitado o Certificado A1.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={18} />
                          <span><strong>Troca de contabilidade:</strong> Para solicitar a troca de contabilidade com a a Crescit, você deve ter um Certificado A1.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="border-2 border-secondary bg-gradient-to-br from-secondary/5 to-primary/5">
                    <CardContent className="p-8 text-center">
                      <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Certificado A1 e-CNPJ</div>
                      <p className="text-slate-600 text-sm mb-4">Válido por 1 ano</p>
                      <div className="flex items-baseline justify-center gap-2 mb-6">
                        <span className="text-4xl font-bold text-primary">R$ 99,00</span>
                      </div>
                      <p className="text-xs text-slate-500 mb-6">para não clientes</p>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-full mb-4">
                        Quero meu Certificado
                      </Button>

                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - AQ Contabil Style */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Dúvidas Frequentes</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Perguntas mais relevantes
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "a Crescit atende empresas de todo o Brasil?", a: "Sim, atendemos todas as regiões do Brasil de forma 100% online." },
                { q: "Como funciona a contabilidade online?", a: "Você envia seus documentos pela plataforma, nossos contadores processam e entregam relatórios e guias." },
                { q: "A contabilidade online é segura?", a: "Sim, usamos criptografia de ponta e backups diários para proteger seus dados." },
                { q: "Posso trocar de contador para a a Crescit?", a: "Sim, fazemos a migração em 24h sem complicações. Basta ter um certificado digital." }
              ].map((faq, idx) => (
                <Card key={idx} className="border border-slate-200 hover:border-secondary transition-all">
                  <CardContent className="p-6">
                    <button className="w-full text-left flex items-center justify-between">
                      <h4 className="font-bold text-slate-900">{faq.q}</h4>
                      <ChevronRight className="text-secondary flex-shrink-0" size={20} />
                    </button>
                    <p className="text-slate-600 mt-4 hidden">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário de Contato - Agilize Style */}
        <section id="contact" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Fale Conosco</h2>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Comece sua transformação agora
                </h3>
                <p className="text-slate-600 text-lg">Preencha o formulário e um especialista entrará em contato em breve.</p>
              </div>

              <Card className="border-2 border-slate-200">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Nome Completo*</label>
                        <Input 
                          name="name" 
                          placeholder="Seu nome" 
                          required 
                          className="h-11"
                          value={formState.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Email*</label>
                        <Input 
                          name="email" 
                          type="email" 
                          placeholder="seu@email.com" 
                          required 
                          className="h-11"
                          value={formState.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Telefone*</label>
                        <Input 
                          name="phone" 
                          placeholder="(00) 00000-0000" 
                          required 
                          className="h-11"
                          value={formState.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Profissão*</label>
                        <select 
                          name="profession"
                          className="w-full h-11 px-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          value={formState.profession}
                          onChange={handleInputChange}
                        >
                          <option value="">Selecione</option>
                          <option value="advogado">Advogado</option>
                          <option value="medico">Médico</option>
                          <option value="dentista">Dentista</option>
                          <option value="ti">Profissional de TI</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Estado*</label>
                      <select 
                        name="state"
                        className="w-full h-11 px-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formState.state}
                        onChange={handleInputChange}
                      >
                        <option value="">Selecione um estado</option>
                        <option value="sp">São Paulo</option>
                        <option value="mg">Minas Gerais</option>
                        <option value="rj">Rio de Janeiro</option>
                        <option value="ba">Bahia</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium text-slate-700">Preferência de contato*</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="contact" 
                            value="whatsapp"
                            checked={formState.contact === "whatsapp"}
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <span className="text-slate-700">WhatsApp</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="contact" 
                            value="telefone"
                            checked={formState.contact === "telefone"}
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <span className="text-slate-700">Telefone</span>
                        </label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold h-12 text-lg rounded-full shadow-lg">
                      FALAR COM ESPECIALISTA
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua contabilidade?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 1000 empreendedores que confiam na a Crescit para cuidar de sua contabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 h-14 rounded-full shadow-lg">
                Abrir Empresa Agora
              </Button>
              <Button size="lg" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 h-14 rounded-full">
                Trocar de Contador
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
