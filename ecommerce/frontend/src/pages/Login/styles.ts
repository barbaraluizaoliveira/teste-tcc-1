import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
`;

export const Card = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 40px 30px;
  border: 1px solid ${props => props.theme.colors.border};
  width: 100%;
  max-width: 420px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);

  @media (max-width: 480px) {
    padding: 30px 20px;
    border: none;
    background: transparent;
    box-shadow: none;
  }
`;

export const Logo = styled.img`
  width: 180px;
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    width: 150px;
  }
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.titles};
  font-size: 26px;
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  margin-bottom: 35px;
  letter-spacing: 2px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.darkGray};
  background-color: transparent;
  font-family: ${props => props.theme.fonts.body};
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.black};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 18px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.titles};
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: ${props => props.theme.colors.darkGray};
  font-size: 14px;

  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.body};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const HelperLinks = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  
  a {
    color: ${props => props.theme.colors.darkGray};
    &:hover { color: ${props => props.theme.colors.black}; }
  }
`;

export const InstagramTag = styled.div`
  margin-top: 40px;
  font-family: ${props => props.theme.fonts.titles};
  color: ${props => props.theme.colors.black};
`;

export const EmailDisplay = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  color: ${props => props.theme.colors.darkGray};
  font-family: ${props => props.theme.fonts.body};
  text-align: left;

  span {
    text-decoration: underline;
    cursor: pointer;
    margin-left: 8px;
    color: ${props => props.theme.colors.black};
    font-weight: 600;
  }
`;