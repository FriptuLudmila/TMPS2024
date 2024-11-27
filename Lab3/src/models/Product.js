class Product {
    constructor(name, price) {
      if (new.target === Product) {
        throw new TypeError('Cannot instantiate abstract class Product directly');
      }
      this.name = name;
      this.price = price;
    }
  
    getDetails() {
      throw new Error('Method getDetails() must be implemented');
    }
  }
  
  export default Product;
  