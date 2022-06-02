import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a text 'Create an account'", () => {
      const textToFind = "Logged in";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const receivedText = screen.getByText(textToFind);

      expect(receivedText).toBeInTheDocument();
    });
  });
});