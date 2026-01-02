import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Toastify from "./components/Toastify.jsx";
import { Toaster } from "react-hot-toast";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <App fruit="apple" />
  </StrictMode>
);
