import { IconShoppingCart, IconPackage, IconTruckDelivery, IconHeadset } from '@tabler/icons-react';

// Importe suas imagens locais aqui
import lojaVirtualImg from '../assets/loja-virtual.jpg';
import gestaoEstoqueImg from '../assets/gestao-estoque.jpg';
import logisticaImg from '../assets/logistica.jpg';
import suporteImg from '../assets/suporte.jpg';

export const servicesData = [
  {
    id: 'loja-virtual',
    icon: <IconShoppingCart size={48} />,
    title: 'Loja Virtual Completa',
    shortDescription: 'Soluções completas de e-commerce com design responsivo e integração com diversos meios de pagamento.',
    longDescription: 'Criamos sua loja virtual do zero, com um design exclusivo que reflete a identidade da sua marca. Nossas plataformas são totalmente responsivas, garantindo uma experiência de compra perfeita em qualquer dispositivo. Integramos os principais meios de pagamento, gateways de frete e ferramentas de marketing para você vender mais.',
    imageUrl: lojaVirtualImg,
    color: '#2563eb', // Blue
  },
  {
    id: 'gestao-estoque',
    icon: <IconPackage size={48} />,
    title: 'Gestão de Estoque',
    shortDescription: 'Controle total do seu estoque com atualizações em tempo real e relatórios detalhados.',
    longDescription: 'Nosso sistema de gestão de estoque permite que você tenha controle total sobre seus produtos. Acompanhe as entradas e saídas em tempo real, receba alertas de estoque baixo e gere relatórios detalhados para tomar decisões mais inteligentes. Evite perdas e otimize suas compras.',
    imageUrl: gestaoEstoqueImg,
    color: '#7c3aed', // Purple
  },
  {
    id: 'logistica-integrada',
    icon: <IconTruckDelivery size={48} />,
    title: 'Logística Integrada',
    shortDescription: 'Integração com as principais transportadoras e cálculo automático de fretes.',
    longDescription: 'Simplifique sua logística com nossa solução integrada. Conectamos sua loja às principais transportadoras do mercado, automatizando o cálculo de fretes no checkout. Ofereça mais opções de entrega para seus clientes e gerencie seus envios de forma centralizada.',
    imageUrl: logisticaImg,
    color: '#dc2626', // Red
  },
  {
    id: 'suporte-especializado',
    icon: <IconHeadset size={48} />,
    title: 'Suporte Especializado',
    shortDescription: 'Equipe preparada para te auxiliar em todas as etapas do seu projeto.',
    longDescription: 'Conte com uma equipe de especialistas para te ajudar sempre que precisar. Oferecemos suporte técnico e estratégico para garantir que sua operação de e-commerce seja um sucesso. Estamos disponíveis para resolver problemas, tirar dúvidas e te ajudar a crescer.',
    imageUrl: suporteImg,
    color: '#16a34a', // Green
  },
];
