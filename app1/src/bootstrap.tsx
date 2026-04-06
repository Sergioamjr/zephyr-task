import App from "./App";
import { createRoot } from "react-dom/client";
import { Home, Product } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./input.css";

const Test = () => <p>Test</p>;
const NotFound = () => <p>Not Found</p>;

const root = createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/cart" element={<Test />} />
      <Route path="/checkout" element={<Test />} />
      <Route path="/" element={<Home />}></Route>
      <Route path="/:slug" element={<Product />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
