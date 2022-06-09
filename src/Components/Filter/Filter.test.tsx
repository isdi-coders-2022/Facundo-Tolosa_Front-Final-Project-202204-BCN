import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Filter from "./Filter";

const mockDispatch = jest.fn();

jest.mock("../../hooks/hooks", () => ({
  ...jest.requireActual("../../hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a Filter component", () => {
  describe("When the categories buttons are clicked", () => {
    test("Then it should call dispatch five times", () => {
      window.scrollTo = jest.fn();

      const firstCategoryToFind = "None";
      const secondCategoryToFind = "Category 1";
      const thirdCategoryToFind = "Category 2";
      const fourthCategoryToFind = "Category 3";
      const fifthCategoryToFind = "Category 4";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
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
});
