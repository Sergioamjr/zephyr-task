import React from "react";
import { createRoot } from "react-dom/client";
import "./input.css";

import App, { Props } from "./App";
const root = createRoot(document.getElementById("root")!);
const defualtProps = {} as Props;
root.render(<App {...defualtProps} />);
