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
      // Simulate database connection setup
      return { status: 'Connected', timestamp: new Date() };
    }
  
    getConnection() {
      return this._connection;
    }
  }
  
  export default Database;
  