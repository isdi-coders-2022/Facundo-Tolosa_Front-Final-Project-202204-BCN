import { render, screen } from "@testing-library/react";
import CheckIfLogged from "./CheckIfLogged";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockName = "";

jest.mock("../../hooks/hooks", () => ({
  ...jest.requireActual("../../hooks/hooks"),
  useAppSelector: () => ({ name: mockName }),
}));

describe("Given a LoggedChecked function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigarte to login enpoint when user is not logged", () => {
      render(
        <CheckIfLogged>
          <h1>Hello</h1>
        </CheckIfLogged>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });

    test("Then it should render its children when the user is logged", () => {
      mockName = "Carlos";

      const expectedHeaders = 1;

      render(
        <CheckIfLogged>
          <h1>Hello</h1>
        </CheckIfLogged>
      );

      const searchedText = screen.getAllByRole("heading");

      expect(searchedText).toHaveLength(expectedHeaders);
    });
  });
});
