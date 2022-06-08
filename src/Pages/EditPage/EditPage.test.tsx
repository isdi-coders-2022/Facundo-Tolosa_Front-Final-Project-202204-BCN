import React from "react";
import { render, screen } from "@testing-library/react";
import EditPage from "./EditPage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { noteMock } from "../../mocks/notesMocks";
import store from "../../redux/store/store";
import userEvent from "@testing-library/user-event";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
  useParams: () => ({ noteId: "1974" }),
}));

describe("Given a EditPage component", () => {
  describe("When it's rendered and the noteId param matches with a note", () => {
    test("Then it should show the text 'Create'", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "Carlos" },
        reducers: {},
      });
      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { allNotes: [{ ...noteMock, id: "1974" }] },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { notes: notesMockSlice.reducer, user: userMockSlice.reducer },
      });

      const expectedText = "Modify";

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <EditPage />
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
            <EditPage />
          </Provider>
        </BrowserRouter>
      );

      const homeButton = screen.getByRole("button", { name: "Back to notes" });
      userEvent.click(homeButton);

      expect(mockUseNavigate).toHaveBeenCalledWith("/home");
    });
  });
});
