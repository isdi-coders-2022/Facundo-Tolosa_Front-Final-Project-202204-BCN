import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { notesMock } from "../../mocks/notesMocks";

describe("Given a SearchBar component", () => {
  describe("When the word 'hello' is written to the search input field", () => {
    test("Then the value of the search input field should be 'hello'", () => {
      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { allNotes: notesMock },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { notes: notesMockSlice.reducer },
      });

      const labelToFind = "Search";
      const inputText = "hello";

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <SearchBar />
          </Provider>
        </BrowserRouter>
      );
      const label: HTMLLabelElement = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });
});
