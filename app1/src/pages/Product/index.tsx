import { useProducts, useCart } from "../../hooks";
import { Layout } from "../../components";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

export default function Product() {
  const { slug } = useParams();
  const { addToCart, getIsInCart, removeFromCart } = useCart();
  const products = useProducts().getById(slug!);

  const addToCartHandler = useCallback(() => {
    if (products) {
      addToCart({
        id: products.photo,
        name: products.title,
        price: products.price,
        quantity: 1,
      });
    }
  }, []);

  const isInCart = getIsInCart(products?.photo || "");

  const removeFromCartHandler = useCallback(() => {
    if (products) {
      removeFromCart(products.photo);
    }
  }, []);

  if (!products) {
    return (
      <Layout>
        <p>Produto não encontrado</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure>
            <img
              className=" w-full object-cover rounded-md md:object-top"
              src={products.imageUrl}
              alt={products.imageAlt}
            />
          </figure>
          <div>
            <div className="sticky top-3">
              <h3 className=" font-semibold text-lg mb-3">{products.title}</h3>
              <p>Description:</p>
              <p className=" text-gray-600 mb-3">{products.description}</p>
              <p>Price:</p>
              <div className="flex items-center gap-2">
                <p className=" text-gray-600">R${products.price}</p>
                <p className=" px-2_ line-through text-sm text-gray-400">
                  R${products.price}
                </p>
              </div>
              {!isInCart ? (
                <button
                  onClick={addToCartHandler}
                  className="mt-6 rounded-md bg-yellow-500 text-black p-3 w-full"
                >
                  Add to card
                </button>
              ) : (
                <button
                  onClick={removeFromCartHandler}
                  className="mt-6 rounded-md bg-red-500  text-white p-3 w-full"
                >
                  Remove from cart
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
