import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

interface Product {
  id: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  products: Product[];
  total: number;
}

interface OrderState {
  orders: Order[];
  createOrder: (product: Order[]) => void;
}

const createStore = () =>
  create<OrderState>()(
    persist(
      (set) => {
        const createOrderHandler = (product: Order[]) => {
          set((state) => {
            return {
              orders: [
                ...state.orders,
                {
                  id: uuidv4(),
                  products: product.flatMap((p) => p.products),
                  total: product.reduce(
                    (acc, curr) =>
                      acc +
                      curr.products.reduce(
                        (prodAcc, prodCurr) =>
                          prodAcc + prodCurr.price * prodCurr.quantity,
                        0,
                      ),
                    0,
                  ),
                },
              ],
            };
          });
        };

        return {
          orders: [],
          createOrder: createOrderHandler,
        };
      },
      {
        name: "order-storage",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  );

declare global {
  interface Window {
    __mf_order_store__?: ReturnType<typeof createStore>;
  }
}

export const useOrder = (window.__mf_order_store__ ??= createStore());
