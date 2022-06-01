import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'AMAZING NOTES'", () => {
      const expectedText = "AMAZING NOTES";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const receivedElement = screen.getByText(expectedText);

      expect(receivedElement).toBeInTheDocument();
    });
  });
});
