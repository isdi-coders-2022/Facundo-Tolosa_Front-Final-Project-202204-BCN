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
  describe("When it's invoked there is no user logged", () => {
    test("Then it should call navigate to login", () => {
      render(
        <CheckIfLogged>
          <h1>Hello</h1>
        </CheckIfLogged>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });

    test("Then it should render its children when the user is logged", () => {
      mockName = "Carlos";

      render(
        <CheckIfLogged>
          <h1>Hello</h1>
        </CheckIfLogged>
      );

      const receivedText = screen.getByRole("heading", {
        level: 1,
        name: /hello/i,
      });

      expect(receivedText).toBeInTheDocument();
    });
  });
});
