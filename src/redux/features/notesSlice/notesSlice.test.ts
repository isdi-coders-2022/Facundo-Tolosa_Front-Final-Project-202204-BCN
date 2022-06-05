import { notesMock } from "../../../mocks/notesMocks";
import { userObjectMock } from "../../../mocks/userMocks";
import notesReducer, {
  deleteNoteActionCreator,
  loadNotesActionCreator,
  setNotesToShowActionCreator,
  setUserToShowActionCreator,
} from "./notesSlice";

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
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
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
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
      };

      const { allNotes } = notesReducer(initialState, action);

      expect(allNotes).toEqual(notesMock);
    });
  });

  describe("When its invoked with an deleteNote action with an id and a initial state with two notes", () => {
    test("Then it should return one note", () => {
      const expectedLength = 1;

      const action = deleteNoteActionCreator(notesMock[0].id);

      const initialState = {
        activeFilter: "",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
      };

      const { allNotes } = notesReducer(initialState, action);

      expect(allNotes).toHaveLength(expectedLength);
    });
  });

  describe("When its invoked with a setNotesToShow action with a list of notes", () => {
    test("Then it should return the same array of notes at the notesToShow propety of the object", () => {
      const action = setNotesToShowActionCreator(notesMock);

      const initialState = {
        activeFilter: "",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
      };

      const { notesToShow } = notesReducer(initialState, action);

      expect(notesToShow).toEqual(notesMock);
    });
  });

  describe("When its invoked with a setUserToShow action with a user", () => {
    test("Then it should return the same user at the userToShow propety of the object", () => {
      const action = setUserToShowActionCreator(userObjectMock);

      const initialState = {
        activeFilter: "",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
      };

      const { userToShow } = notesReducer(initialState, action);

      expect(userToShow).toEqual(userObjectMock);
    });
  });
});
