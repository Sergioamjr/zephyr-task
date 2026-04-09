import { useProducts, useCart } from "../../hooks";
import { Layout, PageTitle } from "../../components";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatMoney } from "../../utils";

export default function Product() {
  const { slug } = useParams();
  const { addToCart, getIsInCart, removeFromCart } = useCart();
  const products = useProducts().getById(slug!);

  const addToCartHandler = useCallback(() => {
    if (products) {
      addToCart({
        id: products.id,
        price: products.price,
        quantity: 1,
      });
    }
  }, []);

  const isInCart = getIsInCart(products?.id || "");

  const removeFromCartHandler = useCallback(() => {
    if (products) {
      removeFromCart(products.id);
    }
  }, []);

  if (!products) {
    return (
      <Layout>
        <PageTitle title="Product &gt; ?" />
        <p data-testid="not-found" className="main_font text-center">
          Product not found.
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <PageTitle title={`Product > ${products.title}`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure>
            <img
              data-testid="prod-image"
              className=" w-full object-cover rounded-md md:object-top"
              src={products.imageUrl}
              alt={products.imageAlt}
            />
          </figure>
          <div>
            <div className="sticky top-3">
              <h3
                data-testid="prod-title"
                className=" font-semibold text-lg mb-3"
              >
                {products.title}
              </h3>
              <p className="main_font text-sm">Description:</p>
              <p className=" text-gray-600 mb-3">{products.description}</p>
              <p className="main_font text-sm">Price:</p>
              <div className="flex items-center gap-2">
                <p className=" text-gray-600">{formatMoney(products.price)}</p>
              </div>
              {!isInCart ? (
                <button
                  aria-label="Add to cart"
                  data-testid="add-to-cart-btn"
                  onClick={addToCartHandler}
                  className="mt-6 rounded-md bg-yellow-500 text-black p-3 w-full"
                >
                  Add to card
                </button>
              ) : (
                <>
                  <div className="flex flex-row gap-2 mt-6 justify-between">
                    <a
                      data-testid="go-to-checkout-btn"
                      href="/checkout"
                      className="block text-black rounded-md text-center bg-yellow-500 p-3 w-full"
                    >
                      Go to Checkout
                    </a>
                    <button
                      data-testid="remove-from-cart-btn"
                      aria-label="Remove from cart"
                      onClick={removeFromCartHandler}
                      className="rounded-md bg-red-500 text-white p-3 w-12 flex items-center justify-center"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </>
              )}
              <a
                data-testid="continue-buying-btn"
                className="text-center mt-4 block rounded-md bg-white border p-3 w-full text-blue-600"
                href="/"
              >
                Continue buying
              </a>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
