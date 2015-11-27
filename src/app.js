export class Dbmonster {
  databases = [];

  activate() {
    let load;
    load = () => {
      this.databases = ENV.generateData().toArray();
      Monitoring.renderRate.ping();
      setTimeout(load, ENV.timeout);
    };
    load();
  }
}

export class SimpleClassCustomAttribute {
  static inject = [Element];

  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue) {
    this.element.className = newValue;
  }
}
