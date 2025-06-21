import type { IGenericObservable, Observable } from './types';
export declare class GenericObservable implements IGenericObservable {
    private observers;
    register(cb: Observable): () => void;
    unregister(cb: Observable): void;
    notifyObservers(data?: unknown): void;
    clearObservers(): void;
}
