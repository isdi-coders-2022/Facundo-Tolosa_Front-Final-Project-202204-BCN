import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Footer from "./Footer";
import userEvent from "@testing-library/user-event";
import { decrementPageActionCreator } from "../../redux/features/notesSlice/notesSlice";

const mockDispatch = jest.fn();

jest.mock("../../hooks/hooks", () => ({
  ...jest.requireActual("../../hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));

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

  describe("When it's rendered and the decrement button is pressed", () => {
    test("Then it should call dispatch with a decrement page action creator", () => {
      window.scrollTo = jest.fn();
      const expectedAction = decrementPageActionCreator();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Footer />
          </Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[0]);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
