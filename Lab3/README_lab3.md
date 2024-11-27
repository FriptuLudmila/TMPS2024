# Behavioral Design Patterns

## Author : Friptu Ludmila

### Objectives
1. Study and understand the Behavioral Design Patterns.
2. As a continuation of the previous laboratory work, think about what communication between software entities might be involed in your system.
3. Implement some additional functionalities using behavioral design patterns.
***

### The Used Behavioral Patterns
1. ___Strategy___\
 __Strategy__  is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable. The pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called strategies.
The original class, called context, must have a field for storing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own.
2. ___Observer___ \
 __Observer__ is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing. The Observer pattern is usually used when changes to the state of one object may require changing other objects, and the actual set of objects is unknown beforehand or changes dynamically.




## Implementation
### 1. Implementation of  ___Stratregy___

In my project, the Strategy Pattern is used to handle various discount strategies applied to orders. This allows the system to apply different discount rules for example: Black Friday or  Cyber Monday without altering the core Order class logic. \
The DiscountStrategy class acts as the Strategy interface. It defines a method getDiscount that each concrete strategy must implement.
 
```
class DiscountStrategy {
    getDiscount(totalAmount) {
      throw new Error('DiscountStrategy.getDiscount() must be implemented');
    }
  }
  
  export default DiscountStrategy; 
```
And the concrete Strategy Implementations are: 

```
class BlackFridayStrategy extends DiscountStrategy {
  getDiscount(totalAmount) {
    return totalAmount * 0.2; // 20% discount
  }
}

export default BlackFridayStrategy;
```  
```
class CyberMondayStrategy extends DiscountStrategy {
  getDiscount(totalAmount) {
    return totalAmount * 0.15; // 15% discount
  }
}

export default CyberMondayStrategy;
``` 
In this way, we can easily add new discount strategies in the future without modifying existing code.


### 2. Implementation of ___Observer___

In my project, the Observer Pattern is used to notify customers when their order status changes. This ensures that customers are kept informed about the progress of their orders without the Order class being tightly coupled to the notification mechanisms.

The Observer class acts as an interface that all concrete observers must implement. It defines the update method, which is called by the subject to notify observers of changes.

```
class Observer {
  update(subject) {
    throw new Error(`Observer.update() must be implemented. Received subject: ${subject}`);
  }
}

export default Observer;
  ```

The Subject class manages a list of observers and provides methods to attach, detach, and notify them of any state changes.

```
class Subject {
    constructor() {
      this.observers = [];
    }
```  
* attach(observer): adds an observer to the list if it's not already present.
* detach(observer): removes an observer from the list if it exists.
* notify(): iterates through all attached observers, calls their update method and passes itself as the subject.


## Ouput 
```
[2024-11-27T10:46:22.448Z] Registered user: Customer: Friptu Ludmila (ldd33@email.com)
[2024-11-27T10:46:22.462Z] Registered user: Admin: Admin User (admin@email.com)
[2024-11-27T10:46:22.463Z] Created product: Chanel 5 - $200 (Smell: aldehydic type)
[2024-11-27T10:46:22.464Z] Created product: Purito Green Serum - $30 (Concern: acne prone skin)
[2024-11-27T10:46:22.466Z] Order placed for customer: Friptu Ludmila

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
Notifying ldd33@email.com: Your order status is now 'Paid'.
Order Status after payment: Paid

```
## Conclusion

In conclusion, adding the Observer and Strategy patterns to my Online Shop system has made it much better.
The Observer pattern allows the system to automatically notify customers when their order status changes, like when it moves from "Pending" to "Paid." It makes sure customers are always informed without complicating the order process.
The Strategy pattern lets us easily apply different discount rules, such as Black Friday or Cyber Monday discounts. Instead of hardcoding discounts, we can switch between various discount methods smoothly.
Overall, these patterns have made my code more organized, flexible, and easier to maintain. They help my system handle updates and changes efficiently, ensuring a better experience for both customers and developers.







