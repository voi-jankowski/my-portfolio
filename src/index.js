import React from "react";
import { createRoot } from "react-dom/client"; // Updated import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "semantic-ui-less/semantic.less";

// Create a root.
const root = createRoot(document.getElementById("root")); // New way to create root

// Render the app into the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The rest of your code remains the same
reportWebVitals();
