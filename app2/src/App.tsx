import { useCallback, useState } from "react";
import { useCart, useProducts, useOrder } from "default_webpack_mf_first/hooks";
import { formatMoney } from "default_webpack_mf_first/utils";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import * as lottie from "lottie-web";
import paid from "./assets/paid.json";
import payment_process from "./assets/payment_process.json";

export default function App() {
  const { createOrder } = useOrder((state) => state);
  const { removeFromCart, products, clearCart, updateQuantity } = useCart(
    (state) => state,
  );
  const [isCreating, setIsCreating] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

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

  const { getById } = useProducts();

  const triggerAnimation = useCallback(
    ({
      id,
      animation,
      shouldDestroy,
    }: {
      id: string;
      animation?: Record<any, any>;
      shouldDestroy?: boolean;
    }) => {
      const el = document.getElementById(id);
      if (el) {
        const anim = lottie.default.loadAnimation({
          container: el,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: animation,
        });
        if (shouldDestroy) {
          setTimeout(() => {
            anim.destroy();
          }, 3000);
        }
      }
    },
    [],
  );

  const onSubmitHandler = useCallback(() => {
    setIsCreating(true);
    triggerAnimation({
      id: "processing",
      animation: payment_process,
      shouldDestroy: true,
    });
    setTimeout(() => {
      setIsCreating(false);
      setOrderCreated(true);
      clearCart();
      createOrder(
        products.map((d) => ({
          id: d.id,
          price: d.price,
          quantity: d.quantity,
        })),
      );
      setTimeout(() => {
        triggerAnimation({
          id: "paid",
          animation: paid,
        });
      }, 0);
    }, 3000);
  }, [triggerAnimation, products, createOrder, setIsCreating]);

  return (
    <div>
      <>
        {orderCreated && (
          <div>
            <p
              data-testid="order-created"
              className="text-center font-bold text-green-500 text-lg mb-4_"
            >
              Order created successfully!
            </p>
            <p className="text-center font-bold_ text-green-500_ text-lg mb-4">
              Go to the{" "}
              <a
                data-testid="go-to-orders-btn"
                className="border-b-blue-600 text-blue-600"
                href="/orders"
              >
                orders
              </a>{" "}
              page to see your order details.
            </p>
            <div id="paid" className="w-64 mx-auto" />
          </div>
        )}
        {products.length === 0 && !orderCreated && (
          <p className="text-center font-extralight">
            Your cart is empty. Go to the producs page and select your products.
          </p>
        )}
        {!!products.length && !orderCreated && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="col-span-3 w-full">
              <table className="w-full">
                <thead>
                  <tr className="main_font text-sm">
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
                                data-testid={`decrease-quantity-${product?.id}`}
                                aria-label={`Decrease quantity of ${product?.title} in cart`}
                                disabled={product?.quantity <= 1 || isCreating}
                                className="disabled:opacity-50 disabled_button disabled:cursor-not-allowed rounded-md bg-gray-300 h-6 w-6 flex items-center justify-center"
                                onClick={() =>
                                  decreaseQuantityHandler(product.id!)
                                }
                              >
                                <FaMinus />
                              </button>
                              <p className="font-light">{product.quantity}</p>
                              <button
                                data-testid={`increase-quantity-${product?.id}`}
                                aria-label={`Increase quantity of ${product?.title} in cart`}
                                disabled={isCreating}
                                className="rounded-md disabled_button bg-gray-300 h-6 w-6 flex items-center justify-center"
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
                              data-testid={`remove-from-cart-${product?.id}`}
                              aria-label={`Remove ${product?.title} from cart`}
                              disabled={isCreating}
                              onClick={() => removeFromCart(product.id!)}
                              className="rounded-md disabled_button bg-red-300 h-6 w-6 flex items-center justify-center"
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
                  disabled={isCreating}
                  onClick={clearCart}
                  data-testid="clear-cart-btn"
                  className="bg-red-500 disabled_button text-white p-2 rounded-md w-auto mt-2 block"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 md:text-right">
                Order Summary
              </h3>
              <div className="flex justify-between">
                <p className="md:text-right font-bold main_font text-sm">
                  Total Items:
                </p>
                <p data-testid="total_quantity">
                  {products.reduce((sum, p) => sum + p.quantity, 0)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="md:text-right font-bold main_font text-sm">
                  Total Price:
                </p>
                <p className="md:text-right" test-id="total_price">
                  {formatMoney(
                    products.reduce((sum, p) => sum + p.price * p.quantity, 0),
                  )}
                </p>
              </div>
              <button
                disabled={isCreating}
                data-testid="pay-btn"
                onClick={onSubmitHandler}
                className="mt-4 rounded-md bg-green-500 text-white p-3 w-full block relative"
              >
                {isCreating ? "Processing..." : "Pay"}
              </button>
              <div id="processing" className="w-52 m-auto" />
            </div>
          </div>
        )}
      </>
    </div>
  );
}
