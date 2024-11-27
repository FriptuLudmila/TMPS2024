import Product from './Product.js';

class SkinCare extends Product {
  constructor(name, price, concern) {
    super(name, price);
    this.category = 'Skin Care';
    this.concern = concern;
  }

  getDetails() {
    return `${this.name} - $${this.price} (Concern: ${this.concern})`;
  }
}

export default SkinCare;
