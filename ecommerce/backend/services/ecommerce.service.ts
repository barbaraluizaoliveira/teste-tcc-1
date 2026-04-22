export class EcommerceService {
  calculateDiscount(price: number, discount: number): number {
    return price - (price * (discount / 100));
  }

  hasAvailableStock(requested: number, available: number): boolean {
    return requested <= available;
  }

  formatCurrency(value: number): string {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  }

  getOrderStatus(isPaid: boolean): string {
    return isPaid ? 'CONFIRMED' : 'PENDING';
  }
}