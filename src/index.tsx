
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor}  from "./redux/store";
import './index.css';

import { App } from "./components/App";


const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
  <BrowserRouter basename="/ts-spa-cb">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
   </React.StrictMode>
);

