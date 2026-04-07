import { useCart } from "../../hooks";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { getTotalItems } = useCart();
  const totalOfItems = getTotalItems();

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
              {totalOfItems > 0 && (
                <li>
                  <a
                    href="/checkout"
                    className="rounded-md bg-yellow-500 text-black p-3"
                  >
                    Checkout ({totalOfItems})
                  </a>
                </li>
              )}
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
                <a href="/about" className="border-b-2">
                  Carrinho
                </a>
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
