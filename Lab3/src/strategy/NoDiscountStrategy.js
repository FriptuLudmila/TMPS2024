import DiscountStrategy from './DiscountStrategy.js';

class NoDiscountStrategy extends DiscountStrategy {
  getDiscount(totalAmount) {
    return 0;
  }
}

export default NoDiscountStrategy;
