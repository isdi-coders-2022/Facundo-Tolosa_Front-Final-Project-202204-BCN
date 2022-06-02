import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { notesMock } from "../../mocks/notesMocks";
import NotePreviewList from "./NotePreviewList";

const initialState = {
  allNotes: notesMock,
};

const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {},
});

const mockStore = configureStore({ reducer: { notes: notesSlice.reducer } });

describe("Given a NotePreviewList component", () => {
  describe("When it's rendered with a list of two notes received from the state", () => {
    test("Then it should render the title of the two notes", async () => {
      const firstTitle = notesMock[0].title;
      const secondTitle = notesMock[1].title;

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <NotePreviewList />
          </Provider>
        </BrowserRouter>
      );

      const receivedFirstTitle = screen.getByText(firstTitle);
      const receivedSecondTitle = screen.getByText(secondTitle);

      expect(receivedFirstTitle).toBeInTheDocument();
      expect(receivedSecondTitle).toBeInTheDocument();
    });
  });
});
