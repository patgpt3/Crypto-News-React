import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Simple render without providers for testing
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
