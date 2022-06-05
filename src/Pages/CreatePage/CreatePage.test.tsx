import React from "react";
import { render, screen } from "@testing-library/react";
import CreatePage from "./CreatePage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";

describe("Given a CreatePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'Create'", () => {
      const expectedText = "Create";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreatePage />
          </Provider>
        </BrowserRouter>
      );

      const element = screen.getByText(expectedText);

      expect(element).toBeInTheDocument();
    });
  });
});
