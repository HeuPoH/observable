export type ObservableClass<T> = {
    notify(data?: T): void;
};
export type ObservableFunction<T> = (data?: T) => void;
export type Observable<T = unknown> = ObservableClass<T> | ObservableFunction<T>;
export interface IGenericObservable<T = unknown> {
    register(obs: Observable<T>): () => void;
    unregister(obs: Observable<T>): void;
    notifyObservers(data?: T): void;
    clearObservers(): void;
}
