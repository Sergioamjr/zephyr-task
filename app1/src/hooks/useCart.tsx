import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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

const createStore = () =>
  create<ProductsState>()(
    persist(
      (set, get) => {
        const addToCartHandler = (product: Product) => {
          set((state) => {
            const existingProduct = state.products.find(
              (p) => p.id === product.id,
            );
            if (existingProduct) {
              return {
                products: state.products.map((p) =>
                  p.id === product.id
                    ? { ...p, quantity: p.quantity + product.quantity }
                    : p,
                ),
              };
            }
            return { products: [...state.products, product] };
          });
        };

        const removeFromCartHandler = (productId: string) => {
          set((state) => ({
            products: state.products.filter((p) => p.id !== productId),
          }));
        };

        const updateQuantityHandler = (productId: string, quantity: number) => {
          set((state) => ({
            products: state.products.map((p) =>
              p.id === productId ? { ...p, quantity } : p,
            ),
          }));
        };

        const getIsInCartHandler = (productId: string) => {
          const product = get().products.find((p) => p.id === productId);
          return !!product;
        };

        const clearCartHandler = () => {
          set({ products: [] });
        };

        return {
          products: [],
          addToCart: addToCartHandler,
          removeFromCart: removeFromCartHandler,
          updateQuantity: updateQuantityHandler,
          getIsInCart: getIsInCartHandler,
          clearCart: clearCartHandler,
        };
      },
      {
        name: "cart-storage",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  );

declare global {
  interface Window {
    __mf_cart_store__?: ReturnType<typeof createStore>;
  }
}

export const useCart = (window.__mf_cart_store__ ??= createStore());
