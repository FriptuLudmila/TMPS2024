class Order {
    constructor(builder) {
      this.customer = builder.customer;
      this.items = builder.items;
      this.shippingAddress = builder.shippingAddress;
      this.paymentMethod = builder.paymentMethod;
      this.status = builder.status || 'Pending';
      this.discount = 0;
    }
  
    applyDiscount(code) {
      // discount 
      if (code === 'BLACKFRIDAY') {
        this.discount = 0.2; // 20% discount
      } else if (code === 'CYBERMONDAY') {
        this.discount = 0.15; // 15% discount
      } else {
        this.discount = 0; // no discount
      }
    }
  
    getTotalAmount() {
      const total = this.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      return this.discount ? total * (1 - this.discount) : total;
    }
  
    setStatus(status) {
      this.status = status;
    }
  
    getOrderSummary() {
      const itemDetails = this.items.map(
        (item) =>
          `${item.product.name} x${item.quantity} - $${
            item.product.price * item.quantity
          }`
      );
      return `
  Order Summary:
  Customer: ${this.customer.name}
  Items:
  ${itemDetails.join('\n')}
  Total Amount: $${this.getTotalAmount()}
  Shipping Address: ${this.shippingAddress}
  Payment Method: ${this.paymentMethod}
  Status: ${this.status}
      `;
    }
  }

  export default Order;