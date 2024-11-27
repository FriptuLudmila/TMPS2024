import Customer from '../models/Customer.js';
import Admin from '../models/Admin.js';

class UserFactory {
  createUser(type, name, email) {
    switch (type.toLowerCase()) {
      case 'customer':
        return new Customer(name, email);
      case 'admin':
        return new Admin(name, email);
      default:
        throw new Error(`User type '${type}' is not recognized`);
    }
  }
}

export default UserFactory;
