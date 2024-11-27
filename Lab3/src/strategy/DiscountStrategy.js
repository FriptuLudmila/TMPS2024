class DiscountStrategy {
    getDiscount(totalAmount) {
      throw new Error('DiscountStrategy.getDiscount() must be implemented');
    }
  }
  
  export default DiscountStrategy;
  