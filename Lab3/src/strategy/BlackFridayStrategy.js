import DiscountStrategy from './DiscountStrategy.js';

class BlackFridayStrategy extends DiscountStrategy {
  getDiscount(totalAmount) {
    return totalAmount * 0.2; // 20% discount
  }
}

export default BlackFridayStrategy;
