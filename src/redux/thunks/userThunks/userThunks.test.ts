import carlosInfo from "../../../mocks/loginMocks";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { loginThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  id: "1",
  name: "carlos",
  username: "carlos",
  image: "carlos.jpg",
}));

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("It should dispatch the loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: carlosInfo.username,
        password: "password",
      };

      const loginAction = loginActionCreator(carlosInfo);

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loginAction);
    });
  });
});
