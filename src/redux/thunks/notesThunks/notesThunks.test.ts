import axios from "axios";
import { loadNotesThunk } from "./notesThunks";
import { notesMock } from "../../../mocks/notesMocks";
import { loadNotesActionCreator } from "../../features/notesSlice/notesSlice";

describe("Given the loadNotesThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the load notes action with the notes received from the axios request", async () => {
      const dispatch = jest.fn();
      const action = loadNotesActionCreator(notesMock);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { notes: notesMock }, status: 200 });

      const thunk = loadNotesThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
