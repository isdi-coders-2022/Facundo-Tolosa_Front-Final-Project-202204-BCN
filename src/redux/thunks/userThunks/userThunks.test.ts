import axios from "axios";
import { notesMock } from "../../../mocks/notesMocks";
import { carlosInfo } from "../../../mocks/userMocks";
import { setNotesToShowActionCreator } from "../../features/notesSlice/notesSlice";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { getUserThunk, loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  id: "1",
  name: "carlos",
  username: "carlos",
  image: "carlos.jpg",
}));

describe("Given a loginThunk", () => {
  describe("When invoked with a valid user", () => {
    test("Then it should call the dispatch with a login action creator and the info of the valid user", async () => {
      const dispatch = jest.fn();
      const action = loginActionCreator(carlosInfo);

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.post = jest
        .fn()
        .mockResolvedValue({ data: { token: "tokencito" } });

      const thunk = loginThunk({ username: carlosInfo.username, password: "" });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When invoked with a valid user and axios throws an error", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.post = jest.fn().mockRejectedValue({});

      const thunk = loginThunk({ username: carlosInfo.username, password: "" });
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the registerThunk function", () => {
  describe("When it's called and receives de new user data", () => {
    test("Then it should call dispatch with the loginThunk with the user data", async () => {
      const newUserData = {
        name: "testUser",
        username: "testUser",
        password: "testUser",
        image: "",
      };

      const userFormData = new FormData();
      userFormData.append("username", newUserData.username);
      userFormData.append("password", newUserData.password);
      userFormData.append("name", newUserData.name);
      userFormData.append("image", newUserData.image);

      const dispatch = jest.fn();
      axios.post = jest
        .fn()
        .mockResolvedValue({ data: { username: "testUser" } });

      const thunk = registerThunk(
        userFormData,
        newUserData.username,
        newUserData.password
      );
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called and and axios throws an error", () => {
    test("Then it should not call dispatch", async () => {
      const newUserData = {
        name: "testUser",
        username: "testUser",
        password: "testUser",
        image: "",
      };

      const userFormData = new FormData();
      userFormData.append("username", newUserData.username);
      userFormData.append("password", newUserData.password);
      userFormData.append("name", newUserData.name);
      userFormData.append("image", newUserData.image);

      const dispatch = jest.fn();
      axios.post = jest.fn().mockRejectedValue({});

      const thunk = registerThunk(
        userFormData,
        newUserData.username,
        newUserData.password
      );
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the getUserThunk function", () => {
  describe("When it's called with an user", () => {
    test("Then it should call dispatch with the set notes to show action with the notes from the user received from the axios request", async () => {
      const dispatch = jest.fn();
      const action = setNotesToShowActionCreator(notesMock);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { user: { notes: notesMock } } });

      const thunk = getUserThunk("user");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called and there is no token", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = getUserThunk("user");
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
