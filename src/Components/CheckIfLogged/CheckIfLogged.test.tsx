import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CheckIfLogged from "./CheckIfLogged";

const mockUseNavigate: jest.Mock = jest.fn();
let mockLogged: boolean;

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

jest.mock("../../hooks/hooks", () => ({
  useAppSelector: () => ({ logged: mockLogged }),
}));

describe("Given a 'ManuelitaLaCantadora' component", () => {
  describe("When 'logged' it's false", () => {
    test("Then it should call navigate and it should return null", () => {
      render(
        <CheckIfLogged>
          <h1>Hola</h1>
        </CheckIfLogged>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
