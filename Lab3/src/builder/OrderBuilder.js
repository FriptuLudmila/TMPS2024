import Order from './Order.js';
import NoDiscountStrategy from '../strategy/NoDiscountStrategy.js';
import BlackFridayStrategy from '../strategy/BlackFridayStrategy.js';
import CyberMondayStrategy from '../strategy/CyberMondayStrategy.js';

class OrderBuilder {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
    this.shippingAddress = '';
    this.paymentMethod = '';
    this.status = 'Pending';
    this.discountStrategy = new NoDiscountStrategy();
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
    return this;
  }

  setShippingAddress(address) {
    this.shippingAddress = address;
    return this;
  }

  setPaymentMethod(method) {
    this.paymentMethod = method;
    return this;
  }

  setStatus(status) {
    this.status = status;
    return this;
  }

  applyDiscountCode(code) {
    switch(code) {
      case 'BLACKFRIDAY':
        this.discountStrategy = new BlackFridayStrategy();
        break;
      case 'CYBERMONDAY':
        this.discountStrategy = new CyberMondayStrategy();
        break;
      default:
        this.discountStrategy = new NoDiscountStrategy();
    }
    return this;
  }

  build() {
    if (!this.shippingAddress || !this.paymentMethod) {
      throw new Error('Order must have a shipping address and a payment method');
    }
    return new Order(this);
  }
}

export default OrderBuilder;
