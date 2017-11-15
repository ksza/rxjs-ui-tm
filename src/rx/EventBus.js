class EventBus {
  constructor() {
    this.subscribers = [];
  }

  push(element) {
    if (this.subscribers) {
      this.subscribers.forEach(s => s(element));
    }
  }

  isHandler(handler) {
    return handler && typeof handler === 'function';
  }

  addEventListener(eventName, handler) {
    console.log('... adding handler');
    if (this.isHandler(handler)) {
      this.subscribers.push(handler);
    }
  }

  removeEventListener(handler) {
    if (this.isHandler(handler)) {
      const index = this.subscribers.indexOf(handler);
      if (index != -1) {
        this.subscribers.splice(index, 1);
      }
    }
  }
}

const eventBus = new EventBus();

export default eventBus;
