import React from "react";
import { render, screen } from "@testing-library/react";
import NotePreview from "./NotePreview";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { noteMock } from "../../mocks/notesMocks";

describe("Given a RegisterForm component", () => {
  describe("When it's rendered with a title 'fuchibol' and a author 'vitor90braz'", () => {
    test("Then it should render the text 'fuchibol' and 'vitor90braz'", () => {
      const title = "fuchibol";
      const author = "vitor90braz";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotePreview note={noteMock} />
          </Provider>
        </BrowserRouter>
      );

      const renderedTitle = screen.getByText(title);
      const renderedAuthor = screen.getByText(author);

      expect(renderedTitle).toBeInTheDocument();
      expect(renderedAuthor).toBeInTheDocument();
    });
  });
});
