import { useEffect } from 'react';
import { servicesData } from '../data/services';

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => elementsToAnimate.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <main className="services-page">
      <div className="page-header">
        <h1>Nossos Serviços</h1>
        <p>Soluções completas para impulsionar seu negócio online.</p>
      </div>
      {
        servicesData.map((service, index) => (
          <section key={service.id} className={`service-section section-${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="service-content">
              <div className="service-image animate-on-scroll">
                <img src={service.imageUrl} alt={service.title} />
              </div>
              <div className="service-details animate-on-scroll">
                <h2>{service.title}</h2>
                <p>{service.longDescription}</p>
              </div>
            </div>
          </section>
        ))
      }
    </main>
  );
};

export default Services;
