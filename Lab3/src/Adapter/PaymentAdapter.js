
import ExternalPayment from './ExternalPayment.js';

class PaymentAdapter {
  constructor() {
    this.externalProcessor = new ExternalPayment();
  }

  process(amount, paymentMethod) {
    const cardDetails = {
      cardNumber: paymentMethod.cardNumber,
      expiry: paymentMethod.expiry,
      cvv: paymentMethod.cvv,
    };
    return this.externalProcessor.processPayment(amount, cardDetails);
  }
}

export default PaymentAdapter;
