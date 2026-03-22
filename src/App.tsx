import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2,
  Check, 
  Globe, 
  Instagram, 
  Layout, 
  MapPin, 
  MessageCircle, 
  Palette, 
  Search, 
  TrendingUp, 
  Users,
  ChevronDown,
  Menu,
  X,
  AlertTriangle,
  ArrowLeft,
  Facebook,
  BarChart,
  Zap,
  Target,
  Trophy,
  Smartphone,
  Star,
  Megaphone,
  Navigation,
  Unlock,
  Camera,
  RefreshCw,
  LayoutDashboard
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  useParams, 
  useLocation,
  useNavigate
} from "react-router-dom";

// --- Data ---

const SERVICES_DATA = [
  {
    id: "design-grafico.html",
    title: "Design Gráfico e Identidade Visual",
    shortDescription: "Criamos identidades visuais e materiais gráficos que tornam sua marca mais profissional e reconhecível.",
    fullDescription: "A primeira impressão é a que fica. Uma identidade visual bem construída comunica os valores da sua empresa antes mesmo de você dizer uma palavra. Criamos sistemas visuais completos que funcionam tanto no digital quanto no impresso, garantindo unidade e profissionalismo em todos os pontos de contato.",
    icon: <Palette className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Criação de Logotipos Exclusivos",
      "Paleta de Cores e Tipografia",
      "Manual da Marca",
      "Design para Papelaria (Cartões, Papel Timbrado)",
      "Artes para Materiais Digitais",
      "Apresentações Corporativas"
    ],
    benefits: "Sua empresa deixa de ser 'apenas mais uma' e passa a ser uma marca memorável. O design profissional eleva o valor percebido do seu produto ou serviço.",
    process: [
      { step: "01", title: "Imersão na Marca", description: "Entendemos a essência do seu negócio e o que você deseja transmitir ao mundo." },
      { step: "02", title: "Conceituação", description: "Desenvolvemos os primeiros esboços e conceitos visuais baseados na estratégia." },
      { step: "03", title: "Refinamento", description: "Ajustamos cada detalhe de cores, formas e fontes até chegar na perfeição." },
      { step: "04", title: "Entrega Final", description: "Enviamos todos os arquivos prontos para uso em diversos formatos e o manual da marca." }
    ]
  },
  {
    id: "criacao-sites.html",
    title: "Criação de Sites e Landing Pages",
    shortDescription: "Desenvolvemos sites profissionais que apresentam sua empresa de forma clara, moderna e estratégica.",
    fullDescription: "Um site não é apenas um cartão de visitas digital; é a base da sua presença online. Na Bydo, criamos sites e landing pages focados em conversão e experiência do usuário. Utilizamos tecnologias modernas para garantir que seu site seja rápido, seguro e totalmente responsivo (funciona perfeitamente em celulares, tablets e computadores).",
    icon: <Globe className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Design Exclusivo e Moderno",
      "Otimização para SEO (Google)",
      "Integração com WhatsApp e Redes Sociais",
      "Painel de Gerenciamento Fácil",
      "Hospedagem de Alta Performance",
      "Certificado de Segurança SSL"
    ],
    benefits: "Com um site profissional, sua empresa transmite muito mais credibilidade. Além disso, você tem o controle total da sua comunicação, sem depender exclusivamente de algoritmos de redes sociais.",
    process: [
      { step: "01", title: "Briefing e Estratégia", description: "Entendemos seu negócio, público e objetivos para criar um projeto focado em resultados." },
      { step: "02", title: "Design e Prototipagem", description: "Criamos a interface visual do site para sua aprovação antes de iniciarmos o código." },
      { step: "03", title: "Desenvolvimento", description: "Transformamos o design em um site real, rápido, seguro e otimizado para celulares." },
      { step: "04", title: "Lançamento e Suporte", description: "Colocamos o site no ar e treinamos sua equipe para gerenciar o conteúdo com facilidade." }
    ]
  },
  {
    id: "google-meu-negocio.html",
    title: "Otimização do Google Meu Negócio",
    shortDescription: "Ajudamos sua empresa a se destacar nas pesquisas do Google, aumentando a visibilidade para clientes locais.",
    fullDescription: "Quando alguém procura por um serviço 'perto de mim', o Google Meu Negócio é a ferramenta que decide quem aparece primeiro. Nós otimizamos seu perfil para garantir que sua empresa seja encontrada, receba avaliações positivas e forneça todas as informações necessárias para o cliente escolher você.",
    icon: <Search className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Configuração Completa do Perfil",
      "Otimização de Palavras-Chave Locais",
      "Gestão de Fotos e Vídeos",
      "Estratégia para Avaliações",
      "Postagens Semanais no Perfil",
      "Relatórios de Visualizações e Cliques"
    ],
    benefits: "Aumento imediato na visibilidade local. Mais chamadas telefônicas, mais solicitações de rota e mais visitas ao seu site vindas diretamente do Google.",
    process: [
      { step: "01", title: "Auditoria Local", description: "Analisamos como sua empresa aparece hoje e quem são seus principais concorrentes locais." },
      { step: "02", title: "Otimização Técnica", description: "Ajustamos categorias, palavras-chave e informações para o algoritmo do Google." },
      { step: "03", title: "Gestão de Conteúdo", description: "Publicamos fotos e atualizações frequentes para manter o perfil ativo e relevante." },
      { step: "04", title: "Estratégia de Reviews", description: "Implementamos métodos para incentivar avaliações 5 estrelas dos seus clientes." }
    ]
  },
  {
    id: "redes-sociais.html",
    title: "Gestão de Redes Sociais",
    shortDescription: "Planejamos e organizamos a comunicação da sua empresa nas redes sociais para que sua marca tenha presença e consistência.",
    fullDescription: "Estar nas redes sociais é obrigatório, mas estar de forma estratégica é o que diferencia as marcas que crescem das que apenas 'postam'. Nossa gestão de redes sociais foca em construir uma comunidade em torno da sua marca, aumentar o engajamento e transformar seguidores em clientes reais.",
    icon: <Instagram className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Planejamento de Conteúdo Mensal",
      "Criação de Artes Profissionais",
      "Redação de Legendas Estratégicas",
      "Gestão de Anúncios (Opcional)",
      "Análise de Métricas e Resultados",
      "Interação com o Público"
    ],
    benefits: "Sua marca ganha voz e personalidade. Com posts consistentes e de alta qualidade, você se mantém presente na mente do seu consumidor todos os dias.",
    process: [
      { step: "01", title: "Análise de Perfil", description: "Avaliamos sua presença atual e identificamos pontos de melhoria e oportunidades." },
      { step: "02", title: "Linha Editorial", description: "Definimos os temas e o tom de voz que serão usados para conectar com seu público." },
      { step: "03", title: "Produção Mensal", description: "Criamos todas as artes e legendas com antecedência para sua aprovação." },
      { step: "04", title: "Monitoramento", description: "Acompanhamos o desempenho e ajustamos a estratégia para maximizar o engajamento." }
    ]
  }
];

// --- Components ---

const WHATSAPP_URL = "https://wa.me/5511939553258";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  to,
  href
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  className?: string;
  onClick?: () => void;
  to?: string;
  href?: string;
}) => {
  const baseStyles = "px-8 py-4 font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm cursor-pointer inline-flex";
  const variants = {
    primary: "bg-vibrant-pink text-white hover:bg-opacity-90 shadow-lg hover:shadow-vibrant-pink/20",
    secondary: "bg-royal-blue text-white hover:bg-opacity-90",
    outline: "border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {children}
      </a>
    );
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(WHATSAPP_URL, '_blank');
    }
  };

  return (
    <motion.button 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' ? "0 0 20px rgba(255, 0, 127, 0.4)" : "none"
      }}
      whileTap={{ scale: 0.95 }}
      className={combinedClasses}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
};

const SectionTitle = ({ 
  subtitle, 
  title, 
  light = false,
  centered = false
}: { 
  subtitle?: string; 
  title: string; 
  light?: boolean;
  centered?: boolean;
}) => (
  <div className={`mb-12 ${centered ? 'text-center mx-auto' : 'text-left'}`}>
    {subtitle && (
      <div className={`flex items-center gap-2 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className="w-8 h-[2px] bg-vibrant-pink"></div>
        <span className="text-vibrant-pink font-extrabold uppercase tracking-[0.3em] text-[12px] md:text-sm">
          {subtitle}
        </span>
      </div>
    )}
    <h2 className={`text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.05] tracking-tighter ${light ? 'text-white' : 'text-royal-blue'} ${centered ? 'max-w-4xl mx-auto' : 'max-w-4xl'}`}>
      {title}
    </h2>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "WORK", href: isHomePage ? "#home" : "/#home" },
    { name: "SERVICES", href: isHomePage ? "#servicos" : "/#servicos" },
    { name: "ABOUT", href: isHomePage ? "#sobre" : "/#sobre" },
    { name: "NEWS", href: "/blog.html" },
    { name: "CONTACT", href: isHomePage ? "#contato" : "/#contato" },
  ];

  const socialLinks = [
    { name: "TWITTER", href: "#" },
    { name: "INSTAGRAM", href: "https://www.instagram.com/bydomarketingdigital/" },
    { name: "LINKEDIN", href: "#" },
    { name: "CLUTCH", href: "#" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="container flex justify-between items-center py-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-extrabold text-white tracking-tighter">Bydo<span className="text-vibrant-pink">.</span></span>
          </Link>

          <button 
            className="text-vibrant-pink p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-royal-blue flex flex-col"
          >
            <div className="container flex justify-between items-center py-6">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <span className="text-2xl font-display font-extrabold text-white tracking-tighter">Bydo<span className="text-vibrant-pink">.</span></span>
              </Link>
              <button 
                className="text-white p-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={32} />
              </button>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 flex flex-col justify-center container"
            >
              <nav className="flex flex-col gap-4 md:gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {link.href.startsWith("#") ? (
                      <a 
                        href={link.href} 
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-display font-black hover:text-vibrant-pink transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-display font-black hover:text-vibrant-pink transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 md:mt-16"
              >
                <a 
                  href={WHATSAPP_URL}
                  className="border-2 border-white text-white px-8 md:px-12 py-4 md:py-5 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-3 hover:bg-white hover:text-royal-blue transition-all"
                >
                  Start a Project <ArrowRight size={18} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="container py-8"
            >
              <div className="flex items-center gap-6 md:gap-10">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-vibrant-pink text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Sections ---

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-royal-blue">
    <div className="absolute inset-0 overflow-hidden">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </div>
    
    <div className="container relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-10 text-left">
          <span className="block font-black text-white">ATRAIR</span>
          <span className="block font-black text-white">POSICIONAM SEU</span>
          <span className="block font-black text-white">NEGÓCIO</span>
          <span className="block font-black text-vibrant-pink mt-2">VENDER</span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed text-left"
        >
          Estratégia, Design e Performance para transformar sua presença digital em um ativo de vendas real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <a 
            href={WHATSAPP_URL}
            className="bg-vibrant-pink text-white px-10 md:px-14 py-4 md:py-5 font-bold text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all inline-flex items-center gap-3"
          >
            Comece seu Projeto <ArrowRight size={18} />
          </a>
        </motion.div>
      </motion.div>
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </motion.div>
  </section>
);

const Problem = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-24 bg-slate-50"
  >
    <div className="container">
      <SectionTitle 
        centered
        title="Sua empresa pode estar perdendo oportunidades no digital" 
      />
      <p className="text-center text-slate-500 max-w-3xl mx-auto mb-12">
        Hoje, a maioria dos clientes pesquisa no Google ou nas redes sociais antes de escolher uma empresa. Quando a presença digital não está bem estruturada, surgem problemas comuns:
      </p>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {[
            "Site desatualizado ou inexistente",
            "Redes sociais sem estratégia",
            "Marca sem identidade visual clara",
            "Empresa difícil de encontrar no Google",
            "Comunicação confusa sobre o que a empresa realmente oferece"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-white shadow-sm border border-slate-100">
              <div className="text-vibrant-pink shrink-0">
                <AlertTriangle size={20} />
              </div>
              <span className="font-bold text-royal-blue text-sm uppercase tracking-tight">{item}</span>
            </div>
          ))}
          <p className="text-slate-500 italic mt-8 text-sm">
            O resultado disso é simples: empresas com grande potencial acabam sendo ignoradas enquanto concorrentes mais organizados ocupam espaço no mercado.
          </p>
        </motion.div>

        <div className="relative flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
            alt="Problemas no Digital" 
            className="w-full max-w-md h-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </motion.section>
);

const Solution = () => (
  <motion.section 
    id="sobre" 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-24 bg-white"
  >
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle 
            subtitle="Nossa Solução" 
            title="Estratégia, design e posicionamento para sua marca crescer" 
          />
          <div className="space-y-6 text-slate-500 mb-10">
            <p>
              A Bydo Marketing Digital & Design nasceu com um objetivo claro: ajudar empresas a transformarem sua presença digital em uma ferramenta real de crescimento.
            </p>
            <p>
              Unimos estratégia de marketing digital, design profissional e posicionamento de marca para estruturar a comunicação online de empresas e profissionais.
            </p>
            <p className="font-bold text-royal-blue">
              Não se trata apenas de postar conteúdos ou criar artes. Trata-se de organizar a presença digital da sua empresa para que ela seja:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Mais profissional",
              "Mais clara para o público",
              "Mais fácil de encontrar",
              "Mais forte diante da concorrência"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white border border-royal-blue/10 shadow-sm">
                <CheckCircle2 className="text-vibrant-pink" size={20} />
                <span className="font-bold text-royal-blue text-sm uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="bg-royal-blue p-10 text-white shadow-2xl">
          <h3 className="text-2xl font-display font-bold mb-8">Nosso propósito</h3>
          <p className="text-white/80 mb-10 leading-relaxed">
            Ajudar empresas a transformarem sua presença digital em uma ferramenta real de crescimento — com estratégia, design e posicionamento.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-black text-vibrant-pink mb-1">100+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Projetos entregues</div>
            </div>
            <div>
              <div className="text-4xl font-black text-vibrant-pink mb-1">50+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Marcas fortalecidas</div>
            </div>
            <div>
              <div className="text-4xl font-black text-vibrant-pink mb-1">4+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Anos de experiência</div>
            </div>
            <div>
              <div className="text-4xl font-black text-vibrant-pink mb-1">98%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const Services = () => {
  return (
    <motion.section 
      id="servicos" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-white"
    >
      <div className="container">
        <SectionTitle 
          centered
          title="Soluções para fortalecer a presença digital da sua empresa" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-100 p-8 flex flex-col"
            >
              <div className="text-vibrant-pink mb-6">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-10 h-10" })}
              </div>
              <h3 className="text-2xl font-display font-bold text-royal-blue mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed flex-1">
                {service.shortDescription}
              </p>
              <Button variant="outline" className="w-fit mt-8" to={`/servicos/${service.id}`}>
                Saiba mais
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Differential = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-24 bg-white"
  >
    <div className="container">
      <SectionTitle 
        centered
        title="Mais que marketing: posicionamento digital" 
      />
      <p className="text-center text-slate-500 max-w-3xl mx-auto mb-16">
        O trabalho da Bydo vai além de executar tarefas isoladas. Nosso foco é estruturar a presença digital da sua empresa de forma estratégica. Isso significa pensar em:
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Como sua marca é percebida online", icon: <Users size={24} /> },
          { title: "Como sua empresa aparece nas buscas", icon: <Search size={24} /> },
          { title: "Como sua comunicação transmite valor", icon: <MessageCircle size={24} /> },
          { title: "Como sua presença digital atrai os clientes certos", icon: <TrendingUp size={24} /> }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 shadow-sm text-center group hover:border-vibrant-pink transition-colors">
            <div className="w-12 h-12 bg-royal-blue/5 text-royal-blue flex items-center justify-center mx-auto mb-6 group-hover:bg-vibrant-pink group-hover:text-white transition-all">
              {item.icon}
            </div>
            <h4 className="font-bold text-royal-blue text-sm uppercase tracking-tight leading-relaxed">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-500 mt-16 max-w-2xl mx-auto text-sm">
        Essa visão integrada permite que sua empresa tenha uma presença digital mais forte, coerente e profissional.
      </p>
    </div>
  </motion.section>
);

const Portfolio = () => (
  <motion.section 
    id="portfolio" 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-24 bg-slate-100"
  >
    <div className="container">
      <SectionTitle 
        centered
        title="Projetos que ajudaram marcas a se posicionarem melhor" 
      />
      <p className="text-center text-slate-500 max-w-3xl mx-auto mb-16">
        Nosso portfólio reúne trabalhos de identidade visual, design, comunicação e presença digital desenvolvidos para diferentes áreas de atuação.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Identidade Visual — Clínica Estética", category: "Branding" },
          { title: "Site Institucional — Escritório de Advocacia", category: "Web Design" },
          { title: "Redes Sociais — Restaurante Gourmet", category: "Social Media" },
          { title: "Identidade Visual — Studio de Pilates", category: "Branding" },
          { title: "Landing Page — Consultoria Financeira", category: "Web Design" },
          { title: "Google Meu Negócio — Auto Elétrica", category: "SEO Local" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 51, 153, 0.15)"
            }}
            className="bg-white group cursor-pointer shadow-sm overflow-hidden transition-all duration-300"
          >
            <div className="aspect-video bg-slate-100 flex items-center justify-center">
              <span className="text-4xl font-black text-slate-200">B</span>
            </div>
            <div className="p-8">
              <span className="text-vibrant-pink text-[10px] font-black uppercase tracking-widest mb-2 block">{item.category}</span>
              <h4 className="text-royal-blue text-lg font-bold leading-tight">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const Testimonials = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-24 bg-white"
  >
    <div className="container">
      <SectionTitle 
        centered
        title="O que clientes dizem sobre nosso trabalho" 
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            text: "Agora meu perfil e minha comunicação ficaram muito mais organizados.",
            author: "Cliente A",
            role: "Empresário"
          },
          {
            text: "O trabalho ajudou a deixar minha marca muito mais profissional.",
            author: "Cliente B",
            role: "Profissional Liberal"
          },
          {
            text: "Hoje minha presença digital transmite muito mais credibilidade.",
            author: "Cliente C",
            role: "Empreendedora"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 shadow-sm border border-slate-100"
          >
            <div className="text-vibrant-pink mb-6">
              <MessageCircle size={24} />
            </div>
            <p className="text-slate-600 font-medium italic mb-8">
              “{item.text}”
            </p>
            <div>
              <span className="font-bold text-royal-blue text-sm block">{item.author}</span>
              <span className="text-slate-400 text-[10px] uppercase tracking-widest">{item.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "A Bydo atende apenas empresas de Ribeirão Pires-SP?",
      a: "Não. Atendemos empresas do ABC Paulista e também clientes online em todo o Brasil."
    },
    {
      q: "Vocês trabalham apenas com redes sociais?",
      a: "Não. A Bydo oferece soluções completas de presença digital, incluindo sites, branding, design gráfico e posicionamento no Google."
    },
    {
      q: "Posso contratar apenas um serviço específico?",
      a: "Sim. Os serviços podem ser contratados individualmente ou como parte de uma estratégia completa de presença digital."
    },
    {
      q: "Minha empresa precisa ter um site para ter uma boa presença digital?",
      a: "Ter um site profissional ajuda a transmitir mais credibilidade, organizar as informações da empresa e facilitar que clientes encontrem seu negócio no Google."
    },
    {
      q: "O que é presença digital e por que ela é importante para empresas?",
      a: "Presença digital é a forma como sua empresa aparece e se comunica no ambiente online. Isso envolve site, redes sociais, identidade visual e posicionamento no Google. Quando bem estruturada, ajuda a empresa a ganhar visibilidade e transmitir mais profissionalismo."
    },
    {
      q: "Minha empresa é pequena. Marketing digital ainda vale a pena?",
      a: "Sim. Empresas de todos os tamanhos podem se beneficiar de uma presença digital bem estruturada. Mesmo negócios locais podem aumentar sua visibilidade e alcançar novos clientes através da internet."
    },
    {
      q: "Quanto tempo leva para ver resultados com marketing digital?",
      a: "Os resultados podem variar de acordo com a estratégia adotada, o tipo de serviço contratado e o momento da empresa. Em muitos casos, melhorias na comunicação e na presença digital já começam a gerar percepção de valor logo nas primeiras etapas do trabalho."
    },
    {
      q: "O Google Meu Negócio realmente ajuda a trazer clientes?",
      a: "Sim. Um perfil bem estruturado no Google pode aumentar muito as chances da sua empresa aparecer nas pesquisas feitas por pessoas que estão procurando exatamente pelos serviços que você oferece."
    },
    {
      q: "Vocês atendem empresas de qualquer área?",
      a: "Sim. A Bydo já desenvolveu projetos para empresas e profissionais de diferentes segmentos, sempre adaptando as estratégias de comunicação e presença digital para cada tipo de negócio."
    },
    {
      q: "Como posso começar a melhorar a presença digital da minha empresa?",
      a: "O primeiro passo é entender como sua empresa está posicionada hoje no ambiente digital. A partir disso, é possível identificar oportunidades de melhoria e estruturar uma estratégia mais clara para fortalecer sua presença online."
    }
  ];

  return (
    <motion.section 
      id="faq" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-white"
    >
      <div className="container">
        <div className="max-w-3xl">
          <SectionTitle 
            subtitle="Dúvidas" 
            title="Perguntas Frequentes" 
          />
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-royal-blue/10 bg-white">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-bold text-royal-blue group-hover:text-vibrant-pink transition-colors">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-6 text-slate-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const CTA = () => (
  <motion.section 
    id="contato" 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-24 bg-slate-50"
  >
    <div className="container">
      <div className="bg-royal-blue p-12 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-8 font-display font-bold max-w-4xl mx-auto leading-tight">
            Pronto para fortalecer a presença digital da sua empresa?
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Se a sua empresa precisa de uma presença digital mais organizada, profissional e estratégica, a Bydo pode ajudar. Vamos entender seu momento atual e identificar as melhores soluções para posicionar sua marca com mais clareza no ambiente digital.
          </p>
          <a 
            href="https://wa.me/551139553258?text=Olá,%20Herika!%20Vi%20a%20nova%20Home%20da%20Bydo%20e%20quero%20começar%20meu%20projeto."
            className="bg-vibrant-pink text-white px-12 py-5 font-bold text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all inline-flex items-center gap-3 mx-auto"
          >
            Comece seu projeto <ArrowRight size={18} />
          </a>
        </div>
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-vibrant-pink/10 translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  </motion.section>
);

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-royal-blue pt-24 pb-12 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Coluna 1: SOBRE */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-b border-vibrant-pink/30 pb-2 inline-block">SOBRE</h4>
            <div className="space-y-6">
              <Link to="/" className="inline-block">
                <span className="text-2xl font-display font-extrabold text-white tracking-tighter">
                  Bydo<span className="text-vibrant-pink">.</span>
                </span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Transformamos empresas em Ativos Digitais profissionais através de estratégias de Marketing de Performance e Design de Autoridade.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <a href="https://www.instagram.com/bydomarketingdigital/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-vibrant-pink transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577454752620" target="_blank" rel="noopener noreferrer" className="text-white hover:text-vibrant-pink transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: ACESSO RÁPIDO */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-b border-vibrant-pink/30 pb-2 inline-block">ACESSO RÁPIDO</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li>
                <Link to={isHomePage ? "#home" : "/#home"} className="text-white/80 hover:text-vibrant-pink transition-colors">Home</Link>
              </li>
              <li>
                <Link to={isHomePage ? "#sobre" : "/#sobre"} className="text-white/80 hover:text-vibrant-pink transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to={isHomePage ? "#servicos" : "/#servicos"} className="text-white/80 hover:text-vibrant-pink transition-colors">Serviços</Link>
              </li>
              <li>
                <Link to="/blog.html" className="text-white/80 hover:text-vibrant-pink transition-colors">Blog</Link>
              </li>
              <li>
                <Link to={isHomePage ? "#contato" : "/#contato"} className="text-white/80 hover:text-vibrant-pink transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: NOSSOS CONTATOS */}
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-b border-vibrant-pink/30 pb-2 inline-block">NOSSOS CONTATOS</h4>
            <div className="space-y-4">
              <a href="mailto:agenciabydo@gmail.com" className="block text-white font-bold hover:text-vibrant-pink transition-colors text-sm uppercase tracking-widest">
                agenciabydo@gmail.com
              </a>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Localizada em Ribeirão Pires-SP. Atendimento em todo o Brasil.
              </p>
              <div className="pt-4">
                <a 
                  href="https://wa.me/551139553258?text=Olá,%20Herika!%20Vi%20a%20nova%20Home%20da%20Bydo%20e%20quero%20começar%20meu%20projeto."
                  className="bg-vibrant-pink text-white px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-royal-blue transition-all duration-300 shadow-xl"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] uppercase tracking-widest">
            © 2026 Bydo Marketing Digital. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest text-white/40">
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingElements = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/551139553258?text=Olá,%20Herika!%20Vi%20a%20nova%20Home%20da%20Bydo%20e%20quero%20começar%20meu%20projeto.";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-4">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#3A4D2E] text-white px-5 py-3 shadow-2xl hover:bg-[#2d3a1f] transition-all group overflow-hidden"
          >
            <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
              Voltar ao Topo <ArrowLeft size={14} className="rotate-90" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-[#25D366] text-white p-4 shadow-2xl flex items-center justify-center border-4 border-white/20"
      >
        <motion.div
           animate={{ scale: [1, 1.15, 1] }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageCircle size={32} fill="currentColor" />
        </motion.div>
        
        {/* Notification Bubble */}
        <div className="absolute top-0 right-0 bg-[#FF0000] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center border-2 border-white shadow-lg -mr-1 -mt-1">
          1
        </div>
      </motion.a>
    </div>
  );
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = (SERVICES_DATA as any[]).find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold text-royal-blue mb-4">Serviço não encontrado</h1>
        <p className="text-slate-500 mb-8">O serviço que você está procurando não existe ou foi removido.</p>
        <Button variant="primary" to="/">Voltar para a Home</Button>
      </div>
    );
  }

  // Specialized Layout for Sites and Landing Pages
  if (serviceId === "criacao-sites.html") {
    const portfolioImages = [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551033406-611cf0a28667?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    ];

    return (
      <div className="pt-24 min-h-screen bg-slate-50 overflow-hidden">
        {/* Container de Contenção de Largura (80%) */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto bg-white shadow-[0_0_100px_rgba(0,0,0,0.1)] min-h-screen">
          
          {/* 1. Primeira Seção (Sites e Landing Pages) - 2 Colunas */}
          <section className="bg-royal-blue pt-20 pb-20 md:pt-32 md:pb-32 relative overflow-hidden">
            <div className="container px-8 md:px-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Coluna da Esquerda: Conteúdo e Prova Social */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#FFD700" className="text-[#FFD700]" />
                    ))}
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1.1] tracking-tighter uppercase mb-6">
                    Sites e <br /> <span className="text-vibrant-pink">Landing Pages</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium mb-10 max-w-lg">
                    Transformamos sua presença digital em um <span className="text-white font-black">Ativo Próprio</span> de alta conversão.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <motion.a
                      href={WHATSAPP_URL}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-royal-blue px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-50 transition-colors flex items-center gap-3 group"
                    >
                      Ver projeto online
                      <ArrowRight size={16} className="text-vibrant-pink group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Coluna da Direita: Mockup Realista */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative flex items-center justify-center lg:justify-end"
                >
                  <div className="relative z-10 w-full max-w-[500px] shadow-2xl rounded-lg overflow-hidden border-4 border-slate-900">
                     <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Desktop" className="w-full h-auto" />
                     <div className="absolute -bottom-6 -left-6 w-24 md:w-40 z-20 shadow-2xl rounded-2xl border-4 border-slate-900 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" alt="Mobile" className="w-full h-auto" />
                     </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 2. Bloco de Texto SEO (Autoridade & Venda) */}
          <section className="py-24 px-8 md:px-24 text-center bg-white">
             <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display font-black text-royal-blue leading-[1.1] mb-8 uppercase">
                  Sua Sede Própria na Internet: <span className="text-vibrant-pink">Sites que Vendem</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Ter um site é sair do "terreno alugado" das redes sociais e construir um <span className="text-royal-blue font-black underline decoration-vibrant-pink decoration-4 underline-offset-4">Ativo Digital</span> que atrai clientes automaticamente enquanto você vive sua vida. Na Bydo Marketing, desenvolvemos Landing Pages de alta performance, focadas em transformar visitantes em clientes qualificados. Nossas páginas são 100% otimizadas para o Google e responsivas para qualquer dispositivo.
                </p>
             </div>
          </section>

          {/* 3. Grade de Portfólio (Estática 3x2) */}
          <section className="py-20 bg-slate-50 px-8 md:px-24">
             <div className="container">
                <div className="mb-16 text-center">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-royal-blue leading-tight mb-6">
                    Design de Performance: Projetos que Unem Estética e Resultados
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 font-normal max-w-[80%] mx-auto">
                    Muito mais do que páginas bonitas, entregamos estruturas profissionais, leves e seguras. Nossos sites são 100% responsivos, adaptando-se perfeitamente a qualquer dispositivo para garantir que sua marca transmita autoridade em qualquer tela
                  </p>
                </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                   {[
                     { name: 'Advocacia Especializada', img: '/projects/landing_page_advocacia_1774142469182.png' },
                     { name: 'Odontologia de Performance', img: '/projects/landing_page_odontologia_1774142482315.png' },
                     { name: 'Estética e HOF', img: '/projects/landing_page_hof_1774142494636.png' },
                     { name: 'Cirurgia Plástica Especializada', img: '/projects/landing_page_plastica_1774142519890.png' },
                     { name: 'Segurança e CFTV', img: '/projects/landing_page_cftv_1774142532610.png' },
                     { name: 'Serralheria e Portões', img: '/projects/landing_page_serralheria.png' }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-none overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 group"
                     >
                        <div className="aspect-[3/4] overflow-hidden bg-slate-100 rounded-none">
                           <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="py-6 bg-white text-left">
                           <p className="text-royal-blue font-normal text-lg tracking-tight">{item.name}</p>
                        </div>
                     </motion.div>
                   ))}
                </div>

                <div className="mt-20 text-center">
                  <Button 
                    variant="primary" 
                    className="px-12 py-5 text-sm mx-auto"
                    href="https://wa.me/551139553258?text=Olá,%20Bydo%20Marketing!%20Vi%20seus%20projetos%20no%20site%20e%20quero%20um%20orçamento%20para%20minha%20Landing%20Page."
                  >
                    Falar com a Bydo Marketing
                  </Button>
                </div>
             </div>
          </section>

          <CompactFooter />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-royal-blue font-bold uppercase tracking-widest text-xs mb-12 hover:text-vibrant-pink transition-colors"
        >
          <ArrowLeft size={16} /> Voltar
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-vibrant-pink p-3 bg-royal-blue/5 rounded-md">
                {service.icon}
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black text-royal-blue leading-[1.05] tracking-tighter uppercase">
                {service.title}
              </h1>
            </div>
            <p className="text-2xl text-slate-600 leading-relaxed mb-10 font-medium">
              {service.fullDescription}
            </p>
            <div className="p-10 bg-royal-blue text-white rounded-3xl shadow-2xl mb-12 border border-white/10">
              <h3 className="text-2xl font-black uppercase tracking-widest mb-6 border-b border-white/20 pb-4">Por que investir nisso?</h3>
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                {service.benefits}
              </p>
            </div>
            <Button variant="primary" className="w-full sm:w-fit px-12 py-5 text-base" href={WHATSAPP_URL}>
              Quero este serviço para minha empresa
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sticky top-32"
          >
            <div className="bg-white p-4 shadow-2xl rounded-md mb-12">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[500px] object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-slate-50 p-8 rounded-md border border-slate-100">
              <h3 className="text-xl font-bold text-royal-blue mb-6 uppercase tracking-tight">O que está incluso:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-vibrant-pink shrink-0" size={18} />
                    <span className="text-slate-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* New Internal-only Section: Process */}
        {service.process && (
          <div className="mb-24 pt-24 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-royal-blue mb-12 text-center">Como funciona o nosso processo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((p: any, idx: number) => (
                <div key={idx} className="bg-white p-8 rounded-md border border-slate-100 relative group hover:bg-royal-blue transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="text-5xl font-black text-royal-blue/5 absolute top-4 right-4 group-hover:text-white/10 transition-colors">{p.step}</div>
                  <h4 className="text-xl font-bold text-royal-blue mb-4 group-hover:text-white transition-colors">{p.title}</h4>
                  <p className="text-slate-500 group-hover:text-white/70 transition-colors leading-relaxed text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Services */}
        <div className="pt-24 border-t border-slate-100">
          <h2 className="text-3xl font-display font-bold text-royal-blue mb-12 text-center">Outras Soluções</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_DATA.filter(s => s.id !== serviceId).slice(0, 3).map((s, i) => (
              <Link key={i} to={`/servicos/${s.id}`} className="group">
                <div className="bg-white p-8 border border-slate-100 shadow-sm rounded-md transition-all duration-300 group-hover:border-vibrant-pink group-hover:shadow-xl h-full flex flex-col">
                  <div className="text-royal-blue mb-6 group-hover:text-vibrant-pink transition-colors">
                    {s.icon}
                  </div>
                  <h4 className="text-xl font-bold text-royal-blue mb-4 leading-tight group-hover:text-vibrant-pink transition-colors">{s.title}</h4>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow">{s.shortDescription}</p>
                  <div className="flex items-center gap-2 text-vibrant-pink font-bold text-xs uppercase tracking-widest mt-auto">
                    Ver detalhes <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-royal-blue p-12 rounded-md text-center text-white">
          <h2 className="text-3xl font-display font-bold mb-6">Pronto para transformar sua empresa?</h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto">
            Não deixe sua presença digital para depois. Vamos estruturar sua comunicação agora e atrair os clientes que seu negócio merece.
          </p>
          <Button variant="primary" className="mx-auto" href={WHATSAPP_URL}>
            Falar com a Bydo no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

const CompactFooter = () => (
  <footer className="bg-white py-12 border-t border-slate-100">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <Link to="/" className="inline-block mb-4">
            <span className="text-2xl font-display font-extrabold text-royal-blue tracking-tighter">
              Bydo<span className="text-vibrant-pink">.</span>
            </span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed">
            <span className="font-bold text-royal-blue">Sobre:</span> Bydo Marketing - Estrategista Digital e Designer com mais de 4 anos de experiência transformando negócios locais em autoridades.
          </p>
        </div>
        <div className="md:text-right">
          <h4 className="text-royal-blue font-bold uppercase tracking-widest text-[10px] mb-2 opacity-60">Localização</h4>
          <p className="text-slate-500 text-sm">
            Localizada em Ribeirão Pires - SP | Atendimento em todo o Brasil.
          </p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-[10px] uppercase tracking-widest">
          © 2026 Bydo Marketing Digital. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

const GoogleMeuNegocioPage = () => {
  const navigate = useNavigate();
  const [sliderIndex, setSliderIndex] = useState(1);

  const solutions = [
    {
      num: "01",
      title: "Sair da Invisibilidade",
      text: "Garantimos que você ou sua empresa apareçam para quem pesquisa pelo seu serviço ou produto. Estar presente onde todos buscam é o primeiro passo para não ser substituído pela concorrência.",
      icon: <Search className="w-7 h-7" />,
    },
    {
      num: "02",
      title: "Presença Profissional",
      text: "Não basta ser bom, é preciso parecer ser bom. Construímos um perfil fortemente apresentável, com todas as informações e títulos estratégicos que diferenciam seu negócio do amadorismo.",
      icon: <Trophy className="w-7 h-7" />,
    },
    {
      num: "03",
      title: "Gestão de Notoriedade",
      text: "Ficamos responsáveis por cuidar de toda a performance e atualizações constantes. Expertise e estratégia para que você seja a escolha óbvia, sem precisar se preocupar com nada.",
      icon: <Target className="w-7 h-7" />,
    },
  ];


  const cases = [
    { text: "+552% em visualizações de pesquisa em 30 dias.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=750" },
    { text: "+1.105% em visualizações de fotos e chamadas.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=750" },
    { text: "Dobro de agendamentos diretos via WhatsApp.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=750" },
    { text: "85% mais pedidos de rota para a loja física.", image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=600&h=750" },
    { text: "Top 1 para buscas \"perto de mim\" no segmento.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=750" },
  ];

  const benefits = [
    { icon: <Search className="w-6 h-6" />, label: "Apareça nas buscas todos os dias" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Aumento da notoriedade" },
    { icon: <Zap className="w-6 h-6" />, label: "Sem gastar com anúncios" },
    { icon: <Trophy className="w-6 h-6" />, label: "União Google + Instagram" },
  ];

  const prev = () => setSliderIndex(i => (i - 1 + cases.length) % cases.length);
  const next = () => setSliderIndex(i => (i + 1) % cases.length);

  const getSlideStyle = (idx: number) => {
    const total = cases.length;
    const diff = ((idx - sliderIndex) % total + total) % total;
    const normalized = diff > total / 2 ? diff - total : diff;
    const abs = Math.abs(normalized);
    if (abs === 0) return { zIndex: 10, scale: 1, rotateY: 0, opacity: 1, x: 0 };
    if (abs === 1) return { zIndex: 5, scale: 0.82, rotateY: normalized > 0 ? -28 : 28, opacity: 0.55, x: normalized > 0 ? 260 : -260 };
    return { zIndex: 1, scale: 0.66, rotateY: normalized > 0 ? -48 : 48, opacity: 0.2, x: normalized > 0 ? 480 : -480 };
  };

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-royal-blue">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-vibrant-pink/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container pt-28 pb-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-[10px] mb-12 hover:text-white transition-colors"
          >
            <ArrowLeft size={13} /> Voltar
          </button>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* ── Left — copy ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-[2px] bg-vibrant-pink" />
                <span className="text-vibrant-pink font-bold uppercase tracking-[0.2em] text-[10px]">Google Meu Negócio</span>
              </div>
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-display font-bold text-white leading-[1.12] mb-5">
                No Google, quem não é visto é{" "}
                <span className="text-vibrant-pink">substituído pelo concorrente agora mesmo.</span>
              </h1>
              <h3 className="text-lg font-display font-semibold text-white/85 leading-snug mb-4 max-w-md">
                Transformamos o perfil de você ou da sua empresa em uma apresentação profissional que passa mais confiança e percepção de valor.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-md">
                Seja encontrado ao pesquisarem pelo seu serviço ou produto, sem que o cliente precise saber o seu nome. Nossa metodologia foca no posicionamento orgânico de alta relevância, permitindo que você ou sua empresa apareçam para quem procura o que você oferece, no momento exato da decisão, sem a necessidade de investir em anúncios ou tráfego pago.
              </p>
              <Button variant="primary" href={WHATSAPP_URL} className="w-full sm:w-fit">
                Quero ser encontrado pelos clientes
              </Button>
            </motion.div>

            {/* ── Right — laptop + phone composition ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative flex items-end justify-center"
              style={{ minHeight: 380 }}
            >
              {/* Google G logo — floating top-right */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-4 z-30"
              >
                <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-100">
                  <span className="text-base font-black" style={{background:"linear-gradient(135deg,#4285F4,#EA4335,#FBBC05,#34A853)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>G</span>
                </div>
              </motion.div>

              {/* ── LAPTOP ── */}
              <motion.div
                animate={{ rotateY: [-4, 4, -4], rotateX: [2, -1, 2] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", perspective: 900 }}
                className="relative"
              >
                {/* Screen */}
                <div className="w-[320px] md:w-[380px] bg-slate-900 rounded-xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
                  {/* Bezel top */}
                  <div className="flex justify-center pt-2 pb-1">
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                  </div>
                  {/* Screen content */}
                  <div className="mx-2 mb-2 bg-[#f8f9fa] rounded-lg overflow-hidden">
                    {/* Browser bar */}
                    <div className="bg-white flex items-center gap-2 px-3 py-1.5 border-b border-slate-100">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 bg-slate-100 rounded-full px-3 py-0.5 text-[8px] text-slate-500 flex items-center gap-1">
                        <Globe size={7} className="text-slate-400" />
                        google.com/maps
                      </div>
                    </div>
                    {/* Google Maps-like layout */}
                    <div className="flex h-[168px]">
                      {/* sidebar */}
                      <div className="w-[140px] bg-white border-r border-slate-100 p-2 overflow-hidden">
                        <div className="text-[7px] text-slate-500 mb-1.5">Resultados para "<span className="font-bold text-royal-blue">serviço perto</span>"</div>
                        {/* Result 1 — highlighted */}
                        <div className="bg-[#e8f0fe] border border-royal-blue/20 rounded-lg p-1.5 mb-1.5">
                          <div className="font-bold text-[8px] text-royal-blue leading-tight">Seu Negócio Pro</div>
                          <div className="flex items-center gap-0.5 my-0.5">
                            {[1,2,3,4,5].map(s=><span key={s} className="text-yellow-400 text-[7px]">★</span>)}
                            <span className="text-[6px] text-slate-400">(312)</span>
                          </div>
                          <div className="text-[6px] text-green-600 font-semibold">Aberto · 0,3 km</div>
                        </div>
                        {/* Result 2 */}
                        <div className="bg-slate-50 rounded-lg p-1.5 mb-1">
                          <div className="font-bold text-[7px] text-slate-600 leading-tight">Concorrente</div>
                          <div className="flex items-center gap-0.5 my-0.5">
                            {[1,2,3].map(s=><span key={s} className="text-yellow-400 text-[7px]">★</span>)}
                            {[4,5].map(s=><span key={s} className="text-slate-300 text-[7px]">★</span>)}
                            <span className="text-[6px] text-slate-400">(41)</span>
                          </div>
                          <div className="text-[6px] text-slate-400">1,2 km</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-1.5">
                          <div className="font-bold text-[7px] text-slate-600 leading-tight">Outro concorrente</div>
                          <div className="flex items-center gap-0.5 my-0.5">
                            {[1,2,3,4].map(s=><span key={s} className="text-yellow-400 text-[7px]">★</span>)}
                            {[5].map(s=><span key={s} className="text-slate-300 text-[7px]">★</span>)}
                            <span className="text-[6px] text-slate-400">(88)</span>
                          </div>
                          <div className="text-[6px] text-slate-400">2,5 km</div>
                        </div>
                      </div>
                      {/* map area */}
                      <div className="flex-1 relative bg-gradient-to-br from-[#e8f0fe] via-[#dff0e8] to-[#e8f5e9] overflow-hidden">
                        <div className="absolute inset-0" style={{backgroundImage:"linear-gradient(rgba(0,51,153,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,51,153,0.05) 1px,transparent 1px)",backgroundSize:"14px 14px"}} />
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/80" />
                        <div className="absolute left-1/3 top-0 bottom-0 w-[2px] bg-white/80" />
                        {/* Primary pin */}
                        <div className="absolute top-[38%] left-[45%] -translate-x-1/2 -translate-y-full z-10">
                          <div className="w-5 h-5 bg-vibrant-pink rounded-full border-2 border-white shadow-md flex items-center justify-center">
                            <MapPin size={8} className="text-white" fill="currentColor" />
                          </div>
                          <div className="w-1.5 h-1.5 bg-vibrant-pink/30 rounded-full mx-auto" />
                        </div>
                        <div className="absolute top-2 left-8 w-2 h-2 bg-blue-500 rounded-full border border-white opacity-60" />
                        <div className="absolute bottom-6 right-6 w-2 h-2 bg-blue-500 rounded-full border border-white opacity-60" />
                      </div>
                    </div>
                  </div>
                  {/* Laptop base */}
                  <div className="h-3 bg-slate-800 rounded-b-xl" />
                </div>
                {/* Keyboard tray */}
                <div className="w-[360px] md:w-[420px] h-3 bg-slate-700 rounded-b-xl mx-auto shadow-md" style={{marginTop:-1}} />
              </motion.div>

              {/* ── PHONE — overlapping, offset right-bottom ── */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-0 bottom-0 z-20"
              >
                <div className="w-[110px] bg-slate-950 rounded-[24px] p-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10">
                  <div className="bg-[#f8f9fa] rounded-[20px] overflow-hidden">
                    {/* notch */}
                    <div className="flex justify-center pt-1.5 pb-1">
                      <div className="w-8 h-1 bg-slate-700 rounded-full opacity-40" />
                    </div>
                    {/* search */}
                    <div className="px-1.5 pb-1">
                      <div className="bg-white rounded-lg px-1.5 py-1 flex items-center gap-1 border border-slate-200 shadow-sm">
                        <Search size={6} className="text-slate-400" />
                        <span className="text-[6px] text-slate-400">serviço perto…</span>
                      </div>
                    </div>
                    {/* mini map */}
                    <div className="mx-1.5 mb-1 h-10 bg-gradient-to-br from-[#e8f0fe] to-[#dff0e8] rounded-lg relative border border-white overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                        <div className="w-2.5 h-2.5 bg-vibrant-pink rounded-full border border-white shadow-sm flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                    {/* gmb card */}
                    <div className="mx-1.5 mb-1.5 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                      <div className="flex h-6 gap-px">
                        <div className="flex-1 bg-gradient-to-br from-blue-200 to-purple-200" />
                        <div className="flex-1 bg-gradient-to-br from-green-200 to-teal-200" />
                        <div className="flex-1 bg-gradient-to-br from-orange-100 to-yellow-200" />
                      </div>
                      <div className="p-1.5">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-4 h-4 bg-royal-blue rounded flex items-center justify-center shrink-0">
                            <span className="text-white font-black text-[6px]">B</span>
                          </div>
                          <div>
                            <div className="font-bold text-[7px] text-slate-900 leading-tight">Seu Negócio</div>
                            <div className="flex gap-px">
                              {[1,2,3,4,5].map(s=><span key={s} className="text-yellow-400 text-[6px]">★</span>)}
                            </div>
                          </div>
                        </div>
                        <div className="text-[5.5px] text-green-600 font-semibold mb-1">Aberto · Fecha às 19h</div>
                        <div className="grid grid-cols-3 gap-0.5">
                          <div className="bg-[#e8f0fe] text-[5px] text-royal-blue font-bold py-1 rounded text-center">📞<br/>Ligar</div>
                          <div className="bg-[#e8f0fe] text-[5px] text-royal-blue font-bold py-1 rounded text-center">🗺<br/>Rota</div>
                          <div className="bg-[#e8f7f0] text-[5px] text-green-700 font-bold py-1 rounded text-center">💬<br/>Zap</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── Contrast info cards ── */}
              {/* Card 1 — white */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-8 z-30 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100 min-w-[120px]"
              >
                <div className="text-[7px] uppercase tracking-widest font-bold text-slate-400 mb-1">Posição atual</div>
                <div className="text-xl font-black text-royal-blue leading-none">#1</div>
                <div className="text-[8px] text-slate-500 font-semibold mt-0.5">Local Pack · Google</div>
              </motion.div>

              {/* Card 2 — light blue tint */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -left-2 bottom-28 z-30 bg-[#e8f0fe] rounded-2xl shadow-lg px-4 py-3 border border-blue-100 min-w-[130px]"
              >
                <div className="text-[7px] uppercase tracking-widest font-bold text-royal-blue/50 mb-1">Avaliação</div>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-black text-royal-blue leading-none">4.9</span>
                  <span className="text-yellow-400 text-base">★</span>
                </div>
                <div className="text-[8px] text-slate-500 font-semibold mt-0.5">312 avaliações</div>
              </motion.div>

              {/* Card 3 — slate-50 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-28 top-4 z-30 bg-slate-800 rounded-2xl shadow-lg px-4 py-3 border border-white/10 min-w-[120px]"
              >
                <div className="text-[7px] uppercase tracking-widest font-bold text-white/40 mb-1">Visibilidade</div>
                <div className="text-sm font-black text-vibrant-pink leading-none">+552%</div>
                <div className="text-[8px] text-white/60 font-semibold mt-0.5">buscas em 30 dias</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Gestão Estratégica do GMB ── */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column — Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:pr-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-vibrant-pink" />
                <span className="text-vibrant-pink font-extrabold uppercase tracking-[0.3em] text-[12px] md:text-sm">O Conceito</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-royal-blue leading-[1.05] tracking-tighter mb-8">
                O que é a Gestão Estratégica do{" "}
                <span className="text-vibrant-pink">Google Meu Negócio?</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Não é apenas um cadastro; é a construção da sua presença profissional na rua mais movimentada do mundo. É garantir que, quando buscarem pelo seu serviço ou produto, você seja a escolha óbvia.
              </p>
            </motion.div>
            {/* Right Column — 4 Floating Contrast Boxes */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 relative">
              {/* Column 1 */}
              <div className="space-y-4 md:space-y-6">
                
                {/* Caixa 01: Contraste Forte */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="bg-royal-blue text-white p-6 md:p-8 rounded-[24px] shadow-xl border border-white/10 relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 backdrop-blur-sm">
                    <Search size={20} className="text-white" />
                  </div>
                  <h4 className="font-display font-bold text-xl mb-3 text-white">
                    Encontrabilidade por Serviço
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Fazemos com que você ou sua empresa apareçam para quem pesquisa pelo que você oferece, e não apenas pelo seu nome.
                  </p>
                </motion.div>

                {/* Caixa 03: Destaque */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white text-slate-800 p-6 md:p-8 rounded-[24px] shadow-[0_20px_50px_rgba(0,51,153,0.08)] border border-slate-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-vibrant-pink/5 rounded-bl-[100px] pointer-events-none" />
                  <div className="w-10 h-10 bg-vibrant-pink/10 rounded-xl flex items-center justify-center mb-5">
                    <Smartphone size={20} className="text-vibrant-pink" />
                  </div>
                  <h4 className="font-display font-bold text-xl mb-3 text-royal-blue">
                    Acesso Sem Barreiras
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Facilitamos a jornada do cliente: ele chega ao seu WhatsApp ou site sem precisar sequer salvar o seu contato.
                  </p>
                </motion.div>
                
              </div>

              {/* Column 2 (Offset visually) */}
              <div className="space-y-4 md:space-y-6 sm:mt-12">
                
                {/* Caixa 02: Tom Suave */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-50 text-slate-800 p-6 md:p-8 rounded-[24px] shadow-sm border border-slate-200"
                >
                  <div className="w-10 h-10 bg-royal-blue/5 rounded-xl flex items-center justify-center mb-5">
                    <Star size={20} className="text-royal-blue" />
                  </div>
                  <h4 className="font-display font-bold text-xl mb-3 text-royal-blue">
                    Percepção de Valor
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Transformamos sua ficha em uma vitrine de alta confiança, com todas as informações possíveis para gerar credibilidade imediata.
                  </p>
                </motion.div>

                {/* Caixa 04: Tom Escuro */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-900 text-white p-6 md:p-8 rounded-[24px] shadow-2xl border border-slate-800 relative overflow-hidden"
                >
                  <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
                  <div className="relative z-10 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-5 border border-white/10">
                    <BarChart size={20} className="text-vibrant-pink" />
                  </div>
                  <h4 className="relative z-10 font-display font-bold text-xl mb-3 text-white">
                    Notoriedade e Relevância
                  </h4>
                  <p className="relative z-10 text-white/60 text-sm leading-relaxed">
                    Estratégias de SEO Local para manter seu negócio em evidência constante e se diferenciar da concorrência amadora.
                  </p>
                </motion.div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Loss-Trigger Consciousness ── */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container relative z-10">
          
          {/* Top Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="w-16 h-16 rounded-full bg-vibrant-pink/10 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-vibrant-pink w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-royal-blue leading-[1.15]">
              O que você sentiria se soubesse que alguém te procurou para contratar seu serviço e{" "}
              <span className="text-vibrant-pink">não te encontrou?</span>
            </h2>
          </motion.div>

          {/* Two Column Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Visual Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex justify-center items-center h-[500px]"
            >
              {/* Organic background blob */}
              <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-blue-100 to-vibrant-pink/10 rounded-[100px] rotate-12 blur-2xl opacity-70 pointer-events-none" />

              {/* Phone Mockup */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[260px] bg-slate-900 rounded-[35px] p-2 shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-slate-800"
              >
                <div className="bg-white rounded-[30px] overflow-hidden h-[480px] border border-slate-200 flex flex-col pt-3">
                  {/* Notch */}
                  <div className="flex justify-center mb-2">
                    <div className="w-16 h-1.5 bg-slate-200 rounded-full" />
                  </div>

                  {/* Google Search Lookalike */}
                  <div className="px-3 pb-2">
                    <div className="bg-slate-100 rounded-full px-3 py-1.5 flex items-center gap-2">
                      <Search size={10} className="text-slate-400" />
                      <div className="w-20 h-1.5 bg-slate-300 rounded-full" />
                    </div>
                  </div>

                  {/* Map area */}
                  <div className="h-28 bg-gradient-to-br from-[#e8f0fe] to-[#dff0e8] relative border-y border-slate-100">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                      <div className="w-4 h-4 bg-vibrant-pink rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                        <MapPin size={8} className="text-white" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  {/* Profile Cards */}
                  <div className="p-3 bg-slate-50 flex-1 space-y-2">
                    {/* Top Result - Client */}
                    <div className="bg-white rounded-xl p-3 border border-royal-blue/20 shadow-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-royal-blue" />
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-royal-blue rounded-md flex items-center justify-center shrink-0">
                          <span className="text-white font-black text-[8px]">Você</span>
                        </div>
                        <div>
                          <div className="w-16 h-2 bg-slate-200 rounded-full mb-1" />
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} size={6} className="text-yellow-400" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-1 mt-3">
                        <div className="h-4 bg-[#e8f0fe] rounded-md" />
                        <div className="h-4 bg-[#e8f0fe] rounded-md" />
                      </div>
                    </div>

                    {/* Generic Result */}
                    <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm opacity-50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-slate-100 rounded-md shrink-0" />
                        <div>
                          <div className="w-14 h-2 bg-slate-100 rounded-full mb-1" />
                          <div className="flex gap-0.5">
                            {[1, 2, 3].map((s) => (
                              <Star key={s} size={6} className="text-yellow-400" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1 (Stars) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 right-0 md:-right-8 z-20 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-50"
              >
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex justify-center items-center">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-800 leading-none">5.0</div>
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Avaliações</div>
                </div>
              </motion.div>

              {/* Floating Element 2 (Position) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-24 left-0 md:-left-8 z-20 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-50"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex justify-center items-center">
                  <MapPin size={16} className="text-green-600" fill="currentColor" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-800 leading-none">Topo</div>
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">das buscas</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: 3 Text Blocks */}
            <div className="flex flex-col gap-5">
              
              {/* Bloco 1 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-royal-blue/20"
              >
                <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center shrink-0">
                  <Search size={20} />
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  É isso que acontece todos os dias. Enquanto você lê isso, alguém <strong>busca o que você oferece</strong> e acaba encontrando seu <strong>concorrente</strong>.
                </p>
              </motion.div>

              {/* Bloco 2 - Destaque */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.15 }}
                className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-royal-blue text-white shadow-xl shadow-royal-blue/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
                <div className="relative z-10 w-12 h-12 bg-white/10 text-vibrant-pink rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/5">
                  <Star size={20} fill="currentColor" className="opacity-80" />
                </div>
                <p className="relative z-10 text-white/90 text-[15px] leading-relaxed">
                  Não basta ser bom, <strong>é preciso parecer ser bom</strong>. Garantimos que sua vitrine digital atraia pelo olhar e <strong>gere credibilidade imediata</strong>.
                </p>
              </motion.div>

              {/* Bloco 3 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-vibrant-pink/20"
              >
                <div className="w-12 h-12 bg-vibrant-pink/5 text-vibrant-pink rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  Transformamos o "galpão abandonado" em uma apresentação de expertise, facilitando o <strong>contato sem barreiras</strong> até o seu WhatsApp.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Solutions ── */}
      <section className="py-28 bg-white">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-vibrant-pink" />
              <span className="text-vibrant-pink font-bold uppercase tracking-[0.2em] text-[10px]">Nossas Soluções</span>
              <div className="w-6 h-[2px] bg-vibrant-pink" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-royal-blue max-w-4xl mx-auto leading-tight">
              Criamos uma apresentação profissional que <span className="text-vibrant-pink">transmite confiança e autoridade imediata</span> e colocamos <span className="text-vibrant-pink">você ou sua empresa</span> na rua mais movimentada do mundo.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,51,153,0.12)" }}
                className="relative bg-white border border-slate-100 rounded-2xl p-10 shadow-sm transition-all duration-500 group overflow-hidden"
              >
                {/* Number watermark */}
                <div className="absolute top-6 right-6 text-7xl font-black text-royal-blue/5 group-hover:text-royal-blue/10 transition-colors select-none">{sol.num}</div>
                <div className="w-14 h-14 rounded-2xl bg-royal-blue/5 group-hover:bg-royal-blue group-hover:text-white text-royal-blue flex items-center justify-center mb-8 transition-all duration-500">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-royal-blue mb-4 group-hover:text-vibrant-pink transition-colors">{sol.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{sol.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D Depth Slider ── */}
      <section className="py-28 bg-slate-900 overflow-hidden">
        <div className="container mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-vibrant-pink" />
              <span className="text-vibrant-pink/80 font-bold uppercase tracking-[0.2em] text-[10px]">Cases Reais</span>
              <div className="w-6 h-[2px] bg-vibrant-pink" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-3xl mx-auto leading-tight">
              Veja como ficam nossas{" "}
              <span className="text-vibrant-pink">fichas otimizadas profissionalmente.</span>
            </h2>
            <p className="text-white/50 mt-6 max-w-2xl mx-auto leading-relaxed text-base">
              Potencializamos a experiência do cliente para que ele entenda o seu valor antes mesmo do primeiro contato. Um perfil fortemente apresentável é o que separa uma simples pesquisa de um fechamento real.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center" style={{ height: 560, perspective: "1200px" }}>
          {cases.map((c, idx) => {
            const s = getSlideStyle(idx);
            return (
              <motion.div
                key={idx}
                animate={{ scale: s.scale, rotateY: s.rotateY, opacity: s.opacity, x: s.x }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                style={{ zIndex: s.zIndex, position: "absolute", transformStyle: "preserve-3d" }}
                onClick={() => setSliderIndex(idx)}
                className="cursor-pointer"
              >
                <div className="w-[220px] md:w-[280px] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                  <img
                    src={c.image}
                    alt={c.text}
                    className="w-full object-cover"
                    style={{ aspectRatio: "1080/1350", height: "350px", objectFit: "cover" }}
                  />
                  <div className="bg-white p-5">
                    <p className="text-royal-blue font-bold text-sm leading-snug">{c.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-2">
            {cases.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setSliderIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === sliderIndex ? "bg-vibrant-pink w-6" : "bg-white/30"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="container mt-12 text-center">
          <Button variant="primary" href={WHATSAPP_URL}>
            Quero ter resultados assim no meu negócio
          </Button>
        </div>
      </section>

      {/* ── Plans / Packages (Sales Cards Design 5.5 - High-Visibility Vertical) ── */}
      <section className="py-24 bg-royal-blue relative overflow-hidden">
        {/* Luxury Background Layers */}
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-royal-blue via-royal-blue/95 to-royal-blue pointer-events-none" />
        
        <div className="container relative z-10 w-[95%] md:w-[82%] mx-auto">
          {/* Header Section Compact */}
          <div className="text-center mb-12 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-display font-black text-white leading-[1.05] tracking-tighter uppercase mb-4">
              Nossas <span className="text-vibrant-pink">Soluções</span> de Performance
            </h2>
            <p className="text-base md:text-xl font-display font-medium text-white/70">
              Criação, Atualização e Melhorias para ter mais destaque e relevância nas pesquisas do Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 01 - Incluir no Mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden flex flex-col shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/20"
            >
              <div className="bg-[#FF1493] py-6 px-4 text-center">
                <h3 className="text-royal-blue font-display font-[1000] text-[22px] md:text-[26px] uppercase leading-tight tracking-tight">
                  INCLUIR NO MAPA / <br /> CRIAR CADASTRO
                </h3>
              </div>
              
              <div className="p-6 md:p-10 flex flex-col gap-8 flex-grow">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Ideal para:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Empresas e profissionais invisíveis no Google.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Cadastro Profissional:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Sua empresa na rua mais movimentada do mundo com confiança e autoridade imediata.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Configuração Completa:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Preenchemos cada detalhe da sua ficha hoje vazia ou trancada.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Localização Estratégica:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Sua empresa visível exatamente onde o seu cliente está procurando.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Acesso Direto:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Botões configurados para o cliente traçar rota ou te chamar no WhatsApp.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <a href="https://wa.me/551139553258?text=Olá,%20Bydo%20Marketing!%20Vi%20sua%20página%20e%20quero%20informações%20sobre%20como%20incluir%20meu%20perfil%20no%20Google.%20Como%20funciona?" className="w-full bg-[#FF1493] hover:bg-[#D4127A] text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:-translate-y-1 uppercase text-sm tracking-[0.2em] flex items-center justify-center">
                    Falar com a Bydo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 02 - Atualização Única (Faxina) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden flex flex-col shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/20"
            >
              <div className="bg-[#FF1493] py-6 px-4 text-center">
                <h3 className="text-royal-blue font-display font-[1000] text-[22px] md:text-[26px] uppercase leading-tight tracking-tight">
                  ATUALIZAÇÃO ÚNICA <br /> (FAXINA)
                </h3>
              </div>
              
              <div className="p-6 md:p-10 flex flex-col gap-8 flex-grow">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Ideal para:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Perfis abandonados, trancados ou incompletos.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Apresentação Profissional:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Organizamos seu perfil parado e o transformamos em um Ativo Digital.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Destravamento de Ficha:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Arrumamos cada detalhe técnico para que você seja encontrado por quem quer comprar.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Vitrine de Autoridade:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Inserção de fotos e posts estratégicos que chamam a atenção do cliente.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Inteligência de Busca:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Ajustamos sua ficha para responder exatamente ao que o seu cliente busca.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <a href="https://wa.me/551139553258?text=Olá,%20Herika!%20Vi%20sua%20página,%20eu%20já%20tenho%20um%20perfil%20no%20Google%20e%20preciso%20otimizar%20as%20informações.%20Pode%20me%20ajudar?" className="w-full bg-[#FF1493] hover:bg-[#D4127A] text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:-translate-y-1 uppercase text-sm tracking-[0.2em] flex items-center justify-center">
                    Falar com a Bydo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 03 - Gestão Mensal (Estratégia) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[32px] overflow-hidden flex flex-col shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/20"
            >
              <div className="bg-[#FF1493] py-6 px-4 text-center">
                <h3 className="text-royal-blue font-display font-[1000] text-[22px] md:text-[26px] uppercase leading-tight tracking-tight">
                  GESTÃO MENSAL <br /> (ESTRATÉGIA)
                </h3>
              </div>
              
              <div className="p-6 md:p-10 flex flex-col gap-8 flex-grow">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Ideal para:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Perfis que desejam manter a presença ativa e em busca das melhores posições através de atualizações constantes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Planejamento de Elite:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Conteúdo focado em tornar seu negócio a escolha óbvia e relevante.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Atração Diária:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Conteúdo estratégico para atrair clientes todos os dias, sem depender de redes sociais.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Reputação Local:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Gestão ativa de avaliações para construir confiança inquestionável.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={22} className="text-[#FF1493] shrink-0 mt-1" strokeWidth={4} />
                    <div className="flex flex-col">
                      <p className="text-royal-blue font-black text-lg md:text-xl leading-tight mb-1">Efeito Bola de Neve:</p>
                      <p className="text-black font-medium text-base md:text-[17px] leading-tight">Manutenção da sua relevância no topo das buscas de forma previsível.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <a href="https://wa.me/551139553258?text=Olá,%20Bydo!%20Vi%20sua%20página%20e%20gostaria%20de%20contratar%20a%20gestão%20mensal%20para%20o%20meu%20perfil%20no%20Google.%20Como%20podemos%20começar?" className="w-full bg-[#FF1493] hover:bg-[#D4127A] text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:-translate-y-1 uppercase text-sm tracking-[0.2em] flex items-center justify-center">
                    Falar com a Bydo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16 px-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-vibrant-pink" />
              <span className="text-vibrant-pink font-extrabold uppercase tracking-[0.3em] text-[12px] md:text-sm">Benefícios Diretos</span>
              <div className="w-8 h-[2px] bg-vibrant-pink" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-royal-blue max-w-4xl mx-auto leading-[1.05] tracking-tighter">
              O que muda no seu negócio
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center group hover:border-vibrant-pink transition-all duration-300"
              >
                <div className="w-14 h-14 bg-royal-blue/5 group-hover:bg-vibrant-pink group-hover:text-white text-royal-blue rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300">
                  {b.icon}
                </div>
                <p className="font-bold text-royal-blue text-sm leading-snug">{b.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Action Footer / CTA ── */}
      <section className="bg-royal-blue py-24">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-white max-w-4xl mx-auto leading-[1.05] tracking-tighter mb-8">
              O Google é a maior ferramenta de pesquisas do mundo.{" "}
              <span className="text-vibrant-pink">Você ou sua empresa já aparece para quem te procura?</span>
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Não deixe que a falta de otimização técnica esconda o valor do seu trabalho. Colocamos sua marca diretamente à frente do cliente ideal.
            </p>
            <Button variant="primary" href={WHATSAPP_URL} className="mx-auto">
              Fale com um consultor agora
            </Button>
          </motion.div>
        </div>
      </section>

      <CompactFooter />
    </div>
  );
};

const BLOG_POSTS = [
  {
    title: "O Impacto Visual de Banners e Outdoors na Rua Mais Movimentada",
    summary: "Como materiais físicos de alta qualidade (panfletos e banners) criam confiança imediata e reforçam sua presença local.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    category: "Design Gráfico"
  },
  {
    title: "Por que um Logotipo Profissional é o seu Maior Ativo de Marca",
    summary: "Saia do amadorismo com uma identidade visual que diz quem você é e como resolve o problema do seu cliente.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    category: "Identidade Visual"
  },
  {
    title: "Sua Sede Própria: Por que você precisa sair do Terreno Alugado",
    summary: "Entenda por que um site otimizado é o sistema que atrai clientes automaticamente enquanto você vive sua vida.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    category: "Sites"
  },
  {
    title: "Pare de ser apenas visto e comece a ser PROCURADO no Google",
    summary: "Aprenda a diferença entre empurrar conteúdo e ser a solução exata para quem já decidiu comprar.",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop",
    category: "Google SEO"
  },
  {
    title: "Como usar as Redes Sociais sem ser Escravo do Algoritmo",
    summary: "Use o Instagram e TikTok para alimentar o desejo, mas mantenha sua base de faturamento no seu Ativo Digital.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
    category: "Redes Sociais"
  },
  {
    title: "De Galpão Abandonado a Máquina de Vendas no Google",
    summary: "Como atualizações constantes na sua ficha garantem relevância e te mantêm no topo das buscas.",
    image: "https://images.unsplash.com/photo-1557804483-ef3ae72eba50?q=80&w=2070&auto=format&fit=crop",
    category: "Google Meu Negócio"
  }
];

const BlogPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-royal-blue">
      <div className="container py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[1.05] tracking-tighter uppercase mb-6">
            Novidades de Marketing e <span className="text-vibrant-pink">Estratégia</span> para sua Empresa
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Acompanhe nosso blog e fique por dentro das melhores práticas e dicas para a gestão do seu Ativo Digital.
          </p>
        </div>

        {/* Global Navigation Bar Style Safira */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            <span className="text-vibrant-pink font-black uppercase text-[10px] tracking-widest whitespace-nowrap border-r border-white/20 pr-8">Navegue por Categorias</span>
            {["Design", "Identidade Visual", "Sites", "SEO", "Google GMB", "Redes Sociais"].map((cat) => (
              <button key={cat} className="text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Pesquisar artigo..." 
              className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white text-xs focus:outline-none focus:border-vibrant-pink"
            />
            <Search size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.3)] group h-full border border-white/10"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-vibrant-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-10 flex flex-col flex-grow text-left">
                <h3 className="text-royal-blue font-display font-black text-xl md:text-2xl leading-tight mb-6 uppercase tracking-tight group-hover:text-vibrant-pink transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 font-medium text-base leading-relaxed mb-auto">
                  {post.summary}
                </p>
                <div className="pt-8 mt-auto border-t border-slate-100">
                  <button className="flex items-center gap-2 text-royal-blue font-black uppercase text-xs tracking-widest group/btn hover:text-vibrant-pink transition-colors">
                    Ler Artigo Completo 
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <section className="bg-royal-blue border-t border-white/10 py-20">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-display font-black text-white mb-8 max-w-4xl mx-auto leading-tight">
            Sua empresa merece um <span className="text-vibrant-pink whitespace-nowrap">Ativo Digital</span> próprio.
          </h2>
          <Button 
            variant="primary" 
            className="text-sm md:text-base px-10 py-5"
            href="https://wa.me/551139553258?text=Olá,%20Bydo%20Marketing!%20Li%20os%20artigos%20do%20blog%20e%20quero%20uma%20análise%20do%20meu%20negócio."
          >
            Falar com a Bydo Marketing
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <Problem />
    <Solution />
    <Services />
    <Differential />
    <Portfolio />
    <Testimonials />
    <FAQ />
    <CTA />
  </>
);

const AppContent = () => {
  const location = useLocation();
  const isGMBPage = location.pathname === "/servicos/google-meu-negocio.html";

  return (
    <div className="min-h-screen selection:bg-vibrant-pink selection:text-white font-sans bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog.html" element={<BlogPage />} />
          <Route path="/servicos/google-meu-negocio.html" element={<GoogleMeuNegocioPage />} />
          <Route path="/servicos/:serviceId" element={<ServicePage />} />
        </Routes>
      </main>
      {isGMBPage ? null : <Footer />}
      <FloatingElements />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
