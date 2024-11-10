
import OnlineShopFacade from './domain/OnlineShopFacade.js';
import GiftWrapper from './Decorator/GiftWrapper.js';

const shop = new OnlineShopFacade();

// Register users
shop.registerUser('customer', 'Friptu Ludmila', 'ldd33@email.com');
shop.registerUser('admin', 'Admin User', 'admin@email.com');

// Create products
const perfume = shop.createProduct('perfumes', 'Chanel 5', 200, 'aldehydic');
shop.createProduct('skin care', 'Purito Green Serum', 30, 'acne prone skin');

// Decorate products
const giftWrappedPerfume = new GiftWrapper(perfume);

// Add the decorated product to the shop's products
shop.products['Chanel 5 (Gift Wrapped)'] = giftWrappedPerfume;

// Place order
const order = shop.placeOrder(
  'ldd33@email.com',
  [
    { productName: 'Chanel 5 (Gift Wrapped)', quantity: 1 },
    { productName: 'Purito Green Serum', quantity: 2 },
  ],
  '12/3 Balcani, Chisinau, Moldova',
  { cardNumber: '1234567890123456', expiry: '12/25', cvv: '123' },
  'BLACKFRIDAY'
);

// Output order summary
console.log(order.getOrderSummary());

// Process payment
order.processPayment();
console.log('Order Status after payment:', order.status);