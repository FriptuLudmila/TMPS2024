import Order from "./Order.js";

  class OrderBuilder {
    constructor(customer) {
      this.customer = customer;
      this.items = [];
      this.shippingAddress = '';
      this.paymentMethod = '';
      this.status = 'Pending';
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
  
    build() {
      if (!this.shippingAddress || !this.paymentMethod) {
        throw new Error('Order must have a shipping address and a payment method');
      }
      return new Order(this);
    }

    applyDiscount(code) {
        // Simple discount logic
        if (code === 'BLACKFRIDAY') {
          this.discount = 0.2; // 20% discount
        } else {
          this.discount = 0;
        }
      }
    
      getTotalAmount() {
        const total = this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        return this.discount ? total * (1 - this.discount) : total;
      }
  }
  
  export default OrderBuilder;
  