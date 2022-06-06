import React from "react";
import { render, screen } from "@testing-library/react";
import EditPage from "./EditPage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { noteMock } from "../../mocks/notesMocks";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ noteId: "1974" }),
}));

describe("Given a EditPage component", () => {
  describe("When it's rendered and the noteId param matches with a note", () => {
    test("Then it should show the text 'Create'", () => {
      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { allNotes: [{ ...noteMock, id: "1974" }] },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { notes: notesMockSlice.reducer },
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
});
