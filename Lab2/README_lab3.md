# Structural Design Patterns

## Author : Friptu Ludmila

### Objectives
1. Study and understand the Structural Design Patterns.
2. As a continuation of the previous laboratory work, think about the functionalities that your system will need to provide to the user.
3. Implement some additional functionalities using structural design patterns.
***

### The Used Structural Patterns
1. ___Facade___\
 __Facade__  is a pattern that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about.
2. ___Decorator___ \
 __Decorator__  is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
3. ___Adapter___ \
__Adapter__ is a structural design pattern that allows objects with incompatible interfaces to collaborate.An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter. For example, you can wrap an object that operates in meters and kilometers with an adapter that converts all of the data to imperial units such as feet and miles.

## Implementation
### 1. Implementation of  ___Facade___
__OnlineShop Facade__

In my project, the OnlineShop class serves as the Facade pattern, encapsulating interactions with different subsystems such as factories, builders, and singletons. This class centralizes operations like user registration, product creation, and order placement.


```
class OnlineShopFacade{
  constructor() {
    this.userFactory = new UserFactory();
    this.productFactory = new ProductFactory();
    this.logger = new Logger();
    this.users = {};
    this.products = {};
  }
}
```
It contains methods like:
- __registerUser__: Creates and registers a user.
- __createProduct__: Creates and registers a product.
- __placeOrder__: Builds and places an order for a customer.

Clients interact with these methods without needing to manage the underlying factories or builders.

### 2. Implementation of ___Decorator___

__Product Decorator Class__

The ProductDecorator serves as the foundational decorator that other concrete decorators, like GiftWrapper,  extend. It holds a reference to a Product object and ensures that any added functionality can easily integrate with the existing product's behavior.

```
class ProductDecorator extends Product {
  constructor(product) {
    super(product.name, product.price);
    this.product = product;
  }

  getDetails() {
    return this.product.getDetails();
  }
}
  ```
__GiftWrapper class__

In my project, the Decorator pattern is implemented to add additional features to products, such as gift wrapping, without modifying the original product classes.
The GiftWrapper class is a concrete decorator that enhances Product objects by adding gift-wrapping functionality.
It inherits properties and methods, maintaining a reference to the original product and increases the product's price for the gift-wrapping service. Finally, updates the product's details to reflect the new feature.
```
class GiftWrapper extends ProductDecorator {
  constructor(product) {
    super(product);
    this.price += 5; // Add $5 for gift wrapping
  }

  getDetails() {
    return `${this.product.getDetails()} + Gift Wrap`;
  }
}
```  

### 3. __Implementation of__ ___Adapter___

In my project, the Adapter Pattern is implemented to integrate an external payment processing system with my existing order processing system. This is achieved through the PaymentAdapter class, which adapts the external processor to match my system's expected payment interface.

__ExternalPayment class__

This class simulates an external payment service with its own interface.

```
class ExternalPayment {
    processPayment(amount, cardDetails) {
      console.log(`Processing payment of $${amount} using external processor`);
      return true;
    }
  }
```

__PaymentAdapter class__

The PaymentAdapter class acts as a bridge between my online shop and an external payment system. It translates my shop’s payment requests into a format that the external payment processor understands and vice versa. This allows my system to process payments without needing to change how my internal code handles payments.
```
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
```



## Ouput 
```
[2024-11-10T14:18:10.327Z] Registered user: Customer: Friptu Ludmila (ldd33@email.com)
[2024-11-10T14:18:10.339Z] Registered user: Admin: Admin User (admin@email.com)
[2024-11-10T14:18:10.340Z] Created product: Chanel 5 - $200 (Smell: aldehydic type)
[2024-11-10T14:18:10.340Z] Created product: Purito Green Serum - $30 (Concern: acne prone skin)
[2024-11-10T14:18:10.341Z] Order placed for customer: Friptu Ludmila

    Order Summary:
    Customer: Friptu Ludmila
    Items:
    Chanel 5 x1 - $205
    Purito Green Serum x2 - $60
    Total Amount: $212
    Shipping Address: 12/3 Balcani, Chisinau, Moldova
    Payment Method: Credit Card ending with ************3456, Expiry: 12/25
    Status: Pending
      
Processing payment of $212 using external processor
Order Status after payment: Paid

```
## Conclusion

In this project, I developed an online shop system by using important design patterns to make my code more organized and flexible. The Facade pattern helped simplify how different parts of the system work together, making it easier to manage. The Decorator pattern allowed to add extra features to the products, such as gift wrapping, without changing the original product code. The Adapter pattern made it possible to connect my shop with an external payment service easily. By using these patterns,I created a system that is easy to maintain and can grow with future needs. Overall, the project shows how using design patterns can improve the design and functionality of software applications.








