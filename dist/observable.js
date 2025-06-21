"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericObservable = void 0;
class GenericObservable {
    constructor() {
        this.observers = [];
    }
    register(cb) {
        this.observers.push(cb);
        return () => this.unregister(cb);
    }
    unregister(cb) {
        this.observers = this.observers.filter((o) => o !== cb);
    }
    notifyObservers(data) {
        this.observers.forEach((o) => {
            if ('notify' in o) {
                o.notify(data);
            }
            else {
                o(data);
            }
        });
    }
    clearObservers() {
        this.observers = [];
    }
}
exports.GenericObservable = GenericObservable;
