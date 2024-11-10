
import UserFactory from '../factory/UserFactory.js';
import ProductFactory from '../factory/ProductFactory.js';
import OrderBuilder from '../builder/OrderBuilder.js';
import Logger from '../singleton/Logger.js';

class OnlineShopFacade {
  constructor() {
    this.userFactory = new UserFactory();
    this.productFactory = new ProductFactory();
    this.logger = new Logger();
    this.users = {};
    this.products = {};
  }

  registerUser(type, name, email) {
    const user = this.userFactory.createUser(type, name, email);
    this.users[email] = user;
    this.logger.log(`Registered user: ${user.getInfo()}`);
    return user;
  }

  createProduct(type, name, price, attribute) {
    const product = this.productFactory.createProduct(type, name, price, attribute);
    this.products[name] = product;
    this.logger.log(`Created product: ${product.getDetails()}`);
    return product;
  }

  placeOrder(customerEmail, items, shippingAddress, paymentMethod, discountCode = null) {
    const customer = this.users[customerEmail];
    if (!customer) {
      throw new Error('Customer not found');
    }

    const orderBuilder = new OrderBuilder(customer);

    for (const { productName, quantity } of items) {
      const product = this.products[productName];
      if (!product) {
        throw new Error(`Product '${productName}' not found`);
      }
      orderBuilder.addItem(product, quantity);
    }

    orderBuilder.setShippingAddress(shippingAddress)
                .setPaymentMethod(paymentMethod);

    const order = orderBuilder.build();

    if (discountCode) {
      order.applyDiscount(discountCode);
    }

    this.logger.log(`Order placed for customer: ${customer.name}`);

    return order;
  }
}

export default OnlineShopFacade;
