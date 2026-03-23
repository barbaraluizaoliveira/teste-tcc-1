// src/pages/Login/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5; /* Cinza de Fundo */
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 50px 40px;
  border: 1px solid #dddddd;
  width: 100%;
  max-width: 420px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 26px;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 35px;
  letter-spacing: 2px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  color: #000000;
  border: 1px solid #cccccc;
  background-color: #f9f9f9;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #000000;
    background-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 18px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 10px;
  transition: transform 0.1s, opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const HelperLinks = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  a {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #4d4d4d;
    text-decoration: none;
    
    &:hover {
      color: #000000;
      text-decoration: underline;
    }
  }

  span {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #888;
  }
`;

export const InstagramTag = styled.div`
  margin-top: 40px;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;

// src/pages/Login/styles.ts

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  color: #888;
  font-family: 'Inter', sans-serif;
  font-size: 14px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #eeeeee;
  }

  &:not(:empty)::before {
    margin-right: .5em;
  }

  &:not(:empty)::after {
    margin-left: .5em;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #dddddd;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;