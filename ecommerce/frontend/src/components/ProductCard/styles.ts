import styled from 'styled-components';

export const Card = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  position: relative;
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: ${props => props.theme.colors.black};
    border-width: 2px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(-10px) scale(0.98);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 24px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: contain;
  display: block;
`;

export const CollectionBadge = styled.div`
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 4px;
  padding: 6px 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

export const BadgeText = styled.span`
  font-family: ${props => props.theme.fonts.titles};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 13px;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

export const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 6px;
  margin-top: 8px;
`;

export const ColorCircle = styled.div<{ color: string; selected?: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: ${props => props.selected ? `2px solid ${props.theme.colors.black}` : `1px solid ${props.theme.colors.border || props.theme.colors.gray}`};
  cursor: pointer;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductName = styled.h3`
  font-family: ${props => props.theme.fonts.body};
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
`;

export const OldPrice = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: 15px;
  color: ${props => props.theme.colors.darkGray};
  text-decoration: line-through;
  opacity: 0.8;
`;

export const CurrentPrice = styled.span`
  font-family: ${props => props.theme.fonts.subtitles};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 20px;
  color: ${props => props.theme.colors.black};
`;

export const DiscountBadge = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: 13px;
  color: #26D07C;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Installments = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: 14px;
  color: #26D07C;
  margin-bottom: 16px;
  font-weight: 500;
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.titles};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;
  font-size: 17px;
  letter-spacing: 2px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: opacity 0.2s;
  margin-top: auto;

  &:hover {
    opacity: 0.9;
  }

  svg {
    font-size: 22px;
  }
`;