import userReducer, {
  loginActionCreator,
  logoutActionCreator,
} from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When its invoked with an unknown action and a user as initialValue", () => {
    test("Then it should return the same user", () => {
      const action = {
        type: "user/unknownAction",
      };

      const initialValue = { name: "carlos", id: "", image: "", username: "" };

      const receivedValue = userReducer(initialValue, action);

      expect(receivedValue).toBe(initialValue);
    });
  });

  describe("When its invoked with a login action and a user", () => {
    test("Then it should return the same user", () => {
      const user = {
        name: "carlos",
        id: "70",
        image: "carlitos.jpg",
        username: "carlos90",
      };
      const initialValue = { name: "", id: "", image: "", username: "" };
      const action = loginActionCreator(user);

      const receivedValue = userReducer(initialValue, action);

      expect(receivedValue).toEqual(user);
    });
  });

  describe("When its invoked with a logout action and it had a logged user", () => {
    test("Then it should return an empty object", () => {
      const user = {
        name: "carlos",
        id: "70",
        image: "carlitos.jpg",
        username: "carlos90",
      };
      const expectedValue = { name: "", id: "", image: "", username: "" };
      const action = logoutActionCreator();

      const receivedValue = userReducer(user, action);

      expect(receivedValue).toEqual(expectedValue);
    });
  });
});
