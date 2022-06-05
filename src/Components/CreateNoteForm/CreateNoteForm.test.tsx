import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CreateNoteForm from "./CreateNoteForm";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given a CreateNoteForm component", () => {
  describe("When the word 'hello' is written to the title input field", () => {
    test("Then the value of the title input field should be 'hello'", () => {
      const labelToFind = "Title";
      const inputText = "hello";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateNoteForm />
          </Provider>
        </BrowserRouter>
      );
      const label: HTMLLabelElement = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });

  describe("When the word 'hello' is written to the content input field", () => {
    test("Then the value of the content input field should be 'hello'", () => {
      const labelToFind = "Content";
      const inputText = "hello";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateNoteForm />
          </Provider>
        </BrowserRouter>
      );
      const label: HTMLLabelElement = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });

  describe("When the submit button is clicked", () => {
    test("Then the content and label inputs should be empty", () => {
      const inputText = "hello";
      const contentLabelToFind = "Content";
      const titleLabelToFind = "Title";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateNoteForm />
          </Provider>
        </BrowserRouter>
      );

      const titleLabel: HTMLLabelElement =
        screen.getByLabelText(titleLabelToFind);
      userEvent.type(titleLabel, inputText);

      const contentLabel: HTMLLabelElement =
        screen.getByLabelText(contentLabelToFind);
      userEvent.type(contentLabel, inputText);

      const options = screen.getAllByRole("option");
      userEvent.selectOptions(screen.getByRole("combobox"), [options[2]]);

      const submitButton = screen.getByRole("button");
      userEvent.click(submitButton);

      expect(titleLabel).toHaveValue("");
      expect(contentLabel).toHaveValue("");
    });
  });
});
