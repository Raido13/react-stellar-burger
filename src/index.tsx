import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from "react-dnd/dist/core";
import "./index.css";
import App from "./components/app/app";
import { store } from "./services/store";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </DndProvider>
  </React.StrictMode>
);
