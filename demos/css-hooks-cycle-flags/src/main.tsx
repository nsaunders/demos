import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { styleSheet } from "./css";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <style>{styleSheet()}</style>
    <App />
  </StrictMode>,
);
