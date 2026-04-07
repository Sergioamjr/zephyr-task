import { useOrder, useProducts } from "default_webpack_mf_first/store";

export default function App() {
  const orders = useOrder((state) => state.orders);
  const { getById } = useProducts();

  const formatMoney = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div>
      <>
        {orders.length === 0 ? (
          <p className="text-center font-extralight">
            There's no orders. Go to the producs page and select your products..
          </p>
        ) : (
          <div className="w-full">
            <div className="col-span-3 w-full">
              {orders.map((order) => {
                return (
                  <div
                    key={order.id}
                    className="border-b-[1px] last:border-b-0 pb-4 last:pb-0 pt-4"
                  >
                    <h2 className="font-bold ">Order ID: {order.id}</h2>
                    <ul>
                      {order.products
                        .map((p) => ({
                          ...getById(p.id),
                          quantity: p.quantity,
                        }))
                        .map((product) => {
                          if (!product) return null;
                          return (
                            <li
                              key={product.id}
                              className="flex gap-2 items-center"
                            >
                              <img
                                src={product.imageUrl}
                                alt={product.imageAlt}
                                className="w-16 h-16 object-cover rounded-md object-top mb-2 mt-2"
                              />
                              <div className="flex justify-between w-full">
                                <p>{product.title}</p>
                                <p className="font-light">
                                  {formatMoney(product.price!)} x{" "}
                                  {product.quantity} ={" "}
                                  {formatMoney(
                                    product.price! * product.quantity,
                                  )}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                    <p className="font-bold text-right">
                      Total: {formatMoney(order.total)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    </div>
  );
}
