import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import BurgerMenu from "./BurgerMenu";
import { logoutActionCreator } from "../../redux/features/userSlice/userSlice";
import { resetPaginationActionCreator } from "../../redux/features/notesSlice/notesSlice";

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

  describe("When the categories buttons are clicked", () => {
    test("Then it should call dispatch five times", () => {
      const firstCategoryToFind = "None";
      const secondCategoryToFind = "Category 1";
      const thirdCategoryToFind = "Category 2";
      const fourthCategoryToFind = "Category 3";
      const fifthCategoryToFind = "Category 4";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BurgerMenu />
          </Provider>
        </BrowserRouter>
      );

      const firstCategory = screen.getByText(firstCategoryToFind);
      const secondCategory = screen.getByText(secondCategoryToFind);
      const thirdCategory = screen.getByText(thirdCategoryToFind);
      const fourthCategory = screen.getByText(fourthCategoryToFind);
      const fifthCategory = screen.getByText(fifthCategoryToFind);

      userEvent.click(firstCategory);
      userEvent.click(secondCategory);
      userEvent.click(thirdCategory);
      userEvent.click(fourthCategory);
      userEvent.click(fifthCategory);

      expect(mockDispatch).toHaveBeenCalledTimes(5);
    });
  });

  describe("When the home button is clicked", () => {
    test("Then it should call dispatch a resetPagination action", () => {
      const homeButtonText = "Home";
      const action = resetPaginationActionCreator();

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BurgerMenu />
          </Provider>
        </BrowserRouter>
      );

      const homeButton = screen.getByText(homeButtonText);

      userEvent.click(homeButton);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });
});
