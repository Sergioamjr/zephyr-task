interface Product {
    id: string;
    price: number;
    quantity: number;
}
interface Order {
    id: string;
    products: Product[];
    total: number;
    createdAt: Date;
}
interface OrderState {
    orders: Order[];
    createOrder: (product: Product[]) => void;
}
declare const createStore: () => import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<OrderState>, "setState" | "persist"> & {
    setState(partial: OrderState | Partial<OrderState> | ((state: OrderState) => OrderState | Partial<OrderState>), replace?: false | undefined): unknown;
    setState(state: OrderState | ((state: OrderState) => OrderState), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<OrderState, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: OrderState) => void) => () => void;
        onFinishHydration: (fn: (state: OrderState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<OrderState, unknown, unknown>>;
    };
}>;
declare global {
    interface Window {
        __mf_order_store__?: ReturnType<typeof createStore>;
    }
}
export declare const useOrder: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<OrderState>, "setState" | "persist"> & {
    setState(partial: OrderState | Partial<OrderState> | ((state: OrderState) => OrderState | Partial<OrderState>), replace?: false | undefined): unknown;
    setState(state: OrderState | ((state: OrderState) => OrderState), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<OrderState, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: OrderState) => void) => () => void;
        onFinishHydration: (fn: (state: OrderState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<OrderState, unknown, unknown>>;
    };
}>;
export {};
