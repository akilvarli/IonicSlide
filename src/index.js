import * as React from "react";
import { render } from "react-dom";

import App from "./App";

import { createOvermind } from "overmind";
import { Provider } from "overmind-react";

import { config } from "./overmind";

const overmind = createOvermind(config, {
  devtools: "localhost:3031"
});

const rootElement = document.getElementById("root");
render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  rootElement
);
