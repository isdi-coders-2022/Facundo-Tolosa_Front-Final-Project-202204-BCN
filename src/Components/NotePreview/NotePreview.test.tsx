import React from "react";
import { render, screen } from "@testing-library/react";
import NotePreview from "./NotePreview";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { noteMock } from "../../mocks/notesMocks";

describe("Given a RegisterForm component", () => {
  describe("When it's rendered with a title 'fuchibol' and a category 'sport'", () => {
    test("Then it should render the text 'fuchibol' and 'sport'", () => {
      const title = "fuchibol";
      const category = "sports";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotePreview note={noteMock} />
          </Provider>
        </BrowserRouter>
      );

      const renderedTitle = screen.getByText(title);
      const renderedCategory = screen.getByText(category);

      expect(renderedTitle).toBeInTheDocument();
      expect(renderedCategory).toBeInTheDocument();
    });
  });
});
