import { EcommerceService } from '../services/ecommerce.service';
import { describe, test, expect } from '@jest/globals';

describe('EcommerceService - Testes Unitários de E-commerce', () => {
  const service = new EcommerceService();

  // teste 1: preço c desconto
  test('Deve calcular o preço final com 20% de desconto', () => {
    const precoOriginal = 100;
    const desconto = 20;
    const resultado = service.calculateDiscount(precoOriginal, desconto);
    expect(resultado).toBe(80);
  });

  // teste 2: apenas validação de estoqu
  test('Deve retornar true se houver estoque suficiente', () => {
    expect(service.hasAvailableStock(2, 10)).toBe(true);
  });

  // teste 3: validacao de estoque se é suficiente
  test('Deve retornar false se o pedido for maior que o estoque', () => {
    expect(service.hasAvailableStock(15, 10)).toBe(false);
  });

  // teste 4: formatação do dinheiro
  test('Deve formatar o valor para Real Brasileiro', () => {
    expect(service.formatCurrency(50.5)).toBe('R$ 50,50');
  });

  // teste 5: status pedido
  test('Deve retornar status CONFIRMED quando o pagamento for aprovado', () => {
    expect(service.getOrderStatus(true)).toBe('CONFIRMED');
  });
});