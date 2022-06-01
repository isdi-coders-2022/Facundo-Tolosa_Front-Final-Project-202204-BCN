import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a text 'Create an account'", () => {
      const textToFind = "Create an account";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const receivedText = screen.getByText(textToFind);

      expect(receivedText).toBeInTheDocument();
    });
  });
});
