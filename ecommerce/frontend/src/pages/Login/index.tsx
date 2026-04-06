import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import type { LoginFormData } from './types';
import karrankaLogo from '../../assets/karranka-curta.png';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = []; // Substituir pelo seu hook useCart futuramente

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  const [step, setStep] = useState<'email' | 'password'>('email');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 'email') {
      setStep('password');
    } else {
      if (cartItems.length > 0) {
        navigate('/checkout');
      } else {
        navigate('/');
      }
    }
  };

  const handleBack = () => setStep('email');

  return (
    <S.Container>
      <S.Card>
        <S.Logo src={karrankaLogo} alt="Logo Karranka Oficial" />
        
        <S.Title>Acesso do Cliente</S.Title>

        <S.Form onSubmit={handleNextStep}>
          {step === 'email' && (
            <>
              <S.Input 
                type="email" 
                name="email"
                placeholder="E-mail" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                autoFocus
              />
              <S.SubmitButton type="submit">Continuar</S.SubmitButton>
            </>
          )}

          {step === 'password' && (
            <>
              <S.EmailDisplay>
                {formData.email} <span onClick={handleBack}>(alterar)</span>
              </S.EmailDisplay>
              
              <S.Input 
                type="password" 
                name="password"
                placeholder="Senha" 
                value={formData.password}
                onChange={handleInputChange}
                required 
                autoFocus
              />
              <S.SubmitButton type="submit">Entrar</S.SubmitButton>
            </>
          )}
        </S.Form>

        {step === 'email' && (
          <>
            <S.Divider>ou</S.Divider>
            <S.GoogleButton type="button">
              <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google" />
              Continuar com o Google
            </S.GoogleButton>
          </>
        )}

        <S.HelperLinks>
          <a href="#">Esqueceu a senha?</a>
          <span>
            Não tem conta? <a href="#" style={{fontWeight: '600'}}>Cadastre-se</a>
          </span>
        </S.HelperLinks>

        <S.InstagramTag>@_karranka</S.InstagramTag>
      </S.Card>
    </S.Container>
  );
};