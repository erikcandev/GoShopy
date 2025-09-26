import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <h1>Soluções de E-commerce para o seu Negócio</h1>
          <p>Impulsione suas vendas online com nossas soluções personalizadas e inovadoras.</p>
          <div className="hero-buttons">
            <a href="#contato" className="btn btn-primary">Comece Agora</a>
            <a href="#servicos" className="btn btn-secondary">Ver Serviços</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="projects" id="servicos">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Nossos Serviços</h2>
        <div className="projects-grid">
          {servicesData.map((service, index) => (
            <Link to="/servicos" className="card-link" key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
