import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 90px;
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none; /* Mobile hambúrguer fica para o pós-MVP */
  }

  a {
    font-family: ${props => props.theme.fonts.titles}; /* OSWALD conforme pedido */
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.black};
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
    
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: ${props => props.theme.colors.darkGray}; /* Cor darkGray para os ícones */
    transition: color 0.2s;

    &:hover {
      color: ${props => props.theme.colors.black};
    }
  }
`;