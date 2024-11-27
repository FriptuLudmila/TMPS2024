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
  