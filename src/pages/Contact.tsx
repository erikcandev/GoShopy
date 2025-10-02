import { useEffect, useState } from 'react';
import { IconMail, IconPhone, IconMapPin, IconBrandWhatsapp, IconBrandInstagram, IconBrandLinkedin, IconBrandFacebook, IconSend } from '@tabler/icons-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulando envio
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const whatsappNumber = '5511999999999'; // Número fictício
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da GoShopy.');

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para ajudar você a transformar seu negócio</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Envie sua Mensagem</h2>
              <p className="form-description">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
              </p>

              {formStatus === 'success' && (
                <div className="alert alert-success">
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="alert alert-error">
                  ✗ Erro ao enviar mensagem. Tente novamente.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="João Silva"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="joao@exemplo.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="duvidas">Dúvidas sobre Serviços</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    'Enviando...'
                  ) : (
                    <>
                      <IconSend size={20} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <h2>Informações de Contato</h2>
              <p className="info-description">
                Você também pode entrar em contato através dos canais abaixo:
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-icon">
                    <IconPhone size={24} />
                  </div>
                  <div className="info-content">
                    <strong>Telefone</strong>
                    <p>(11) 3000-0000</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon">
                    <IconMail size={24} />
                  </div>
                  <div className="info-content">
                    <strong>E-mail</strong>
                    <p>contato@goshopy.com.br</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon">
                    <IconMapPin size={24} />
                  </div>
                  <div className="info-content">
                    <strong>Endereço</strong>
                    <p>Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="whatsapp-cta">
                <h3>Prefere conversar pelo WhatsApp?</h3>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <IconBrandWhatsapp size={24} />
                  Chamar no WhatsApp
                </a>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h3>Redes Sociais</h3>
                <p>Siga-nos e fique por dentro das novidades:</p>
                <div className="social-links">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <IconBrandInstagram size={24} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <IconBrandFacebook size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <IconBrandLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours-section">
        <div className="contact-container">
          <h2>Horário de Atendimento</h2>
          <div className="hours-grid">
            <div className="hours-item">
              <strong>Segunda a Sexta</strong>
              <p>09:00 - 18:00</p>
            </div>
            <div className="hours-item">
              <strong>Sábado</strong>
              <p>09:00 - 13:00</p>
            </div>
            <div className="hours-item">
              <strong>Domingo</strong>
              <p>Fechado</p>
            </div>
            <div className="hours-item special">
              <strong>Suporte 24/7</strong>
              <p>Disponível para planos Enterprise</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
