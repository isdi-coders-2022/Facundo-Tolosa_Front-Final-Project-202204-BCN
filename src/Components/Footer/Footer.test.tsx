import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's rendered", () => {
    test("Then it should show two buttons", () => {
      const expectedLength = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Footer />
          </Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(expectedLength);
    });
  });
});
