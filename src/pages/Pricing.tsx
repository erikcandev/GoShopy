import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconCheck, IconX, IconRocket, IconStar, IconCrown } from '@tabler/icons-react';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: 'Básico',
      icon: <IconRocket size={32} />,
      price: 'R$ 297',
      period: '/mês',
      description: 'Ideal para pequenos negócios começando no e-commerce',
      popular: false,
      features: [
        { text: 'Loja virtual completa', included: true },
        { text: 'Até 100 produtos', included: true },
        { text: 'Design responsivo', included: true },
        { text: 'Integração com 2 meios de pagamento', included: true },
        { text: 'Certificado SSL', included: true },
        { text: 'Suporte por e-mail', included: true },
        { text: 'Relatórios básicos', included: true },
        { text: 'Gestão de estoque', included: false },
        { text: 'Integração com transportadoras', included: false },
        { text: 'Suporte prioritário 24/7', included: false },
        { text: 'Relatórios avançados', included: false },
        { text: 'Multi-lojas', included: false },
      ],
      cta: 'Começar Agora',
      color: '#2563eb',
    },
    {
      name: 'Profissional',
      icon: <IconStar size={32} />,
      price: 'R$ 597',
      period: '/mês',
      description: 'Perfeito para empresas em crescimento',
      popular: true,
      features: [
        { text: 'Tudo do plano Básico', included: true },
        { text: 'Até 500 produtos', included: true },
        { text: 'Integração ilimitada de pagamentos', included: true },
        { text: 'Gestão de estoque completa', included: true },
        { text: 'Integração com transportadoras', included: true },
        { text: 'Suporte por telefone e chat', included: true },
        { text: 'Relatórios avançados', included: true },
        { text: 'Marketing por e-mail', included: true },
        { text: 'Cupons de desconto', included: true },
        { text: 'Suporte prioritário 24/7', included: false },
        { text: 'Multi-lojas', included: false },
        { text: 'API personalizada', included: false },
      ],
      cta: 'Escolher Profissional',
      color: '#7c3aed',
    },
    {
      name: 'Enterprise',
      icon: <IconCrown size={32} />,
      price: 'R$ 1.497',
      period: '/mês',
      description: 'Solução completa para grandes operações',
      popular: false,
      features: [
        { text: 'Tudo do plano Profissional', included: true },
        { text: 'Produtos ilimitados', included: true },
        { text: 'Multi-lojas ilimitadas', included: true },
        { text: 'Suporte prioritário 24/7', included: true },
        { text: 'Gerente de conta dedicado', included: true },
        { text: 'API personalizada', included: true },
        { text: 'Integrações customizadas', included: true },
        { text: 'Treinamento da equipe', included: true },
        { text: 'Backups diários', included: true },
        { text: 'SLA garantido de 99.9%', included: true },
        { text: 'Relatórios personalizados', included: true },
        { text: 'Consultoria estratégica mensal', included: true },
      ],
      cta: 'Falar com Vendas',
      color: '#16a34a',
    },
  ];

  return (
    <main className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1>Planos e Preços</h1>
          <p>Escolha o plano ideal para o seu negócio. Todos com 14 dias de teste grátis!</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && (
                  <div className="popular-badge">Mais Popular</div>
                )}
                <div className="pricing-card-header">
                  <div className="pricing-icon" style={{ backgroundColor: plan.color }}>
                    {plan.icon}
                  </div>
                  <h3>{plan.name}</h3>
                  <p className="pricing-description">{plan.description}</p>
                  <div className="pricing-price">
                    <strong>{plan.price}</strong>
                    <span>{plan.period}</span>
                  </div>
                </div>
                <div className="pricing-card-body">
                  <ul className="pricing-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={feature.included ? 'included' : 'excluded'}>
                        {feature.included ? (
                          <IconCheck size={18} color="#16a34a" />
                        ) : (
                          <IconX size={18} color="#dc2626" />
                        )}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-card-footer">
                  <Link
                    to="/contato"
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                    style={!plan.popular ? { borderColor: plan.color, color: plan.color } : {}}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq-section">
        <div className="pricing-container">
          <h2>Perguntas Frequentes sobre Planos</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Posso mudar de plano depois?</h3>
              <p>Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações são aplicadas imediatamente.</p>
            </div>
            <div className="faq-item">
              <h3>Como funciona o teste grátis?</h3>
              <p>Todos os planos incluem 14 dias de teste grátis, sem necessidade de cartão de crédito. Você pode cancelar a qualquer momento.</p>
            </div>
            <div className="faq-item">
              <h3>Quais formas de pagamento são aceitas?</h3>
              <p>Aceitamos cartão de crédito (todas as bandeiras), boleto bancário e Pix. Para planos anuais, oferecemos 20% de desconto.</p>
            </div>
            <div className="faq-item">
              <h3>Tem taxa de setup ou instalação?</h3>
              <p>Não! Todos os nossos planos não possuem taxa de setup. O valor mencionado é tudo que você paga.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta-section">
        <div className="pricing-container">
          <div className="cta-content">
            <h2>Ainda tem dúvidas?</h2>
            <p>Nossa equipe está pronta para ajudar você a escolher o melhor plano para o seu negócio.</p>
            <Link to="/contato" className="btn btn-primary">Falar com Especialista</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
