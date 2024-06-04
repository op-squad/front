import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route
            path="/*"
            element={<App />}
          ></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
