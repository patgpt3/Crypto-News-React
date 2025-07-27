import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Providers from "./assets/providers/privyProvider";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PopupProvider } from "./assets/providers/popupContext";

// Define the root component with providers
const Root = () => {
  return (
    <StrictMode>
      <Providers>
        <HelmetProvider>
          <BrowserRouter>
            <PopupProvider>
              <App />
            </PopupProvider>
          </BrowserRouter>
        </HelmetProvider>
      </Providers>
    </StrictMode>
  );
};

// Render the Root component into the `#root` div
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<Root />);
}
