import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a Header component", () => {
  describe("When it's rendered and there is an user logged", () => {
    test("Then it should call navigate with the route '/user/userName'", () => {
      window.scrollTo = jest.fn();

      const userName = "roberto84";

      const userMockSlice = createSlice({
        name: "user",
        initialState: { username: userName },
        reducers: {},
      });
      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { allNotes: [] },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer, notes: notesMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const userIcon = screen.getByRole("img");
      userEvent.click(userIcon);

      expect(mockUseNavigate).toHaveBeenCalledWith(`/user/${userName}`);
    });
  });

  describe("When the logo is clicked", () => {
    test("Then it should call navigate with the route '/home'", () => {
      window.scrollTo = jest.fn();

      const logoText = "AN";
      const username = "carlos";

      const userMockSlice = createSlice({
        name: "user",
        initialState: { username },
        reducers: {},
      });
      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { allNotes: [] },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer, notes: notesMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getByText(logoText);
      userEvent.click(logo);

      expect(mockUseNavigate).toHaveBeenCalledWith(`/home`);
    });
  });

  describe("When the desktop is clicked", () => {
    test("Then it should call navigate with the route '/home'", () => {
      window.scrollTo = jest.fn();

      const logoText = "AMAZING NOTES";
      const username = "carlos";

      const userMockSlice = createSlice({
        name: "user",
        initialState: { username },
        reducers: {},
      });
      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { allNotes: [] },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer, notes: notesMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getByText(logoText);
      userEvent.click(logo);

      expect(mockUseNavigate).toHaveBeenCalledWith(`/home`);
    });
  });
});
