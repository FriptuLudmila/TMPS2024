import Logger from './singleton/Logger.js';
import Database from './singleton/Database.js';
import Configuration from './singleton/Configuration.js';
import UserFactory from './factory/UserFactory.js';
import ProductFactory from './factory/ProductFactory.js';
import OrderBuilder from './builder/OrderBuilder.js';
 

// Initialize Singletons
const logger = new Logger();
const dbInstance1 = new Database();
const dbInstance2 = new Database();
logger.log('Application started');
console.log('Are both database instances the same?', dbInstance1 === dbInstance2);

const config = new Configuration();
config.setSetting('appName', 'Online Shop');
console.log('Application Name:', config.getSetting('appName'));

// Use Factories to create users and products
const userFactory = new UserFactory();
const customer = userFactory.createUser('customer', 'Friptu Ludmila', 'ldd33@example.com');
const admin = userFactory.createUser('admin', 'Admin User', 'admin@example.com');

console.log(customer.getInfo());
console.log(admin.getInfo());

logger.log('Order created for customer: ' + customer.name);

const productFactory = new ProductFactory();
const perfume = productFactory.createProduct('perfumes', 'Chanel 5', 200, 'aldehydic');
const skincare = productFactory.createProduct('skin care', 'Purito Green Serum', 30, 'acne prone skin');

console.log(perfume.getDetails());
console.log(skincare.getDetails());

// Build an Order using OrderBuilder
const orderBuilder = new OrderBuilder(customer);

const order = orderBuilder
  .addItem(perfume, 1)
  .addItem(skincare, 2)
  .setShippingAddress('12/3 Balcani,Chisinau, Moldova')
  .setPaymentMethod('Credit Card')
  .build();

console.log(order.getOrderSummary());

order.applyDiscount('BLACKFRIDAY');
console.log('Total Amount after discount: $' + order.getTotalAmount());

// Simulate Order Processing
order.setStatus('Shipped');
console.log('Updated Order Status:', order.status);
