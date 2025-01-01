import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./src/App";
import { basename, production } from "./env";
import { createRoot } from "react-dom/client";

//@ts-ignore
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={production ? basename : ""}>
    <App />
  </BrowserRouter>
);
