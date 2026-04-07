import { useCallback } from "react";
import { useCart, useProducts, useOrder } from "default_webpack_mf_first/store";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import * as lottie from "lottie-web";
import groovyWalkAnimation from "./assets/approvedPayment.json";

export default function App() {
  // return <p>dasda</p>;
  const { createOrder, orders } = useOrder((state) => state);
  const { removeFromCart, products, clearCart, updateQuantity } = useCart(
    (state) => state,
  );

  const increaseQuantityHandler = useCallback(
    (productId: string) => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        updateQuantity(productId, product.quantity + 1);
      }
    },
    [products, updateQuantity],
  );
  const decreaseQuantityHandler = useCallback(
    (productId: string) => {
      const product = products.find((p) => p.id === productId);
      if (product && product.quantity > 1) {
        updateQuantity(productId, product.quantity - 1);
      }
    },
    [products, updateQuantity],
  );
  const formatMoney = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const { getById } = useProducts();

  const triggerAnimation = useCallback(() => {
    const el = document.getElementById("lottie");
    if (el) {
      const anim = lottie.default.loadAnimation({
        container: el,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: groovyWalkAnimation,
      });
      setTimeout(() => {
        anim.destroy();
      }, 2000);
    }
  }, []);

  const onSubmitHandler = useCallback(() => {
    triggerAnimation();

    createOrder(
      products.map((d) => ({
        id: d.id,
        price: d.price,
        quantity: d.quantity,
      })),
    );
  }, [triggerAnimation, products, createOrder]);

  return (
    <div>
      <>
        {products.length === 0 ? (
          <p className="text-center font-extralight">
            Your cart is empty. Go to the producs page and select your products.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="col-span-3 w-full">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products
                    .map((p) => ({ ...getById(p.id), quantity: p.quantity }))
                    .map((product) => {
                      if (!product) return null;
                      return (
                        <tr
                          key={product?.id}
                          className="border-b-[1px] last:border-b-0 pb-2 last:pb-0"
                        >
                          <td className="">
                            <div className="flex gap-2 items-center">
                              <img
                                src={product?.imageUrl}
                                alt={product?.imageAlt}
                                className="w-16 h-16 object-cover rounded-md object-top mb-2 mt-2"
                              />
                              {product?.title}
                            </div>
                          </td>
                          <td>
                            <p className="font-light">
                              {formatMoney(product?.price!)}
                            </p>
                          </td>
                          <td>
                            <div className="flex justify-around">
                              <button
                                disabled={product?.quantity <= 1}
                                className="disabled:opacity-50 disabled:cursor-not-allowed rounded-md bg-gray-300 h-6 w-6 flex items-center justify-center"
                                onClick={() =>
                                  decreaseQuantityHandler(product.id!)
                                }
                              >
                                <FaMinus />
                              </button>
                              <p className="font-light">{product.quantity}</p>
                              <button
                                className="rounded-md bg-gray-300 h-6 w-6 flex items-center justify-center"
                                onClick={() =>
                                  increaseQuantityHandler(product.id!)
                                }
                              >
                                <FaPlus />
                              </button>
                            </div>
                          </td>
                          <td>
                            <p className="text-right font-light mr-2">
                              {formatMoney(product.price! * product.quantity)}
                            </p>
                          </td>
                          <td>
                            <button
                              onClick={() => removeFromCart(product.id!)}
                              className="rounded-md bg-red-300 h-6 w-6 flex items-center justify-center"
                            >
                              <FaXmark />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="flex justify-end">
                <button
                  onClick={clearCart}
                  className="bg-red-500 text-white p-2 rounded-md w-auto mt-2 block"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 md:text-right">
                Order Summary
              </h2>
              <div className="flex justify-between">
                <p className="md:text-right font-bold">Total Items:</p>
                <p>{products.reduce((sum, p) => sum + p.quantity, 0)}</p>
              </div>
              <div className="flex justify-between">
                <p className="md:text-right font-bold">Total Price:</p>
                <p className="md:text-right ">
                  {formatMoney(
                    products.reduce((sum, p) => sum + p.price * p.quantity, 0),
                  )}
                </p>
              </div>
              <button
                onClick={onSubmitHandler}
                className="mt-4 rounded-md bg-green-500 text-white p-3 w-full block relative"
              >
                Pay
                <div id="lottie" className="w-14 absolute" />
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
