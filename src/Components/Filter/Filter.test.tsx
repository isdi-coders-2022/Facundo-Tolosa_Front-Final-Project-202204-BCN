import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Filter from "./Filter";
import { setFilterActionCreator } from "../../redux/features/notesSlice/notesSlice";

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
      const secondCategoryToFind = "Programming";
      const thirdCategoryToFind = "Sports";
      const fourthCategoryToFind = "Travel";
      const fifthCategoryToFind = "Food";

      const firstAction = setFilterActionCreator("none");
      const secondAction = setFilterActionCreator(secondCategoryToFind);
      const thirdAction = setFilterActionCreator(thirdCategoryToFind);
      const fourthAction = setFilterActionCreator(fourthCategoryToFind);
      const fifthAction = setFilterActionCreator(fifthCategoryToFind);

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

      expect(mockDispatch).toHaveBeenCalledWith(firstAction);
      expect(mockDispatch).toHaveBeenCalledWith(secondAction);
      expect(mockDispatch).toHaveBeenCalledWith(thirdAction);
      expect(mockDispatch).toHaveBeenCalledWith(fourthAction);
      expect(mockDispatch).toHaveBeenCalledWith(fifthAction);
    });
  });
});
