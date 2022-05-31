import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Renders a text", () => {
  const expectedText = "AMAZING NOTES";
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByText(expectedText)).toBeInTheDocument();
});
