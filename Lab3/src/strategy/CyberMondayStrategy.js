import DiscountStrategy from './DiscountStrategy.js';

class CyberMondayStrategy extends DiscountStrategy {
  getDiscount(totalAmount) {
    return totalAmount * 0.15; // 15% discount
  }
}

export default CyberMondayStrategy;
