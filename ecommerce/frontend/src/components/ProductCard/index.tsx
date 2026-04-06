import React, { useState } from 'react';
import * as S from './styles';
import { FiShoppingBag } from 'react-icons/fi'; // Ícone de sacola outline

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  installments?: string;
  imageUrl: string;
  colors: string[]; // Ex: ['#FFFFFF', '#D3D3D3', '#000000']
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  name, price, oldPrice, discount, installments, imageUrl, colors 
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // Função para formatar moeda R$
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <S.Card>
      <S.ImageContainer>
        <S.ProductImage src={imageUrl} alt={name} />
        {/* O Badge de tecido costurado abaixo da foto */}
        <S.CollectionBadge>
          <S.BadgeText>Coleção Proteção</S.BadgeText>
        </S.CollectionBadge>
      </S.ImageContainer>

      <S.DetailsContainer>
        {/* Bolinhas de cor minimalistas organizadas à esquerda */}
        <S.ColorOptions>
          {colors.map(color => (
            <S.ColorCircle 
              key={color} 
              color={color} 
              selected={color === selectedColor}
              onClick={() => setSelectedColor(color)}
            />
          ))}
          {colors.length > 3 && <S.CurrentPrice style={{fontSize: '14px', marginLeft: '2px'}}>+{colors.length - 3}</S.CurrentPrice>}
        </S.ColorOptions>

        {/* Nome em caixa alta */}
        <S.ProductName>{name}</S.ProductName>

        <S.PriceRow>
          {oldPrice && <S.OldPrice>{formatCurrency(oldPrice)}</S.OldPrice>}
          <S.CurrentPrice>{formatCurrency(price)}</S.CurrentPrice>
          {discount && <S.DiscountBadge>{discount}% OFF</S.DiscountBadge>}
        </S.PriceRow>

        {installments && <S.Installments>{installments}</S.Installments>}

        {/* Botão preto de impacto com ícone outline */}
        <S.BuyButton>
          <FiShoppingBag />
          Comprar
        </S.BuyButton>
      </S.DetailsContainer>
    </S.Card>
  );
};