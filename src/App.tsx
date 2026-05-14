import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Map,
  ShieldCheck,
  Target,
  Briefcase,
  FileSignature,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Crown,
  ChevronDown
} from 'lucide-react';
import './index.css';
import heroImg from './assets/hero-aurelia.png';
import heroMobileImg from './assets/hero-aurelia-mobile.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Nav padding: desktop = 64px top / 120px sides. Mobile = 20px top / 24px sides.
  const navStyle: React.CSSProperties = scrolled
    ? {
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        display: isDesktop ? 'flex' : 'none', justifyContent: 'space-between', alignItems: 'center',
        transition: 'all 0.3s ease',
        background: 'rgba(10, 10, 12, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        paddingTop: isDesktop ? '20px' : '12px',
        paddingBottom: isDesktop ? '20px' : '12px',
        paddingLeft: isDesktop ? '120px' : '24px',
        paddingRight: isDesktop ? '120px' : '24px',
      }
    : {
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        display: isDesktop ? 'flex' : 'none', justifyContent: 'space-between', alignItems: 'center',
        transition: 'all 0.3s ease',
        background: isDesktop ? 'transparent' : 'rgba(10, 10, 12, 0.45)',
        backdropFilter: isDesktop ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: isDesktop ? 'none' : 'blur(12px)',
        borderBottom: 'none',
        paddingTop: isDesktop ? '64px' : '20px',
        paddingBottom: isDesktop ? '24px' : '20px',
        paddingLeft: isDesktop ? '120px' : '24px',
        paddingRight: isDesktop ? '120px' : '24px',
      };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav style={navStyle}>
        <img src="/logo-aurelia.svg" alt="Aurélia Carrilho" style={{ height: '35px', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }} />
        <a href="#aplicacao" className={scrolled ? "btn-glass" : "btn-gold"} style={{ padding: scrolled ? '10px 24px' : '12px 28px', fontSize: '0.9rem', transition: 'all 0.3s ease' }}>
          Aplicar para Mentoria
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90svh] lg:min-h-screen flex flex-col lg:block overflow-hidden bg-[#1A1A1A]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* Desktop View */}
          <div className="hidden lg:block absolute inset-0">
            <img 
              src={heroImg} 
              alt="Hero Background" 
              className="w-full h-full object-cover object-[100%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/85 to-transparent z-10 w-[80%] pointer-events-none" />
          </div>
          
          {/* Mobile View */}
          <div className="lg:hidden absolute inset-0">
            <img 
              src={heroMobileImg} 
              alt="Hero Background Mobile" 
              className="w-full h-full object-cover object-[50%_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/20 z-10 pointer-events-none" />
          </div>
        </div>

        {/* Style Extraction: hero-bg (Radial Gradient Overlay) */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ 
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)' 
          }} 
        />

        {/* Content Container */}
        <div
          className="relative z-20 w-full mx-auto flex items-end lg:items-center min-h-[90svh] lg:min-h-0 lg:h-screen"
          style={{
            paddingLeft: isDesktop ? '120px' : '24px',
            paddingRight: isDesktop ? '120px' : '24px',
            paddingTop: isDesktop ? '0' : '130px',
            paddingBottom: isDesktop ? '0' : '100px',
          }}
        >
          <div className="w-full lg:w-3/5 xl:w-1/2 flex flex-col gap-10 text-center lg:text-left items-center lg:items-start">
            
            <div className="flex flex-col gap-5 lg:gap-6 items-center lg:items-start">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center lg:justify-start"
              >
                <span className="text-[#d4af37] text-[12px] lg:text-[13px] font-semibold tracking-[0.3em] uppercase border-l-0 lg:border-l-2 border-[#d4af37] pl-0 lg:pl-4 text-center lg:text-left">
                  Mentoria Técnica Individual
                </span>
              </motion.div>

              {/* Headline with text-gradient style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-[2.6rem] sm:text-5xl lg:text-[76px] font-extrabold leading-[1.05] tracking-tight flex flex-col">
                  <span className="text-white">Do Terreno ao</span>
                  <span 
                    className="bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: 'linear-gradient(135deg, #fff 0%, #d4af37 50%, #fff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Empreendimento
                  </span>
                </h1>
              </motion.div>

              {/* Subheadline using --text-muted color style */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base lg:text-xl text-[#b0b0b0] max-w-xl leading-relaxed font-light mx-auto lg:mx-0 px-2 lg:px-0"
              >
                Sair do zero — ou de uma ideia — para um empreendimento imobiliário estruturado, com segurança jurídica e lógica de negócio, pronto para execução e monetização.
              </motion.p>
            </div>

            {/* Action Buttons: btn-gold and btn-glass styles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto items-center lg:items-start"
            >
              <a 
                href="#aplicacao"
                className="group flex items-center justify-center gap-[10px] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer w-[280px] sm:w-[300px] lg:w-auto"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
                  color: '#1A1A1A',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Quero me candidatar
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </a>
              <a 
                href="#diferencial"
                className="transition-all duration-300 hover:bg-white/10 cursor-pointer text-center flex items-center justify-center w-[280px] sm:w-[300px] lg:w-auto"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  color: '#fff',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Conhecer o método
              </a>
            </motion.div>

            {/* Footer Availability Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-6 flex flex-col gap-4 items-center lg:items-start"
            >
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <span className="text-white text-[11px] lg:text-[13px] font-bold uppercase tracking-[0.4em] text-center lg:text-left">
                  Exclusividade Absoluta
                </span>
                <div className="flex items-center gap-4 text-white">
                  <Crown className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] flex-shrink-0" />
                  <span className="text-xl lg:text-3xl font-bold tracking-[0.1em] uppercase">
                    Apenas 5 vagas por ano
                  </span>
                  <Crown className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] flex-shrink-0" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Phrases Section */}
      <section style={{ padding: '60px 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="grid-3" style={{ textAlign: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>"Antes de investir,<br /><span style={{ color: '#fff' }}>você valida.</span>"</h3>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>"Antes de executar,<br /><span style={{ color: '#fff' }}>você estrutura.</span>"</h3>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.4 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>"Antes de lucrar,<br /><span style={{ color: '#fff' }}>você decide certo.</span>"</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section id="diferencial" className="section-padding">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>O Diferencial <span className="text-gradient">Estratégico</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Posicionamento estratégico, individual e aplicado. Estruturamos seu negócio e garantimos segurança.</p>
          </motion.div>

          <div className="grid-2">
            {[
              { icon: <Crown />, title: "Apenas 5 mentorados por ano", desc: "Profundidade real e acompanhamento individual. Não é sobre escala, é sobre qualidade extrema." },
              { icon: <Map />, title: "Você entra mesmo sem terreno", desc: "Aprenda a encontrar as oportunidades certas e filtrar viabilidade antes de investir." },
              { icon: <ShieldCheck />, title: "Integra jurídico + negócio", desc: "Evita decisões míopes. O maior benefício: Você não perde dinheiro por erro estrutural." },
              { icon: <Target />, title: "Acompanha o ciclo completo", desc: "Não para no 'teórico'. Do terreno, concepção até a execução e saída." }
            ].map((item, i) => (
              <motion.div key={i} className="liquid-glass-card" style={{ padding: '40px' }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-main)', marginBottom: '24px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jornada */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'radial-gradient(circle at 100% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)', zIndex: -1 }} />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Estrutura da <span className="text-gradient">Mentoria</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px' }}>Um processo passo a passo desenhado para máxima clareza e execução impecável.</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { num: "0", title: "Pré-Bloco: Oportunidade", desc: "Encontrar ou validar terreno. Filtro jurídico e estratégico antes do investimento." },
              { num: "1", title: "Diagnóstico", desc: "Análise fundiária e jurídica. Mapa de risco e decisão final: seguir ou descartar." },
              { num: "2", title: "Estruturação do Negócio", desc: "Compra, permuta, parceria, SPE. Impacto jurídico e financeiro na mesa." },
              { num: "3", title: "Viabilidade e Produto", desc: "Compatibilização tripla: mercado × legislação × estrutura." },
              { num: "4", title: "Concepção do Empreendimento", desc: "Incorporação ou loteamento. Projeto 100% juridicamente orientado." },
              { num: "5", title: "Execução", desc: "Registro, estruturação final e suporte para início da comercialização." },
              { num: "6", title: "Saída", desc: "Planejamento desde o primeiro dia. Estratégia clara de monetização." }
            ].map((step, i) => (
              <motion.div key={i} className="liquid-glass-card" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '30px' }}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1px var(--gold-main)', opacity: 0.5 }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--gold-light)' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é / Não é */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="grid-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="liquid-glass-card" style={{ padding: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <CheckCircle2 size={32} color="#10b981" />
                <h2 style={{ fontSize: '2rem' }}>Para quem é</h2>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  "Quer entrar no mercado imobiliário com estrutura sólida.",
                  "Já atua e quer subir de nível nos seus empreendimentos.",
                  "Quer fazer o primeiro projeto com segurança absoluta.",
                  "Quer parar de depender de terceiros para tomar decisões complexas."
                ].map((text, i) => (
                  <li key={i} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ marginTop: '4px', color: '#10b981' }}><CheckCircle2 size={20} /></div>
                    <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="liquid-glass-card" style={{ padding: '50px', borderColor: 'rgba(239, 68, 68, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <XCircle size={32} color="#ef4444" />
                <h2 style={{ fontSize: '2rem' }}>Para quem <span style={{ color: '#ef4444' }}>não</span> é</h2>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  "Quem busca apenas mais um 'curso' teórico.",
                  "Quem não pretende agir e aplicar o conhecimento.",
                  "Quem procura 'atalhos fáceis' e mágicos.",
                  "Quem não aceita um processo estratégico e metódico."
                ].map((text, i) => (
                  <li key={i} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ marginTop: '4px', color: '#ef4444' }}><XCircle size={20} /></div>
                    <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="section-padding">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>O que você <span className="text-gradient">Recebe</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Uma esteira completa de acompanhamento e ferramentas avançadas para sua segurança.</p>
          </motion.div>

          <div className="grid-3">
            {[
              "Encontros individuais 1:1 semanais (ou sob demanda estratégica).",
              "Canal direto com a mentora no WhatsApp para dúvidas rápidas.",
              "Análise detalhada de oportunidades (antes da compra).",
              "Revisão de documentos reais do seu projeto.",
              "IA especialista em Lei de parcelamento do solo, Incorporações e Legislação Ambiental.",
              "IA exclusiva para análise de matrículas de áreas/terrenos.",
              "IA de análise de Certidões Municipais de Uso e Ocupação dos solos.",
              "Direcionamento de estruturação e validação de decisões críticas.",
              "Checklist completo de viabilidade jurídica + 5 ferramentas práticas."
            ].map((text, i) => (
              <motion.div key={i} className="liquid-glass-card" style={{ padding: '25px', display: 'flex', gap: '15px' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <div style={{ color: 'var(--gold-main)', flexShrink: 0 }}><CheckCircle2 size={24} /></div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ marginTop: '60px', textAlign: 'center' }}>
            <div className="liquid-glass" style={{ display: 'inline-block', padding: '30px 50px' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--gold-main)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>O Benefício Mais Valioso</h3>
              <p style={{ fontSize: '1.8rem', fontWeight: 600 }}>Você não perde dinheiro por erro estrutural.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quem é Aurélia */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)', aspectRatio: '4/5' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'var(--gold-gradient)', opacity: 0.1, zIndex: 1 }}></div>
                <img src="/aurelia-perfil.jpeg" alt="Aurélia Carrilho" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Quem é <span className="text-gradient">Aurélia</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '20px' }}>
                Especialista na estruturação e viabilização de empreendimentos imobiliários. Com forte base jurídica e visão estratégica de negócios, Aurélia atua para garantir que os projetos não sejam apenas ideias, mas sim realidades lucrativas e juridicamente seguras.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
                Com anos de experiência acompanhando o ciclo completo de investimentos, seu foco é entregar profundidade, análise de risco precisa e resultados aplicados.
              </p>
              <div className="liquid-glass" style={{ padding: '25px', borderLeft: '4px solid var(--gold-main)' }}>
                <p style={{ fontStyle: 'italic', color: '#fff', fontSize: '1.1rem' }}>
                  "O meu papel é ser a bússola que impede que seu capital seja corroído por falhas na estruturação."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="aplicacao" className="section-padding" style={{ textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 60%)', zIndex: -1 }}></div>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div style={{ marginBottom: '30px' }}>
              <Crown size={48} color="var(--gold-main)" style={{ margin: '0 auto' }} />
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Pronto para o Próximo Nível?</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6 }}>
              Apenas 5 vagas anuais. Preencha sua aplicação e passe pela seletividade para garantir sua posição na mentoria.
            </p>
            <a href="#" className="btn-gold" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
              Preencher Aplicação <ArrowRight size={24} />
            </a>
            <p style={{ marginTop: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              * A admissão está sujeita a análise de perfil e momento do empreendedor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 5%', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Aurélia Carrilho. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
