import ReactDOM from "react-dom/client";
import React from "react";

import "./assets/styles/main.css";
import { Provider } from "react-redux";

import { App } from "@/components/App";
import { store } from "@/service/store";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
