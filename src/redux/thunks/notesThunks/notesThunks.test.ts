import axios from "axios";
import { deleteNoteThunk, loadNotesThunk } from "./notesThunks";
import { notesMock } from "../../../mocks/notesMocks";
import {
  deleteNoteActionCreator,
  loadNotesActionCreator,
} from "../../features/notesSlice/notesSlice";

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

describe("Given the deleteNoteThunk function", () => {
  describe("When it's called with an id", () => {
    test("Then it should call dispatch with the load notes action with the notes received from the axios request", async () => {
      const idToDelete = "1974";
      const dispatch = jest.fn();
      const action = deleteNoteActionCreator(idToDelete);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.delete = jest.fn().mockResolvedValue({});

      const thunk = deleteNoteThunk(idToDelete);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called with an id and there is no token", () => {
    test("Then it should not call dispatch", async () => {
      const idToDelete = "1974";
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = deleteNoteThunk(idToDelete);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
