import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotePage from "./NotePage";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { notesMock } from "../../mocks/notesMocks";
import store from "../../redux/store/store";
import userEvent from "@testing-library/user-event";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ noteId: "string1" }),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a NotePage component", () => {
  describe("When it's rendered with a note id as a param", () => {
    test("Then it should show the note, content and author of that note", () => {
      const expectedAuthorText = `Note created by ${notesMock[0].author}`;
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "Carlos" },
        reducers: {},
      });
      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { allNotes: notesMock },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { notes: notesMockSlice.reducer, user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <NotePage />
          </Provider>
        </BrowserRouter>
      );

      const receivedTitle = screen.getByText(notesMock[0].title);
      const receivedAuthor = screen.getByText(expectedAuthorText);
      const receivedContent = screen.getByText(notesMock[0].content);

      expect(receivedTitle).toBeInTheDocument();
      expect(receivedAuthor).toBeInTheDocument();
      expect(receivedContent).toBeInTheDocument();
    });
  });

  describe("When it's the back to home button is clicked", () => {
    test("Then it should call navigate with 'home'", () => {
      const homeButtonText = "Back to notes";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotePage />
          </Provider>
        </BrowserRouter>
      );

      const homeButton = screen.getByText(homeButtonText);
      userEvent.click(homeButton);

      expect(mockUseNavigate).toHaveBeenCalledWith("/home");
    });
  });
});
