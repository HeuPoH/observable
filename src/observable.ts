import type { IGenericObservable, Observable } from './types';

export class GenericObservable implements IGenericObservable {
  private observers: Observable[] = [];

  register(cb: Observable) {
    this.observers.push(cb);
    return () => this.unregister(cb);
  }

  unregister(cb: Observable): void {
    this.observers = this.observers.filter((o) => o !== cb);
  }

  notifyObservers(data?: unknown): void {
    this.observers.forEach((o) => {
      if ('notify' in o) {
        o.notify(data);
      } else {
        o(data);
      }
    });
  }

  clearObservers(): void {
    this.observers = [];
  }
}
