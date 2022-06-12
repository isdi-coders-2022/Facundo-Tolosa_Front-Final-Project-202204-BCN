import React from "react";
import {
  askForPermissionToReceiveNotifications,
  initializeFirebase,
} from "./push-notification";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

initializeFirebase();
askForPermissionToReceiveNotifications();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

serviceWorkerRegistration.register();
