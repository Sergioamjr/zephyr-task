import { products } from "./../utils/store";

export const useProducts = () => {
  return {
    all: products,
    getById: (id: string) => products.find((p) => p.id === id),
  };
};
