import { Home, Product, Checkout } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./input.css";

const Test = () => <p>Test</p>;
const NotFound = () => <p>Not Found</p>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Test />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/:slug" element={<Product />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
