import React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("Given a LoginForm component", () => {
  describe("When the word 'hello' is written to the name input field", () => {
    test("Then the value of the username input field should be 'hello'", () => {
      const labelToFind = "Username";
      const inputText = "hello";

      render(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );
      const label: HTMLLabelElement = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });

  describe("When the two inputs have text and the submit button is clicked", () => {
    test("Then the two inputs should be empty", () => {
      const usernameLabel = "Username";
      const passwordLabel = "Password";
      const inputText = "hello";

      render(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );

      const username: HTMLLabelElement = screen.getByLabelText(usernameLabel);
      const password: HTMLLabelElement = screen.getByLabelText(passwordLabel);
      const submitButton: HTMLButtonElement = screen.getByRole("button");

      userEvent.type(username, inputText);
      userEvent.type(password, inputText);
      userEvent.click(submitButton);

      expect(username).toHaveValue("");
      expect(password).toHaveValue("");
    });
  });
});
