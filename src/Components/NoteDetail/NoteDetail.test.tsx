import React from "react";
import { render, screen } from "@testing-library/react";
import NoteDetail from "./NoteDetail";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { noteMock } from "../../mocks/notesMocks";

describe("Given a NoteDetail component", () => {
  describe("When it's rendered with a note", () => {
    test("Then it should render the title, content and author of the note", () => {
      const expectedAuthorText = `Note created by ${noteMock.author}`;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NoteDetail noteToShow={noteMock} />
          </Provider>
        </BrowserRouter>
      );

      const renderedTitle = screen.getByText(noteMock.title);
      const renderedAuthor = screen.getByText(expectedAuthorText);
      const renderedContent = screen.getByText(noteMock.content);

      expect(renderedTitle).toBeInTheDocument();
      expect(renderedAuthor).toBeInTheDocument();
      expect(renderedContent).toBeInTheDocument();
    });
  });

  describe("When it's rendered with undefined", () => {
    test("Then it shouldn't render the text 'Note created by '", () => {
      const expectedText = "Note created by";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NoteDetail noteToShow={undefined} />
          </Provider>
        </BrowserRouter>
      );

      const receivedText = screen.queryByText(expectedText);

      expect(receivedText).not.toBeInTheDocument();
    });
  });
});
