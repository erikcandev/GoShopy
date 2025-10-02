import { IconStar } from '@tabler/icons-react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'CEO',
    company: 'Boutique Elegance',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'A GoShopy transformou completamente nosso negócio. Em apenas 3 meses, nossas vendas online aumentaram 200%. A equipe é extremamente profissional e o suporte é impecável!',
  },
  {
    id: 2,
    name: 'Carlos Santos',
    role: 'Diretor de E-commerce',
    company: 'TechStore Brasil',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Trabalhar com a GoShopy foi a melhor decisão que tomamos. A plataforma é robusta, intuitiva e o sistema de gestão de estoque economiza horas do nosso time. Recomendo sem hesitar!',
  },
  {
    id: 3,
    name: 'Ana Paula Costa',
    role: 'Proprietária',
    company: 'Cosméticos Naturais',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'O que mais me impressionou foi o atendimento personalizado. A equipe entendeu exatamente o que precisávamos e entregou uma solução sob medida. Nossos clientes adoraram a nova loja!',
  },
  {
    id: 4,
    name: 'Roberto Oliveira',
    role: 'Gerente de Vendas',
    company: 'Mundo dos Esportes',
    avatar: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    text: 'A integração com as transportadoras facilitou muito nossa logística. Conseguimos oferecer melhores prazos de entrega e reduzir custos. O ROI foi impressionante!',
  },
  {
    id: 5,
    name: 'Juliana Ferreira',
    role: 'Fundadora',
    company: 'Artesanato Premium',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    text: 'Como pequena empreendedora, achei que seria impossível ter uma loja online profissional. A GoShopy provou que estava errada. Hoje compito de igual para igual com grandes marcas!',
  },
  {
    id: 6,
    name: 'Fernando Lima',
    role: 'Diretor',
    company: 'Livraria Cultural Online',
    avatar: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    text: 'O suporte 24/7 é um diferencial incrível. Sempre que precisamos, a equipe está lá para ajudar. A plataforma nunca saiu do ar e a performance é excepcional!',
  },
];

export const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <IconStar
      key={index}
      size={16}
      fill={index < rating ? '#fbbf24' : 'none'}
      color={index < rating ? '#fbbf24' : '#d1d5db'}
    />
  ));
};
