import { useCart, useOrder } from "../../hooks";

export default function Layout({ children }: { children: React.ReactNode }) {
  const products = useCart((state) => state.products);
  const orders = useOrder((state) => state.orders);
  const totalOfItems = products.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  return (
    <div>
      <header className="flex items-center h-20 justify-between p-4 bg-gray-800 text-white">
        <div className="custom_container w-full flex items-center justify-between">
          <h1>Logo</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/orders">
                  Orders {!!orders.length && <span>({orders.length})</span>}
                </a>
              </li>

              <li>
                <a
                  href="/checkout"
                  className="rounded-md bg-yellow-500 text-black p-3"
                >
                  Checkout {totalOfItems > 0 && <span>({totalOfItems})</span>}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="custom_section custom_container">{children}</div>
      <footer className=" bottom-0 w-full flex items-center h-20 justify-between p-4 bg-gray-800 text-white">
        <div className="custom_container w-full flex items-center justify-between">
          <h1>Logo</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/orders">Orders</a>
              </li>
              <li>
                <a href="/" className="rounded-md bg-yellow-500 text-black p-3">
                  Checkout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
