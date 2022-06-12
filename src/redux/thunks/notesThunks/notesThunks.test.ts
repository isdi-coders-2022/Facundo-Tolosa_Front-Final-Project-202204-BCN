import axios from "axios";
import {
  createNoteThunk,
  deleteNoteThunk,
  editNoteThunk,
  getUserNotesThunk,
  loadNotesThunk,
} from "./notesThunks";
import { formNoteMock, noteMock, notesMock } from "../../../mocks/notesMocks";
import {
  addNoteActionCreator,
  deleteNoteActionCreator,
  editNoteActionCreator,
  loadNotesActionCreator,
  setNotesToShowActionCreator,
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

  describe("When it's called and there is no token", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = loadNotesThunk();
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
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

  describe("When it's invoqued and the axios request fails", () => {
    test("Then it should not call dispatch", async () => {
      const idToDelete = "1974";
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("1974");
      axios.delete = jest.fn().mockRejectedValue({});

      const thunk = deleteNoteThunk(idToDelete);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the getUserNotesThunk function", () => {
  describe("When it's called with an user", () => {
    test("Then it should call dispatch with the set notes to show action with the notes received from the axios request", async () => {
      const dispatch = jest.fn();
      const action = setNotesToShowActionCreator(notesMock);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({ data: { notes: notesMock } });

      const thunk = getUserNotesThunk("user");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called and there is no token", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = getUserNotesThunk("user");
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the createNoteThunk function", () => {
  describe("When it's called with a note to create", () => {
    test("Then it should call dispatch with the new note created received from the axios request", async () => {
      const dispatch = jest.fn();
      const action = addNoteActionCreator(noteMock);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.post = jest.fn().mockResolvedValue({ data: noteMock });

      const thunk = createNoteThunk(formNoteMock);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called and there is no token", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = createNoteThunk(formNoteMock);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe("When it's invoqued and the axios request fails", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("1974");
      axios.delete = jest.fn().mockRejectedValue({});

      const thunk = createNoteThunk(formNoteMock);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the editNoteThunk function", () => {
  describe("When it's called with an id to edit and a note", () => {
    test("Then it should call dispatch with the new note edited received from the axios request", async () => {
      const dispatch = jest.fn();
      const action = editNoteActionCreator(noteMock);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.put = jest.fn().mockResolvedValue({ data: noteMock });

      const thunk = editNoteThunk(noteMock.id, formNoteMock);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called and there is no token", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = editNoteThunk(noteMock.id, formNoteMock);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe("When it's invoqued and the axios request fails", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("1974");
      axios.delete = jest.fn().mockRejectedValue({});

      const thunk = editNoteThunk(noteMock.id, formNoteMock);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
