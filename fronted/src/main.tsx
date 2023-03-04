import React from "react";
import ReactDOM from "react-dom/client";
import analytics from "./analytics";
import App from "./App";

analytics; //init
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
