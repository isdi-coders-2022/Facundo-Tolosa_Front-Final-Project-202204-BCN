import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

test("Renders a text", () => {
  const expectedText = "AMAZING NOTES";
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByText(expectedText)).toBeInTheDocument();
});
