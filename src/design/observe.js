// 发布者
class Publisher {
  constructor() {
    this.observers = [];
    console.log('publish created');
  }
  add(observer) {
    console.log('observers add');
    this.observers.push(observer);
  }
  remove(observer) {
    console.log('observers remove');
    this.observers.forEach((item, index) => {
      if (item === observer) {
        this.observers.splice(index, 1);
      }
    });
  }
  notify() {
    console.log('notify');
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

// 订阅者
class Observer {
  constructor() {
    console.log('obserber created');
  }
  update() {
    console.log('observer update');
  }
}
