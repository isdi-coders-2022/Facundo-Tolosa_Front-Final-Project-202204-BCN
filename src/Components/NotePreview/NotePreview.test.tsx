import React from "react";
import { render, screen } from "@testing-library/react";
import NotePreview from "./NotePreview";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { noteMock } from "../../mocks/notesMocks";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ username: "carlos90" }),
}));

const mockDispatch = jest.fn();

jest.mock("../../hooks/hooks", () => ({
  ...jest.requireActual("../../hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a NotePreview component", () => {
  describe("When it's rendered with a title 'fuchibol' and a category 'sport'", () => {
    test("Then it should render the text 'fuchibol' and 'sport'", () => {
      const title = "fuchibol";
      const category = "sports";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotePreview note={noteMock} />
          </Provider>
        </BrowserRouter>
      );

      const renderedTitle = screen.getByText(title);
      const renderedCategory = screen.getByText(category);

      expect(renderedTitle).toBeInTheDocument();
      expect(renderedCategory).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a user param that matches the user logged and the rendered button is clicked", () => {
    test("Then it should call dispatch", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { username: "carlos90" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <NotePreview note={noteMock} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's rendered with a user param that doesn't matches the user logged", () => {
    test("Then it shouldn't render a button", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { username: "vitor90braz" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <NotePreview note={noteMock} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.queryByRole("button");

      expect(button).toBeNull();
    });
  });
});
