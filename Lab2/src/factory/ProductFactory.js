import Makeup from '../models/Makeup.js';
import SkinCare from '../models/SkinCare.js';
import Perfumes from '../models/Perfumes.js';

class ProductFactory {
  createProduct(type, name, price, attribute) {
    switch (type.toLowerCase()) {
      case 'make up':
        return new Makeup(name, price, attribute); 
      case 'skin care':
        return new SkinCare(name, price, attribute); 
      case 'perfumes':
        return new Perfumes(name, price, attribute)
      default:
        throw new Error(`Product type '${type}' is not recognized`);
    }
  }
}

export default ProductFactory;
