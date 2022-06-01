import React from "react";
import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";
import { BrowserRouter } from "react-router-dom";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a text 'I already have an account'", () => {
      const textToFind = "I already have an account";

      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );

      const receivedText = screen.getByText(textToFind);

      expect(receivedText).toBeInTheDocument();
    });
  });
});
