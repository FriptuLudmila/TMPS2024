import Product from './Product.js';

class Makeup extends Product {
  constructor(name, price, classification ) {
    super(name, price);
    this.category = 'Make Up';
    this.classification = classification;
  }

  getDetails() {
    return `${this.name} by ${this.classification} - $${this.price}`;
  }
}

export default Makeup;
