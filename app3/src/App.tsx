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
              {orders.reverse().map((order) => {
                console.log("order", order);
                return (
                  <div
                    key={order.id}
                    className="border-b-[1px] last:border-b-0 pb-4 last:pb-0 pt-4"
                  >
                    <div className="flex justify-between">
                      <h2>
                        <span className="font-bold">Order ID: </span>
                        {order.id}
                      </h2>
                      {order.createdAt && (
                        <p>
                          <span className="font-bold">Created at: </span>
                          {new Date(order.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
                        </p>
                      )}
                    </div>
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
                    <p className="text-right">
                      <span className="font-bold">Total: </span>
                      {formatMoney(order.total)}
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
