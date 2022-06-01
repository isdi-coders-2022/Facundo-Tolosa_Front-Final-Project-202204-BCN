import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";
import { Provider } from "react-redux";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'AMAZING NOTES'", () => {
      const expectedText = "AMAZING NOTES";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
      const receivedElement = screen.getByText(expectedText);

      expect(receivedElement).toBeInTheDocument();
    });
  });
});
