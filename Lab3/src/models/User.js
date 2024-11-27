class User {
    constructor(name, email) {
      if (new.target === User) {
        throw new TypeError('Cannot instantiate abstract class User directly');
      }
      this.name = name;
      this.email = email;
    }
  
    getInfo() {
      throw new Error('Method getInfo() must be implemented');
    }
  }
  
  export default User;
  