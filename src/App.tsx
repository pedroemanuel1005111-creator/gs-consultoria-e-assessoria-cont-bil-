import { useState, useEffect, useRef } from 'react';
import {
  Phone, MapPin, Clock, Menu, X, ChevronUp,
  BookOpen, Calculator, FileText, BarChart3,
  Users, Shield, Award, CheckCircle2,
  ArrowRight, Star, Building2, TrendingUp,
  MessageCircle
} from 'lucide-react';

const WHATSAPP_NUMBER = '5562995553727';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços da GS Consultoria.`;
const INSTAGRAM_LINK = 'https://www.instagram.com/gsconsultoriaecontabilidade/';
const MAPS_LINK = 'https://www.google.com/maps/place/GS+Consultoria+e+Assessoria+Cont%C3%A1bil/@-15.9305781,-52.2199001,7z/data=!3m1!4b1!4m6!3m5!1s0x617efe06fa0e5fc7:0xcdb0e6ea2be9bd0d!8m2!3d-15.9466686!4d-49.5778588!16s%2Fg%2F11t6_rp9x9?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// ─── NAVBAR ──────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy-950/95 backdrop-blur-lg shadow-2xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="GS Consultoria" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <span className="text-xl font-bold text-white tracking-tight">GS</span>
              <span className="text-xl font-bold text-gold-400 ml-1">Consultoria</span>
              <p className="text-[10px] text-navy-300 -mt-1 tracking-widest uppercase">Assessoria Contábil</p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm text-navy-200 hover:text-gold-400 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-navy-700/50 animate-fade-in">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-navy-200 hover:text-gold-400 py-3 px-2 border-b border-navy-800/30 transition-colors">
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="mt-4 w-full bg-green-500 text-white text-center font-semibold py-3 rounded-full flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Fale pelo WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7876659/pexels-photo-7876659.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Escritório"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Clock className="w-4 h-4" />
              Aberto · Fecha às 18:00
            </span>
          </div>

          <h1 className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-serif">
              GS Consultoria
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-serif mt-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
                & Contabilidade
              </span>
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-200 max-w-xl leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Assessoria contábil completa para o seu negócio. Escrituração, consultoria fiscal e planejamento tributário com <strong className="text-white">excelência e confiança</strong>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center justify-center gap-3 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300">
              <MessageCircle className="w-6 h-6" />
              Fale Conosco
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicos"
              className="border-2 border-navy-400/30 text-white font-semibold px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2 hover:bg-white/5 hover:border-gold-400/40 transition-all duration-300">
              Nossos Serviços
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            {[
              { value: '10+', label: 'Anos de Experiência' },
              { value: '500+', label: 'Clientes Atendidos' },
              { value: '100%', label: 'Comprometimento' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gold-400">{stat.value}</div>
                <div className="text-xs sm:text-sm text-navy-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-navy-400/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────
const services = [
  {
    icon: BookOpen,
    title: 'Escrituração Contábil',
    description: 'Registro e organização de todas as movimentações financeiras da sua empresa, garantindo conformidade com a legislação vigente.',
  },
  {
    icon: Calculator,
    title: 'Planejamento Tributário',
    description: 'Análise estratégica para reduzir a carga tributária de forma legal, maximizando os resultados do seu negócio.',
  },
  {
    icon: FileText,
    title: 'Obrigações Acessórias',
    description: 'Entrega pontual de todas as declarações e obrigações fiscais, evitando multas e penalidades.',
  },
  {
    icon: BarChart3,
    title: 'Consultoria Fiscal',
    description: 'Orientação especializada sobre impostos, contribuições e melhores práticas fiscais para sua empresa.',
  },
  {
    icon: Users,
    title: 'Departamento Pessoal',
    description: 'Gestão completa da folha de pagamento, admissões, rescisões e cumprimento da legislação trabalhista.',
  },
  {
    icon: TrendingUp,
    title: 'Abertura de Empresas',
    description: 'Assessoria completa para abertura, alteração e encerramento de empresas, com agilidade e segurança.',
  },
];

function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-900 via-gold-400 to-navy-900" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-50 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy-50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">O que fazemos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 font-serif">
            Nossos Serviços
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto rounded-full" />
          <p className="mt-6 text-navy-600 text-lg leading-relaxed">
            Oferecemos soluções contábeis completas para empresas de todos os portes, com atendimento personalizado e foco em resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-white border border-navy-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500 hover:-translate-y-2 hover:border-gold-200 ${isInView ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center mb-6 group-hover:from-gold-400 group-hover:to-gold-500 transition-all duration-500 shadow-lg">
                <service.icon className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-navy-500 leading-relaxed text-sm">{service.description}</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-gold-600 font-semibold text-sm group-hover:text-gold-500 transition-colors">
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────
function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="sobre" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={isInView ? 'animate-fade-in-up opacity-0' : 'opacity-0'} style={{ animationFillMode: 'forwards' }}>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">Quem somos</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif leading-tight">
              Sua parceira em <span className="text-gold-400">contabilidade</span>
            </h2>
            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />

            <p className="mt-8 text-navy-200 text-lg leading-relaxed">
              A <strong className="text-white">GS Consultoria e Assessoria Contábil</strong> é uma empresa dedicada a oferecer
              serviços de escrituração contábil e consultoria financeira com excelência e comprometimento.
            </p>
            <p className="mt-4 text-navy-300 leading-relaxed">
              Com anos de experiência no mercado, nossa equipe de profissionais qualificados está preparada para
              atender empresas de todos os portes, oferecendo soluções personalizadas que garantem o cumprimento
              das obrigações legais e a otimização dos resultados financeiros.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: Shield, text: 'Segurança e Confiabilidade' },
                { icon: Award, text: 'Profissionais Qualificados' },
                { icon: CheckCircle2, text: 'Compromisso com Prazos' },
                { icon: Star, text: 'Atendimento Personalizado' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-navy-200 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-bold px-8 py-4 rounded-full text-lg hover:from-gold-300 hover:to-gold-400 transition-all duration-300 shadow-xl shadow-gold-400/20 hover:shadow-gold-400/40 hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              Fale com um Consultor
            </a>
          </div>

          <div className={`relative ${isInView ? 'animate-slide-in-right opacity-0' : 'opacity-0'}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7433839/pexels-photo-7433839.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
                alt="Equipe GS Consultoria"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy-900">500+</p>
                  <p className="text-xs text-navy-500">Empresas atendidas</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold-400/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DIFFERENTIALS ───────────────────────────────────────────
function Differentials() {
  const { ref, isInView } = useInView();

  const items = [
    {
      number: '01',
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único. Oferecemos soluções sob medida para as necessidades específicas da sua empresa.',
    },
    {
      number: '02',
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos as ferramentas mais modernas do mercado para garantir agilidade e precisão nos processos.',
    },
    {
      number: '03',
      title: 'Equipe Especializada',
      description: 'Contadores e consultores com formação sólida e constante atualização profissional.',
    },
    {
      number: '04',
      title: 'Transparência Total',
      description: 'Comunicação clara e relatórios detalhados para que você tenha total controle financeiro.',
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-b from-white to-navy-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Por que nos escolher</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 font-serif">
            Nossos Diferenciais
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={item.number}
              className={`group flex gap-6 p-8 bg-white rounded-2xl border border-navy-100 hover:shadow-xl hover:border-gold-200 transition-all duration-500 ${isInView ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className="shrink-0">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-500 font-serif">
                  {item.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-navy-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ─────────────────────────────────────────────
function CTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7580856/pexels-photo-7580856.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/90" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <div className={isInView ? 'animate-fade-in-up opacity-0' : 'opacity-0'} style={{ animationFillMode: 'forwards' }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif">
            Pronto para organizar a <span className="text-gold-400">contabilidade</span> da sua empresa?
          </h2>
          <p className="mt-6 text-navy-200 text-lg max-w-2xl mx-auto">
            Entre em contato agora pelo WhatsApp e receba uma consultoria gratuita. Estamos prontos para ajudar o seu negócio a crescer!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-10 py-5 rounded-full text-lg flex items-center justify-center gap-3 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 animate-pulse-glow">
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={`tel:+${WHATSAPP_NUMBER}`}
              className="border-2 border-white/20 text-white font-semibold px-10 py-5 rounded-full text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300">
              <Phone className="w-5 h-5" />
              (62) 99555-3727
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT / FOOTER ────────────────────────────────────────
function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contato" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-900 via-gold-400 to-navy-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">Fale conosco</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif">
            Entre em Contato
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto rounded-full" />
        </div>

        <div className={`grid md:grid-cols-3 gap-8 ${isInView ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`} style={{ animationFillMode: 'forwards' }}>
          {/* WhatsApp Card */}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="group bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-navy-700/50 rounded-2xl p-8 text-center hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-navy-300 mb-4">Atendimento rápido e prático</p>
            <span className="text-green-400 font-semibold text-lg">(62) 99555-3727</span>
          </a>

          {/* Location Card */}
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer"
            className="group bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-navy-700/50 rounded-2xl p-8 text-center hover:border-gold-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-400/10">
            <div className="w-16 h-16 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-400/20 transition-colors">
              <MapPin className="w-8 h-8 text-gold-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Localização</h3>
            <p className="text-navy-300 mb-4">Veja no Google Maps</p>
            <span className="text-gold-400 font-semibold">Ver no Mapa →</span>
          </a>

          {/* Hours Card */}
          <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-navy-700/50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-navy-400/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Clock className="w-8 h-8 text-navy-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Horário</h3>
            <p className="text-navy-300 mb-4">Segunda a Sexta</p>
            <span className="text-white font-semibold text-lg">08:00 - 18:00</span>
          </div>
        </div>

        {/* Map Embed */}
        <div className={`mt-16 rounded-2xl overflow-hidden border border-navy-700/50 shadow-2xl ${isInView ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d-49.5778588!3d-15.9466686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x617efe06fa0e5fc7%3A0xcdb0e6ea2be9bd0d!2sGS%20Consultoria%20e%20Assessoria%20Cont%C3%A1bil!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização GS Consultoria"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="GS Consultoria" className="h-10 w-10 rounded-lg object-cover" />
              <div>
                <span className="text-lg font-bold text-white">GS</span>
                <span className="text-lg font-bold text-gold-400 ml-1">Consultoria</span>
              </div>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed">
              Assessoria contábil completa para o sucesso do seu negócio. Escrituração, consultoria fiscal e planejamento tributário.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              {['Início', 'Serviços', 'Sobre', 'Diferenciais', 'Contato'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                  className="block text-navy-400 hover:text-gold-400 text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <MessageCircle className="w-5 h-5 text-navy-400 group-hover:text-white transition-colors" />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <svg className="w-5 h-5 text-navy-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={`tel:+${WHATSAPP_NUMBER}`}
                className="w-10 h-10 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Phone className="w-5 h-5 text-navy-400 group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="mt-4 text-navy-400 text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (62) 99555-3727
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800/50 text-center">
          <p className="text-navy-500 text-sm">
            © {new Date().getFullYear()} GS Consultoria e Assessoria Contábil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── FLOATING WHATSAPP BUTTON ────────────────────────────────
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-pulse-glow"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Back to top */}
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 bg-navy-800/80 backdrop-blur text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:bg-navy-700 transition-all duration-300 animate-fade-in"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Differentials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
