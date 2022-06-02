import axios from "axios";
import { loadNotesThunk } from "./notesThunks";
import { notesMock } from "../../../mocks/notesMocks";

describe("Given the loadNotesThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the notes received from the axios request", async () => {
      const dispatch = jest.fn();

      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { notesMock }, status: 200 });

      const thunk = loadNotesThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
