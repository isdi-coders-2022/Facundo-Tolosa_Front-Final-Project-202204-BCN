import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import UserPage from "./UserPage";

describe("Given a UserPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a text 'AN'", () => {
      const textToFind = "AN";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserPage />
          </Provider>
        </BrowserRouter>
      );

      const receivedText = screen.getByText(textToFind);

      expect(receivedText).toBeInTheDocument();
    });
  });
});
