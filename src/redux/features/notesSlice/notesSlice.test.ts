import { notesMock } from "../../../mocks/notesMocks";
import notesReducer, { loadNotesActionCreator } from "./notesSlice";

describe("Given a notesReducer reducer", () => {
  describe("When its invoked with an unknown action and an initial value", () => {
    test("Then it should return the same initial value", () => {
      const action = {
        type: "user/unknownAction",
      };

      const initialState = {
        activeFilter: "",
        allNotes: notesMock,
        notesToShow: [],
      };

      const receivedValue = notesReducer(initialState, action);

      expect(receivedValue).toEqual(initialState);
    });
  });

  describe("When its invoked with an loadNotes action and a list of notes", () => {
    test("Then it should return the same list of notes", () => {
      const action = loadNotesActionCreator(notesMock);

      const initialState = {
        activeFilter: "",
        allNotes: [],
        notesToShow: [],
      };

      const receivedValue = notesReducer(initialState, action);

      expect(receivedValue.allNotes).toEqual(notesMock);
    });
  });
});
