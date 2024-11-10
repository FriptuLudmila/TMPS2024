
class ExternalPayment {
    processPayment(amount, cardDetails) {
      console.log(`Processing payment of $${amount} using external processor`);
      return true;
    }
  }
  
  export default ExternalPayment;
   