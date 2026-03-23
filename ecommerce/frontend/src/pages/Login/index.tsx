// src/pages/Login/index.tsx
import React, { useState } from 'react';
import * as S from './styles';
import type { LoginFormData } from './types';
import karrankaLogo from '../../assets/karranka-curta.png';

export const LoginPage: React.FC = () => {
  // Estado para os dados
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  // ESTADO DA ETAPA: 'email' ou 'password'
  const [step, setStep] = useState<'email' | 'password'>('email');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 'email') {
      // Aqui você poderia até validar se o e-mail existe no seu banco Java
      console.log("E-mail validado, indo para senha...");
      setStep('password');
    } else {
      console.log("Enviando login completo para o Backend:", formData);
      // Aqui seria o seu login final
    }
  };

  // Função para voltar (caso o usuário erre o e-mail)
  const handleBack = () => setStep('email');

  return (
    <S.Container>
      <S.Card>
        <S.Logo src={karrankaLogo} alt="Logo Karranka Oficial" />
        
        <S.Title>Acesso do Cliente</S.Title>

        <S.Form onSubmit={handleNextStep}>
          
          {/* ETAPA 1: EMAIL */}
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

          {/* ETAPA 2: SENHA (Estilo Gocase) */}
          {step === 'password' && (
            <>
              {/* Mostra o e-mail que ele digitou para conferir */}
              <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                {formData.email} <span onClick={handleBack} style={{ textDecoration: 'underline', cursor: 'pointer', marginLeft: '5px' }}>(alterar)</span>
              </div>
              
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

        {/* O Google e os links só aparecem na primeira etapa ou em ambas? 
            Na Gocase eles costumam ficar na primeira. Vou manter aqui: */}
        {step === 'email' && (
          <>
            <S.Divider>ou</S.Divider>
            <S.GoogleButton type="button" onClick={() => console.log("Google Login")}>
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