import carlosInfo from "../../../mocks/loginMocks";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { loginThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  id: "1",
  name: "carlos",
  username: "carlos",
  image: "carlos.jpg",
}));

const fakeLocalStorage = (function () {
  let store: any = {};
  return {
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    getItem: function (key: string) {
      return store[key] || null;
    },
  };
})();

describe("Given a loginThunk", () => {
  describe("When invoked with a valid user", () => {
    test("Then it should call the dispatch with a login action creator and the info of the valid user", async () => {
      const dispatch = jest.fn();
      const thunk = loginThunk({ username: carlosInfo.username, password: "" });
      const action = loginActionCreator(carlosInfo);

      Object.defineProperty(Window, "localStorage", {
        value: fakeLocalStorage,
      });

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
