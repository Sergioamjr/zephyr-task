interface Product {
    id: string;
    title: string;
    price: number;
    quantity: number;
    imageUrl: string;
    imageAlt: string;
}
interface ProductsState {
    products: Product[];
    clearCart: () => void;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    getIsInCart: (productId: string) => boolean;
}
declare const createStore: () => import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ProductsState>, "setState" | "persist"> & {
    setState(partial: ProductsState | Partial<ProductsState> | ((state: ProductsState) => ProductsState | Partial<ProductsState>), replace?: false | undefined): unknown;
    setState(state: ProductsState | ((state: ProductsState) => ProductsState), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<ProductsState, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ProductsState) => void) => () => void;
        onFinishHydration: (fn: (state: ProductsState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<ProductsState, unknown, unknown>>;
    };
}>;
declare global {
    interface Window {
        __mf_cart_store__?: ReturnType<typeof createStore>;
    }
}
export declare const useCart: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ProductsState>, "setState" | "persist"> & {
    setState(partial: ProductsState | Partial<ProductsState> | ((state: ProductsState) => ProductsState | Partial<ProductsState>), replace?: false | undefined): unknown;
    setState(state: ProductsState | ((state: ProductsState) => ProductsState), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<ProductsState, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ProductsState) => void) => () => void;
        onFinishHydration: (fn: (state: ProductsState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<ProductsState, unknown, unknown>>;
    };
}>;
export {};
