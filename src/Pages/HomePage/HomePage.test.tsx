/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  notesMock,
  tenNotesMock,
  twelveNotesMock,
} from "../../mocks/notesMocks";
import userEvent from "@testing-library/user-event";
import store from "../../redux/store/store";
import axios from "axios";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a HomePage component", () => {
  describe("When it's rendered with a list of ten notes to show and the increment button of the footer is pressed", () => {
    test("Then it should render the ten titles of the notes", async () => {
      const titles = tenNotesMock[0].title;
      const expectedLength = 10;

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { notes: tenNotesMock }, status: 200 });

      await act(async () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <HomePage />
            </Provider>
          </BrowserRouter>
        );
      });

      const buttons = screen.getAllByRole("button");

      await act(async () => {
        userEvent.click(buttons[1]);
      });

      const receivedTitles = screen.getAllByText(titles);
      expect(receivedTitles).toHaveLength(expectedLength);
    });
  });
  describe("When it's rendered with a list of two notes to show and the increment button of the footer is pressed", () => {
    test("Then it should render the two titles of the notes", () => {
      const firstExpectedTitle = notesMock[0].title;
      const secondExpectedTitle = notesMock[1].title;

      const notesMockSlice = createSlice({
        name: "notes",
        initialState: { notesToShow: notesMock, allNotes: notesMock },
        reducers: {},
      });
      const userMockSlice = createSlice({
        name: "user",
        initialState: { username: "carlos" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { notes: notesMockSlice.reducer, user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const incrementButton = screen.getByRole("button", { name: ">>" });
      userEvent.click(incrementButton);

      const firstReceivedTitle = screen.getByText(firstExpectedTitle);
      const secondReceivedTitle = screen.getByText(secondExpectedTitle);

      expect(firstReceivedTitle).toBeInTheDocument();
      expect(secondReceivedTitle).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a list of twelve notes to show and the increment button of the footer is pressed", () => {
    test("Then it should render the two titles of the notes number 11 and 12", async () => {
      const firstExpectedTitle = twelveNotesMock[10].title;
      const secondExpectedTitle = twelveNotesMock[11].title;

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { notes: twelveNotesMock }, status: 200 });

      await act(async () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <HomePage />
            </Provider>
          </BrowserRouter>
        );
      });

      const buttons = screen.getAllByRole("button");

      await act(async () => {
        userEvent.click(buttons[1]);
      });

      const firstReceivedTitle = screen.getByText(firstExpectedTitle);
      expect(firstReceivedTitle).toBeInTheDocument();

      const secondReceivedTitle = screen.getByText(secondExpectedTitle);
      expect(secondReceivedTitle).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a list of twelve notes to show and the increment button of the footer is pressed two times", () => {
    test("Then it should render the two titles of the notes number 11 and 12", async () => {
      const firstExpectedTitle = twelveNotesMock[10].title;
      const secondExpectedTitle = twelveNotesMock[11].title;

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { notes: twelveNotesMock }, status: 200 });

      await act(async () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <HomePage />
            </Provider>
          </BrowserRouter>
        );
      });

      const buttons = screen.getAllByRole("button");

      await act(async () => {
        userEvent.click(buttons[1]);
        userEvent.click(buttons[1]);
      });

      const firstReceivedTitle = screen.getByText(firstExpectedTitle);
      expect(firstReceivedTitle).toBeInTheDocument();

      const secondReceivedTitle = screen.getByText(secondExpectedTitle);
      expect(secondReceivedTitle).toBeInTheDocument();
    });
  });
});
