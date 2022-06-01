import axios from "axios";
import { registerThunk } from "./userThunks";

describe("Given the registerThunk function", () => {
  describe("When it's called and receives de new user data", () => {
    test("Then it should call dispatch with the loginThunk with the user data", async () => {
      const newUserData = {
        name: "testUser",
        username: "testUser",
        password: "testUser",
        image: "",
      };
      const dispatch = jest.fn();
      axios.post = jest
        .fn()
        .mockResolvedValue({ data: { username: "testUser" } });

      const thunk = registerThunk(newUserData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
