import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import NavigationMenu from "./NavigationMenu";
import { logoutActionCreator } from "../../redux/features/userSlice/userSlice";
import { resetPaginationActionCreator } from "../../redux/features/notesSlice/notesSlice";

const mockDispatch = jest.fn();

jest.mock("../../hooks/hooks", () => ({
  ...jest.requireActual("../../hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));

let mockUsername = "carlos";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ username: mockUsername }),
}));

describe("Given a NavigationMenu component", () => {
  describe("When the text LogOut button is clicked", () => {
    test("Then it should call dispatch with a logout action", () => {
      const textToFind = "Logout";
      const action = logoutActionCreator();

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavigationMenu />
          </Provider>
        </BrowserRouter>
      );
      const logOutButton = screen.getByText(textToFind);
      userEvent.click(logOutButton);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When the home button is clicked", () => {
    test("Then it should call dispatch a resetPagination action", () => {
      window.scrollTo = jest.fn();

      const homeButtonText = "Home";
      const action = resetPaginationActionCreator();

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavigationMenu />
          </Provider>
        </BrowserRouter>
      );

      const homeButton = screen.getByText(homeButtonText);

      userEvent.click(homeButton);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's rendered at the user page", () => {
    test("Then it shouldn't render the searchbar component", () => {
      window.scrollTo = jest.fn();

      mockUsername = "";
      const homeButtonText = "Home";
      const action = resetPaginationActionCreator();

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavigationMenu />
          </Provider>
        </BrowserRouter>
      );

      const homeButton = screen.getByText(homeButtonText);

      userEvent.click(homeButton);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });
});
