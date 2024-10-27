import User from './User.js';

class Admin extends User {
  constructor(name, email) {
    super(name, email);
    this.type = 'Admin';
  }

  getInfo() {
    return `Admin: ${this.name} (${this.email})`;
  }
}

export default Admin;
