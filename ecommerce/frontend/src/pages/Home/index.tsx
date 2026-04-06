import * as S from './styles';
import { ProductCard } from '../../components/ProductCard';

const p1 = 'https://images.unsplash.com/photo-1576566152374-984483a90807?q=80&w=600';
const p2 = 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600';
const p3 = 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600';
const p4 = 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600';

const MOCK_PRODUCTS = [
  { 
    id: '1', 
    name: 'Karranka Oversized Urban - Black', 
    price: 119.90, 
    oldPrice: 139.90, 
    discount: 14, 
    installments: '3x de R$ 39,97 sem juros', 
    imageUrl: p1,
    colors: ['#000000', '#4D4D4D', '#FFFFFF']
  },
  { 
    id: '2', 
    name: 'Karranka Classic Logo - White', 
    price: 109.90, 
    oldPrice: 129.90, 
    discount: 15, 
    installments: '3x de R$ 36,63 sem juros', 
    imageUrl: p2,
    colors: ['#FFFFFF', '#F5F5F5', '#CCCCCC']
  },
  { 
    id: '3', 
    name: 'Moletom Karranka Protection - Grey', 
    price: 199.90, 
    oldPrice: 249.90, 
    discount: 20, 
    installments: '3x de R$ 66,63 sem juros', 
    imageUrl: p3,
    colors: ['#4D4D4D', '#CCCCCC', '#000000']
  },
  { 
    id: '4', 
    name: 'Karranka Limited Edition - Anthracite', 
    price: 129.90, 
    oldPrice: 159.90, 
    discount: 18, 
    installments: '3x de R$ 43,30 sem juros', 
    imageUrl: p4,
    colors: ['#000000', '#4D4D4D', '#F5F5F5']
  },
];

export const HomePage = () => {
  return (
    <S.Container>
      <S.HeroBanner>
        <S.HeroTitle>ESTEJA PROTEGIDO: USE KARRANKA</S.HeroTitle>
      </S.HeroBanner>

      <S.ProductsSection>
        <S.SectionTitle>Produtos em Destaque</S.SectionTitle>
        
        <S.ProductsGrid>
          {MOCK_PRODUCTS.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
              installments={product.installments}
              imageUrl={product.imageUrl}
              colors={product.colors}
            />
          ))}
        </S.ProductsGrid>
      </S.ProductsSection>
    </S.Container>
  );
};