import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { testimonialsData, renderStars } from '../data/testimonials';
import { IconRocket, IconArrowRight, IconQuote } from '@tabler/icons-react';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <IconRocket size={16} />
              <span>Transforme seu negócio</span>
            </div>
            <h1>Soluções de E-commerce para o seu Negócio</h1>
            <p>Impulsione suas vendas online com nossas soluções personalizadas e inovadoras. Desenvolvimento de lojas virtuais, gestão completa e suporte especializado.</p>
            <div className="hero-buttons">
              <Link to="/contato" className="btn btn-primary">
                Comece Agora
                <IconArrowRight size={20} />
              </Link>
              <a href="#servicos" className="btn btn-secondary">Ver Serviços</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>500+</strong>
                <span>Projetos</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>Satisfação</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Suporte</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
              {/* Background circle */}
              <circle cx="250" cy="200" r="180" fill="#74c69d" opacity="0.1"/>
              
              {/* Shopping cart */}
              <rect x="150" y="120" width="200" height="180" rx="10" fill="#1b4332" opacity="0.9"/>
              <rect x="165" y="135" width="170" height="150" rx="8" fill="white"/>
              
              {/* Products in cart */}
              <rect x="180" y="150" width="50" height="50" rx="5" fill="#74c69d"/>
              <rect x="245" y="150" width="50" height="50" rx="5" fill="#95d5b2"/>
              <rect x="310" y="150" width="50" height="50" rx="5" fill="#52b788"/>
              
              {/* Cart lines */}
              <rect x="180" y="215" width="140" height="8" rx="4" fill="#e0e0e0"/>
              <rect x="180" y="235" width="100" height="8" rx="4" fill="#e0e0e0"/>
              <rect x="180" y="255" width="120" height="8" rx="4" fill="#e0e0e0"/>
              
              {/* Success circle */}
              <circle cx="380" cy="110" r="35" fill="#74c69d"/>
              
              {/* Decorative elements */}
              <circle cx="100" cy="100" r="8" fill="#74c69d" opacity="0.6"/>
              <circle cx="400" cy="280" r="10" fill="#52b788" opacity="0.6"/>
              <circle cx="120" cy="300" r="6" fill="#95d5b2" opacity="0.6"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="projects-wrapper" id="servicos">
        <div className="projects">
          <h2 className="projects-title">Nossos Serviços</h2>
        <div className="projects-grid">
          {servicesData.map((service, index) => (
            <Link to="/servicos" className="card-link" key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="card-icon" style={{ color: service.color }}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2>O Que Nossos Clientes Dizem</h2>
            <p>Veja por que somos a escolha de centenas de empresas em todo o Brasil</p>
          </div>
          <div className="testimonials-grid">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-quote">
                  <IconQuote size={32} />
                </div>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div className="testimonial-author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role} - {testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <Link to="/contato" className="floating-cta" title="Solicitar Orçamento">
        <IconRocket size={24} />
        <span>Solicitar Orçamento</span>
      </Link>
    </main>
  );
};

export default Home;
