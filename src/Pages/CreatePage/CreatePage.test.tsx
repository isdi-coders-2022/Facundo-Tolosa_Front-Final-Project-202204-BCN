import React from "react";
import { render, screen } from "@testing-library/react";
import CreatePage from "./CreatePage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import userEvent from "@testing-library/user-event";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

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

  describe("When it's the back to home button is clicked", () => {
    test("Then it should call navigate with 'home'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreatePage />
          </Provider>
        </BrowserRouter>
      );

      const homeButton = screen.getByRole("button", { name: "Back to notes" });
      userEvent.click(homeButton);

      expect(mockUseNavigate).toHaveBeenCalledWith("/home");
    });
  });
});
