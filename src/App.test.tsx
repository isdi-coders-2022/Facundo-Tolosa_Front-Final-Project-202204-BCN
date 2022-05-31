import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders a text", () => {
  const expectedText = "Website under development";
  render(<App />);

  expect(screen.getByText(expectedText)).toBeInTheDocument();
});
