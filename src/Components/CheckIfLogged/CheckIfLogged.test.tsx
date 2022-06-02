import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CheckIfLogged from "./CheckIfLogged";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a LoggedChecked function", () => {
  describe("When it's invoked there is no user logged", () => {
    test("Then it should call navigate to login", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <CheckIfLogged>
            <h1>Hello</h1>
          </CheckIfLogged>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });

    test("Then it should render its children when the user is logged", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "Carlos" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <CheckIfLogged>
            <h1>Hello</h1>
          </CheckIfLogged>
        </Provider>
      );

      const receivedText = screen.getByRole("heading", {
        level: 1,
        name: /hello/i,
      });

      expect(receivedText).toBeInTheDocument();
    });
  });
});
