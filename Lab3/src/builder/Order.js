// Import necessary classes
import Subject from '../observer/Subject.js'; 
import PaymentAdapter from '../Adapter/PaymentAdapter.js';

class Order extends Subject {
  constructor(builder) {
    super();
    this.customer = builder.customer;
    this.items = builder.items;
    this.shippingAddress = builder.shippingAddress;
    this.paymentMethod = builder.paymentMethod;
    this.status = builder.status || 'Pending';
    this.discountStrategy = builder.discountStrategy;
  }

  getTotalAmount() {
    const total = this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const discount = this.discountStrategy.getDiscount(total);
    return total - discount;
  }

  setStatus(status) {
    this.status = status;
    this.notify();
  }

  processPayment() {
    const paymentAdapter = new PaymentAdapter();
    const amount = this.getTotalAmount();
    const paymentSuccessful = paymentAdapter.process(amount, this.paymentMethod);

    if (paymentSuccessful) {
      this.setStatus('Paid');
    } else {
      this.setStatus('Payment Failed');
    }
  }

  getOrderSummary() {
    const itemDetails = this.items.map(
      (item) =>
        `${item.product.name} x${item.quantity} - $${
          item.product.price * item.quantity
        }`
    );

    // Format the payment method
    let paymentMethodDisplay = '';

    if (typeof this.paymentMethod === 'string') {
      paymentMethodDisplay = this.paymentMethod;
    } else if (typeof this.paymentMethod === 'object' && this.paymentMethod !== null) {
      // For security, mask the card number
      const cardNumber = this.paymentMethod.cardNumber;
      const maskedCardNumber =
        cardNumber.slice(0, -4).replace(/\d/g, '*') + cardNumber.slice(-4);
      paymentMethodDisplay = `Credit Card ending with ${maskedCardNumber}, Expiry: ${this.paymentMethod.expiry}`;
    } else {
      paymentMethodDisplay = 'Unknown';
    }

    return `
Order Summary:
Customer: ${this.customer.name}
Items:
${itemDetails.join('\n')}
Total Amount: $${this.getTotalAmount()}
Shipping Address: ${this.shippingAddress}
Payment Method: ${paymentMethodDisplay}
Status: ${this.status}
    `;
  }
}

export default Order;
