import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "@vkontakte/vkui/dist/vkui.css";
import "./assets/styles/main.css";
import { App } from "@/components/App";
import { store } from "@/service/store";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
