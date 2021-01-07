import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Titillium Web",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
