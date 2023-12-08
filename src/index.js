import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/index";
import thunk from "redux-thunk";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from "react-dnd/dist/core";

const composeEnchancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enchancer = composeEnchancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enchancer);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <App />
      </Provider>
    </DndProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
