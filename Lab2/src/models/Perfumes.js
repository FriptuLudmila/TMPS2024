import Product from './Product.js';

class Perfumes extends Product {
  constructor(name, price, smell) {
    super(name, price);
    this.category = 'Perfumes';
    this.smell = smell; 
  }

  getDetails() {
    return `${this.name} - $${this.price} (Smell: ${this.smell} type)`;
  }
}

export default Perfumes;
