
import ProductDecorator from './ProductDecorator.js';

class GiftWrapper extends ProductDecorator {
  constructor(product) {
    super(product);
    this.price += 5; // Add $5 for gift wrapping
  }

  getDetails() {
    return `${this.product.getDetails()} + Gift Wrap`;
  }
}

export default GiftWrapper;
