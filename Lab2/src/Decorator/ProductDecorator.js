

import Product from '../models/Product.js';

class ProductDecorator extends Product {
  constructor(product) {
    super(product.name, product.price);
    this.product = product;
  }

  getDetails() {
    return this.product.getDetails();
  }
}

export default ProductDecorator;
