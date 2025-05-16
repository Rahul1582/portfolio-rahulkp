import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";

// Use React.StrictMode as the outermost wrapper for best practices.
// Only call ReactDOM.createRoot and root.render if the element exists.

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ThemeEditorProvider>
          <App />
        </ThemeEditorProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  // Optional: Handle the case where root element is not found.
  // This block will help debugging in development.
  // eslint-disable-next-line no-console
  console.error("Root element not found. Unable to render React app.");
}

// Web Vitals reporting (optional for performance monitoring).
reportWebVitals();
