import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserPage from "./UserPage";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { notesMock } from "../../mocks/notesMocks";

const mockDispatch = jest.fn();

jest.mock("../../hooks/hooks", () => ({
  ...jest.requireActual("../../hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a UserPage component", () => {
  describe("When it's rendered with a list of notes to show as a initial state", () => {
    test("Then it should show the titles of the notes and call dispatch", () => {
      const firstExpectedTitle = notesMock[0].title;
      const secondExpectedTitle = notesMock[1].title;

      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { notesToShow: notesMock },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { notes: notesMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <UserPage />
          </Provider>
        </BrowserRouter>
      );

      const firstReceivedTitle = screen.getByText(firstExpectedTitle);
      const secondReceivedTitle = screen.getByText(secondExpectedTitle);

      expect(firstReceivedTitle).toBeInTheDocument();
      expect(secondReceivedTitle).toBeInTheDocument();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
