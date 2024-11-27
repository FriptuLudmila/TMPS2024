class Subject {
    constructor() {
      this.observers = [];
    }
  
    attach(observer) {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    }
  
    detach(observer) {
      const index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify() {
      for(const observer of this.observers) {
        observer.update(this);
      }
    }
  }
  
  export default Subject;
  