import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import BurgerMenu from "./BurgerMenu";
import { logoutActionCreator } from "../../redux/features/userSlice/userSlice";

const mockDispatch = jest.fn();

jest.mock("../../hooks/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

describe("Given a BurgerMenu component", () => {
  describe("When the text LogOut button is clicked", () => {
    test("Then it should call dispatch with a logout action", () => {
      const textToFind = "Logout";
      const action = logoutActionCreator();

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BurgerMenu />
          </Provider>
        </BrowserRouter>
      );
      const logOutButton = screen.getByText(textToFind);
      userEvent.click(logOutButton);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });
});
