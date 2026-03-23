// src/pages/Product/styles.ts
import styled from 'styled-components';

export const CustomizerStage = styled.div`
  position: relative; // Essencial para o layering
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1; // Mantém a proporção quadrada
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BaseShirtImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; // Camada de baixo
`;

// Interface para estilizar o texto com base no estado
interface CustomTextProps {
  color: string;
  fontFamily: string;
}

export const CustomTextOverlay = styled.span<CustomTextProps>`
  position: absolute;
  top: 45%; // Ajuste fino para a posição no peito
  left: 50%;
  transform: translate(-50%, -50%); // Centralização perfeita
  z-index: 2; // Camada de cima
  
  // Propriedades dinâmicas
  color: ${props => props.color};
  font-family: ${props => props.fontFamily}, sans-serif;
  
  // Estilos base
  font-size: 32px;
  font-weight: bold;
  pointer-events: none; // Impede que o clique no texto bloqueie a camisa
  white-space: nowrap; // Evita quebra de linha
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 300px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #cccccc;
  background-color: #f9f9f9;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
`;

export const ColorButton = styled.button<{ colorCode: string; selected: boolean }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${props => props.colorCode};
  border: ${props => (props.selected ? '3px solid #000' : '2px solid #ccc')};
  cursor: pointer;
`;