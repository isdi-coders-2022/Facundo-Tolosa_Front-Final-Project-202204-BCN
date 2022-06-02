import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

jest.mock("jwt-decode", () => () => ({
  id: "1",
  name: "carlos",
  username: "carlos",
  image: "carlos.jpg",
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given an App component", () => {
  describe("When it's rendered and there is an user logged", () => {
    test("Then it should call navigate with the route '/home'", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "Carlos" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/home");
    });
  });

  describe("When it's rendered and there is no user logged", () => {
    test("Then it should render the text 'AMAZING NOTES'", () => {
      const expectedText = "AMAZING NOTES";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
      const receivedElement = screen.getByText(expectedText);

      expect(receivedElement).toBeInTheDocument();
    });
  });
});
