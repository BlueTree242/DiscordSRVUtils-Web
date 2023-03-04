import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Analytics from 'analytics'
import googleAnalytics from "@analytics/google-analytics";


const analytics = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-99S6J5MHBJ']
    })
  ]
})
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
