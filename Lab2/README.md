# Creational Design Patterns
***
## Author : Friptu Ludmila
***
### Objectives
1. Study and understand the Creational Design Patterns.
2. Choose a domain, define its main classes/models/entities and choose the appropriate instantiation mechanisms.
3. Use some creational design patterns for object instantiation in a sample project.
***

### The Used Design Patterns
1. ___Singleton___\
 ___Singleton___ is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
2. ___Builder___ \
 ___Builder___ is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
3. ___Factory Method___ \
___Factory Method___  is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

## Implementation
### 1. __Implementation of__ ___Singleton___
__Logger Singleton__

The Logger class provides a centralized logging mechanism for my Online Shop application. By implementing it as a Singleton, I am making sure that all the parts of my application log messages through the same instance, maintaining the same log history.

```
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    const timestamp = new Date();
    this.logs.push({ message, timestamp });
    console.log(`[${timestamp.toISOString()}] ${message}`);
  }

  getLogs() {
    return this.logs;
  }
}

export default Logger;
```
__Database Singleton__

The Database class simulates a database connection. Implementing it as a Singleton ensures that only one database connection is established and shared across the application, which is important for resource management and consistency.

```
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this._connection = this._connect();
    Database.instance = this;
  }

  _connect() {
    console.log('Establishing new database connection...');
    // Simulate database connection 
    return { status: 'Connected', timestamp: new Date() };
  }

  getConnection() {
    return this._connection;
  }
}

export default Database;
```

Similar to the Logger class, the Database constructor checks if an instance exists and returns it if it does. The `_connect` method simulates a database connection and stores it in the `_connection` property. The instance is stored in `Database.instance`.

__Configuration Singleton__

The Configuration class manages global settings in my application, such as the application name, version, and debugging mode. It ensures that all parts of the application read from and write to the same configuration data. Any changes made to the configuration via one instance are reflected across the application.

```
class Configuration {
  constructor() {
    if (Configuration.instance) {
      return Configuration.instance;
    }
    this.settings = {
      appName: 'Online Shop',
      version: '1.0.0',
      debugMode: true,
    };
    Configuration.instance = this;
  }

  getSetting(key) {
    return this.settings[key];
  }

  setSetting(key, value) {
    this.settings[key] = value;
  }
}

export default Configuration;
```

### 2. __Implementation of__ ___Builder___

__Order class__

The Order class represents the object that I want to build. It contains all the details of an order: customer information, items, shipping address, payment method, order status, and discounts.

```
class Order {
  constructor(builder) {
    this.customer = builder.customer;
    this.items = builder.items;
    this.shippingAddress = builder.shippingAddress;
    this.paymentMethod = builder.paymentMethod;
    this.status = builder.status || 'Pending';
    this.discount = 0;
  }
```  
__OrderBuilder Class__

The OrderBuilder class provides methods to set various properties of an order like: `addItem`, `setShipping Adress`, `setPaymentMethod`, `setStatus`. It allows chaining methods to build the Order object step by step.

```
class OrderBuilder {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
    this.status = 'Pending';
  }
  ```
### 3. __Implementation of__ ___Factory Method___

__UserFactory Class__

The UserFactory class is designed to create different user types in my application. By centralizing the instantiation logic, it allows the application to generate different user objects (e.g., customers, admins) without the client code knowing  the details of each user class.

```
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
```

__ProductFactory Class__

The ProductFactory class makes the process of creating different product types easier. Similar to UserFactory, it abstracts the instantiation of different product classes (e.g., perfumes, skin care, makeup), allowing the application to generate diverse product objects without the client code needing details of each product class.

```
class ProductFactory {
  createProduct(type, name, price, attribute) {
    switch (type.toLowerCase()) {
      case 'make up':
        return new Makeup(name, price, attribute); 
      case 'skin care':
        return new SkinCare(name, price, attribute); 
      case 'perfumes':
        return new Perfumes(name, price, attribute)
      default:
        throw new Error(`Product type '${type}' is not recognized`);
    }
  }
}

export default ProductFactory;
```

## Ouput 
```
Establishing new database connection...
[2024-10-27T14:39:57.001Z] Application started
Are both database instances the same? true
Application Name: Online Shop
Customer: Friptu Ludmila (ldd33@example.com)
Admin: Admin User (admin@example.com)
[2024-10-27T14:39:57.005Z] Order created for customer: Friptu Ludmila
Chanel 5 - $200 (Smell: aldehydic type)
Purito Green Serum - $30 (Concern: acne prone skin)

  Order Summary:
  Customer: Friptu Ludmila
  Items:
  Chanel 5 x1 - $200
Purito Green Serum x2 - $60
  Total Amount: $260
  Shipping Address: 12/3 Balcani,Chisinau, Moldova
  Payment Method: Credit Card
  Status: Pending
      
Total Amount after discount: $208
Updated Order Status: Shipped
```

