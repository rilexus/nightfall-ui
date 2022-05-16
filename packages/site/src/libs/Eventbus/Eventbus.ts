class EventBus {
  channels: { [type: string]: any[] } = {};

  addListener(type: string, listener: () => void) {
    if (typeof listener !== "function") {
      return;
    }
    if (Array.isArray(this.channels[type])) {
      this.channels[type].push(listener);
      return;
    }
    this.channels[type] = [listener];
  }

  removeListener(type: string, listener: () => void) {
    if (typeof listener !== "function") {
      return;
    }
    if (this.channels[type]) {
      this.channels[type] = this.channels[type].filter((l) => l !== listener);
      return;
    }
  }

  emit(type: string, value: any) {
    if (this.channels[type]) {
      this.channels[type].forEach((l) => {
        l(value);
      });
    }
  }
}

export default EventBus;
