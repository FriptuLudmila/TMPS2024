import User from './User.js';

class Customer extends User {
  constructor(name, email) {
    super(name, email);
    this.type = 'Customer';
  }

  getInfo() {
    return `Customer: ${this.name} (${this.email})`;
  }
}

export default Customer;
