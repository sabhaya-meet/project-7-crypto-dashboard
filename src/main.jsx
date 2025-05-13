import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider.jsx";
import "@fontsource/ubuntu";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <App />
  </Provider>
  // </StrictMode>
);
