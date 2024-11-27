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
  