import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a text 'Create an account'", () => {
      const textToFind = "Create an account";

      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );

      const receivedText = screen.getByText(textToFind);

      expect(receivedText).toBeInTheDocument();
    });
  });
});
