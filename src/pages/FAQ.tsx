import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData: FAQItem[] = [
    {
      category: 'Geral',
      question: 'O que é a GoShopy?',
      answer: 'A GoShopy é uma empresa especializada em soluções completas de e-commerce. Oferecemos desenvolvimento de lojas virtuais, gestão de estoque, integração logística e suporte especializado para empresas de todos os portes.',
    },
    {
      category: 'Geral',
      question: 'Quanto tempo leva para criar minha loja virtual?',
      answer: 'O prazo médio é de 15 a 30 dias úteis, dependendo da complexidade do projeto e da quantidade de produtos. Projetos mais simples podem ser entregues em até 7 dias úteis.',
    },
    {
      category: 'Geral',
      question: 'Preciso ter conhecimento técnico para usar a plataforma?',
      answer: 'Não! Nossa plataforma foi desenvolvida para ser intuitiva e fácil de usar. Além disso, oferecemos treinamento completo e suporte contínuo para sua equipe.',
    },
    {
      category: 'Planos',
      question: 'Posso testar antes de contratar?',
      answer: 'Sim! Todos os nossos planos incluem 14 dias de teste grátis, sem necessidade de cartão de crédito. Você pode experimentar todas as funcionalidades antes de tomar sua decisão.',
    },
    {
      category: 'Planos',
      question: 'Posso mudar de plano depois?',
      answer: 'Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações são aplicadas imediatamente e o valor é ajustado proporcionalmente.',
    },
    {
      category: 'Planos',
      question: 'Existe taxa de cancelamento?',
      answer: 'Não cobramos taxa de cancelamento. Você pode cancelar seu plano a qualquer momento, e seu acesso continuará até o final do período já pago.',
    },
    {
      category: 'Pagamento',
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceitamos cartão de crédito (todas as bandeiras), boleto bancário e Pix. Para planos anuais, oferecemos 20% de desconto no valor total.',
    },
    {
      category: 'Pagamento',
      question: 'Os preços incluem todos os recursos?',
      answer: 'Sim! Não há custos ocultos. O valor do plano inclui todos os recursos descritos, hospedagem, certificado SSL e atualizações automáticas.',
    },
    {
      category: 'Pagamento',
      question: 'Preciso pagar taxa de transação?',
      answer: 'Não cobramos taxa de transação. As únicas taxas são as dos intermediadores de pagamento que você escolher (como PagSeguro, Mercado Pago, etc.).',
    },
    {
      category: 'Suporte',
      question: 'Como funciona o suporte?',
      answer: 'Oferecemos suporte por e-mail, telefone, chat ao vivo e WhatsApp. O tempo médio de resposta é de 2 horas. Planos superiores têm suporte prioritário 24/7.',
    },
    {
      category: 'Suporte',
      question: 'O suporte está incluído no plano?',
      answer: 'Sim! Todos os planos incluem suporte técnico sem custo adicional. A diferença está no tempo de resposta e nos canais disponíveis.',
    },
    {
      category: 'Suporte',
      question: 'Vocês oferecem treinamento?',
      answer: 'Sim! Todos os clientes recebem treinamento inicial para usar a plataforma. Planos Enterprise incluem treinamento personalizado para toda a equipe.',
    },
    {
      category: 'Integrações',
      question: 'Quais meios de pagamento posso integrar?',
      answer: 'Integramos com os principais gateways de pagamento do Brasil: Mercado Pago, PagSeguro, PayPal, Cielo, Rede, Stone, e muitos outros.',
    },
    {
      category: 'Integrações',
      question: 'É possível integrar com transportadoras?',
      answer: 'Sim! Integramos com Correios, Jadlog, Azul Cargo, Total Express, Loggi, e diversas outras transportadoras para cálculo automático de frete.',
    },
    {
      category: 'Integrações',
      question: 'Posso integrar com marketplaces?',
      answer: 'Sim! Oferecemos integração com os principais marketplaces: Mercado Livre, Magazine Luiza, Americanas, Amazon e outros. Disponível nos planos Profissional e Enterprise.',
    },
    {
      category: 'Técnico',
      question: 'Minha loja ficará fora do ar?',
      answer: 'Garantimos 99.9% de uptime. Nossos servidores são redundantes e monitorados 24/7. Fazemos manutenções apenas em horários de baixo tráfego.',
    },
    {
      category: 'Técnico',
      question: 'Os dados estão seguros?',
      answer: 'Sim! Utilizamos criptografia SSL, backups diários automáticos, proteção contra DDoS e seguimos todas as normas da LGPD para proteção de dados.',
    },
    {
      category: 'Técnico',
      question: 'Posso ter meu próprio domínio?',
      answer: 'Sim! Você pode usar seu próprio domínio (.com.br, .com, etc.). Também auxiliamos no processo de registro e configuração do domínio.',
    },
  ];

  const categories = ['Todos', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Perguntas Frequentes</h1>
          <p>Encontre respostas para as dúvidas mais comuns sobre nossos serviços</p>
          
          {/* Search Bar */}
          <div className="faq-search">
            <IconSearch size={20} />
            <input
              type="text"
              placeholder="Buscar pergunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-section">
        <div className="faq-container">
          {/* Category Filter */}
          <div className="faq-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="faq-list">
            {filteredFAQ.length > 0 ? (
              filteredFAQ.map((item, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${openIndex === index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{item.question}</span>
                    <IconChevronDown
                      size={20}
                      className={`chevron ${openIndex === index ? 'rotate' : ''}`}
                    />
                  </button>
                  <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>Nenhuma pergunta encontrada para "{searchTerm}"</p>
                <button onClick={() => setSearchTerm('')} className="btn btn-secondary">
                  Limpar busca
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta-section">
        <div className="faq-container">
          <div className="cta-content">
            <h2>Ainda tem dúvidas?</h2>
            <p>Nossa equipe está pronta para ajudar você com qualquer questão.</p>
            <Link to="/contato" className="btn btn-primary">Entre em Contato</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
