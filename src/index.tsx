
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from "styled-components";
import store, {persistor}  from "./redux/store";
import './index.css';
import { theme } from "./components/styled";

import { App } from "./components/App";


const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/ts-spa-cb">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
      </ThemeProvider>
    
  </BrowserRouter>
   </React.StrictMode>
);

