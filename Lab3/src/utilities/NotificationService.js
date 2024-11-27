import Observer from '../observer/Observer.js'; 

class NotificationService extends Observer {
  update(order) {
    const customerEmail = order.customer.email;
    console.log(`Notifying ${customerEmail}: Your order status is now '${order.status}'.`);
  }
}

export default NotificationService;
