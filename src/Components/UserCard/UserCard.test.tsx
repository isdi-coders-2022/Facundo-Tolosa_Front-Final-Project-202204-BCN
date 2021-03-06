import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import UserCard from "./UserCard";
import { userObjectMock, userObjectMockWithImage } from "../../mocks/userMocks";

describe("Given a UserCard component", () => {
  describe("When it's rendered with a name 'Albert Sagol' and a username 'betosagol20222'", () => {
    test("Then it should render the text 'Albert Sagol' and 'betosagol20222'", () => {
      const name = "Albert Sagol";
      const username = "betosagol20222";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserCard user={userObjectMock} />
          </Provider>
        </BrowserRouter>
      );

      const renderedName = screen.getByText(name);
      const renderedUsername = screen.getByText(username);

      expect(renderedName).toBeInTheDocument();
      expect(renderedUsername).toBeInTheDocument();
    });
  });

  describe("When it's rendered with no image", () => {
    test("Then it shouldn't render the received image", () => {
      const imageSrc = userObjectMockWithImage.imageBackup;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserCard user={userObjectMockWithImage} />
          </Provider>
        </BrowserRouter>
      );

      const image: HTMLImageElement = screen.getByRole("img");

      expect(image.src).toContain(imageSrc);
    });
  });
});
