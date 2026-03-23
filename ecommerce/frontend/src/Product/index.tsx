// src/pages/Product/index.tsx
import React, { useState } from 'react';
import * as S from './styles';

// Mocks dos assets (você trocará por URLs reais)
const shirtBases = {
  black: '/assets/shirts/oversized-black-base.png',
  white: '/assets/shirts/oversized-white-base.png',
  grey: '/assets/shirts/oversized-grey-base.png',
};

// Fontes que você pode usar (Oswald e Inter combinam com Carranca)
const customFonts = {
  bold: 'Oswald',
  script: 'Montserrat', // Uma geometric sans-serif que você definiu
};

export const ProductCustomizerPage: React.FC = () => {
  // Estados para controlar a customização
  const [shirtColor, setShirtColor] = useState<'black' | 'white' | 'grey'>('black');
  const [customText, setCustomText] = useState<string>('Carranca');
  const [fontFamily, setFontFamily] = useState<string>('Oswald');

  // Lógica de contraste automático: camisa escura -> texto claro, camisa clara -> texto escuro
  const textContrastColor = ['black', 'grey'].includes(shirtColor) ? '#FFFFFF' : '#000000';

  return (
    <div style={{ display: 'flex', gap: '30px', padding: '50px', alignItems: 'center', backgroundColor: '#F5F5F5' }}>
      
      {/* O PALCO DO CUSTOMIZADOR */}
      <S.CustomizerStage>
        <S.BaseShirtImage src={shirtBases[shirtColor]} alt="Camisa Oversized Base" />
        <S.CustomTextOverlay color={textContrastColor} fontFamily={fontFamily}>
          {customText}
        </S.CustomTextOverlay>
        
        {/* Adicionei o handle subtilmente abaixo, como no mockup da home */}
        <span style={{ position: 'absolute', bottom: '15px', color: textContrastColor, fontFamily: 'Inter', fontSize: '12px', fontWeight: 'bold'}}>
          @_karranca
        </span>
      </S.CustomizerStage>

      {/* OS CONTROLES */}
      <S.Controls>
        <h3>Customizar</h3>
        
        {/* INPUT DE TEXTO */}
        <label>Texto (Seu Nome):</label>
        <S.TextInput 
          type="text" 
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          maxLength={15}
          placeholder="Digite seu nome..."
        />

        {/* CONTROLES DE COR DA CAMISA */}
        <label>Cor da Camisa:</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <S.ColorButton colorCode="#000000" selected={shirtColor === 'black'} onClick={() => setShirtColor('black')} />
          <S.ColorButton colorCode="#FFFFFF" selected={shirtColor === 'white'} onClick={() => setShirtColor('white')} />
          <S.ColorButton colorCode="#CCCCCC" selected={shirtColor === 'grey'} onClick={() => setShirtColor('grey')} />
        </div>

        {/* CONTROLES DE FONTE */}
        <label>Fonte:</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ fontFamily: customFonts.bold, padding: '10px', textTransform: 'uppercase'}} onClick={() => setFontFamily(customFonts.bold)}>Oswald</button>
          <button style={{ fontFamily: customFonts.script, padding: '10px' }} onClick={() => setFontFamily(customFonts.script)}>Montserrat</button>
        </div>

        {/* BOTÃO ADICIONAR AO CARRINHO (ESTILO KARRANCA) */}
        <button style={{ backgroundColor: '#000000', color: '#FFFFFF', border: 'none', padding: '18px', fontFamily: 'Oswald', fontSize: '18px', textTransform: 'uppercase', cursor: 'pointer', marginTop: '20px'}}>
          Adicionar ao Carrinho
        </button>
      </S.Controls>
    </div>
  );
};