import { Home, Product, Checkout, Orders, NotFound } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./input.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/:slug" element={<Product />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
