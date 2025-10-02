import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconTarget, IconHeart, IconBulb, IconUsers, IconTrendingUp, IconAward } from '@tabler/icons-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Sobre a GoShopy</h1>
          <p>Transformando negócios através da tecnologia desde 2018</p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>Nossa História</h2>
            <p>
              A GoShopy nasceu em 2018, fruto da visão de três empreendedores apaixonados por tecnologia e comércio eletrônico. 
              Percebendo a dificuldade que pequenas e médias empresas enfrentavam para ingressar no mundo digital, 
              decidimos criar uma empresa que oferecesse soluções completas e acessíveis de e-commerce.
            </p>
            <p>
              Começamos em uma pequena sala comercial em São Paulo, com apenas 3 colaboradores. Hoje, somos uma equipe de mais de 50 profissionais 
              especializados, atendendo clientes em todo o Brasil. Já desenvolvemos mais de 500 projetos de sucesso, 
              ajudando negócios de diversos segmentos a crescer e prosperar no ambiente digital.
            </p>
            <p>
              Nossa jornada é marcada pela busca constante por inovação, qualidade e, principalmente, pela satisfação dos nossos clientes. 
              Acreditamos que cada negócio é único e merece uma solução personalizada que reflita sua identidade e atenda suas necessidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="about-section mvv-section">
        <div className="about-container">
          <h2 className="section-title">Nossos Pilares</h2>
          <div className="mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon" style={{ backgroundColor: '#2563eb' }}>
                <IconTarget size={32} color="white" />
              </div>
              <h3>Missão</h3>
              <p>
                Capacitar empresas de todos os portes a alcançarem seu máximo potencial no comércio eletrônico, 
                oferecendo soluções tecnológicas inovadoras, acessíveis e personalizadas.
              </p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon" style={{ backgroundColor: '#7c3aed' }}>
                <IconBulb size={32} color="white" />
              </div>
              <h3>Visão</h3>
              <p>
                Ser referência nacional em soluções de e-commerce até 2028, reconhecida pela excelência 
                em atendimento, inovação tecnológica e pelo impacto positivo nos negócios dos nossos clientes.
              </p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon" style={{ backgroundColor: '#16a34a' }}>
                <IconHeart size={32} color="white" />
              </div>
              <h3>Valores</h3>
              <ul>
                <li><strong>Inovação:</strong> Buscamos constantemente novas tecnologias e métodos</li>
                <li><strong>Transparência:</strong> Comunicação clara e honesta com nossos clientes</li>
                <li><strong>Excelência:</strong> Comprometimento com qualidade em cada projeto</li>
                <li><strong>Parceria:</strong> Seu sucesso é o nosso sucesso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="about-section differentials-section">
        <div className="about-container">
          <h2 className="section-title">Por que escolher a GoShopy?</h2>
          <div className="differentials-grid">
            <div className="differential-card">
              <IconUsers size={40} color="#1b4332" />
              <h3>Equipe Especializada</h3>
              <p>Profissionais experientes e certificados em diversas tecnologias de e-commerce</p>
            </div>
            <div className="differential-card">
              <IconTrendingUp size={40} color="#1b4332" />
              <h3>Resultados Comprovados</h3>
              <p>98% de satisfação dos clientes e aumento médio de 150% nas vendas online</p>
            </div>
            <div className="differential-card">
              <IconAward size={40} color="#1b4332" />
              <h3>Suporte Premium</h3>
              <p>Atendimento 24/7 com tempo médio de resposta de 2 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="about-section stats-section">
        <div className="about-container">
          <h2 className="section-title">GoShopy em Números</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <strong>500+</strong>
              <span>Projetos Entregues</span>
            </div>
            <div className="stat-card">
              <strong>50+</strong>
              <span>Profissionais</span>
            </div>
            <div className="stat-card">
              <strong>98%</strong>
              <span>Satisfação</span>
            </div>
            <div className="stat-card">
              <strong>24/7</strong>
              <span>Suporte</span>
            </div>
            <div className="stat-card">
              <strong>7 anos</strong>
              <span>No Mercado</span>
            </div>
            <div className="stat-card">
              <strong>150%</strong>
              <span>Aumento Médio em Vendas</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="about-section cta-section">
        <div className="about-container">
          <div className="cta-content">
            <h2>Pronto para transformar seu negócio?</h2>
            <p>Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer no mundo digital.</p>
            <Link to="/contato" className="btn btn-primary">Fale Conosco</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
