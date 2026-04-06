import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroBanner = styled.section`
  width: 100%;
  height: 350px;
  background-color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  margin-bottom: 60px;
`;

export const HeroTitle = styled.h1`
  font-family: ${props => props.theme.fonts.titles}; /* OSWALD bold */
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 56px;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.subtitles}; /* MONTSERRAT medium */
  font-size: 18px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 1px;
`;

export const ProductsSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.titles}; 
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 28px;
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  margin-bottom: 40px;
  text-align: center;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr; 
    gap: 20px;
  }
`;