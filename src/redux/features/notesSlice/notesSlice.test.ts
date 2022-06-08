import { noteMock, notesMock } from "../../../mocks/notesMocks";
import { userObjectMock } from "../../../mocks/userMocks";
import notesReducer, {
  addNoteActionCreator,
  decrementPageActionCreator,
  deleteNoteActionCreator,
  editNoteActionCreator,
  incrementPageActionCreator,
  loadNotesActionCreator,
  resetPaginationActionCreator,
  setFilterActionCreator,
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
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 0,
      };

      const receivedValue = notesReducer(initialState, action);

      expect(receivedValue).toEqual(initialState);
    });
  });

  describe("When its invoked with an loadNotes action and a list of notes", () => {
    test("Then it should return the same list of notes", () => {
      const action = loadNotesActionCreator(notesMock);

      const initialState = {
        activeFilter: "none",
        allNotes: [],
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 0,
      };

      const { allNotes } = notesReducer(initialState, action);

      expect(allNotes).toEqual(notesMock);
    });
  });

  describe("When its invoked with an deleteNote action with an id and a initial state with two notes", () => {
    test("Then it should return one note at allNotes and at notesToShow", () => {
      const expectedLength = 1;

      const action = deleteNoteActionCreator(notesMock[0].id);

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: notesMock,
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 0,
      };

      const { allNotes, notesToShow } = notesReducer(initialState, action);

      expect(allNotes).toHaveLength(expectedLength);
      expect(notesToShow).toHaveLength(expectedLength);
    });
  });

  describe("When its invoked with a setNotesToShow action with a list of notes", () => {
    test("Then it should return the same array of notes at the notesToShow propety of the object", () => {
      const action = setNotesToShowActionCreator(notesMock);

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 0,
      };

      const { notesToShow } = notesReducer(initialState, action);

      expect(notesToShow).toEqual(notesMock);
    });
  });

  describe("When its invoked with a setUserToShow action with a user", () => {
    test("Then it should return the same user at the userToShow propety of the object", () => {
      const action = setUserToShowActionCreator(userObjectMock);

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 0,
      };

      const { userToShow } = notesReducer(initialState, action);

      expect(userToShow).toEqual(userObjectMock);
    });
  });

  describe("When its invoked with a addNote action with a note and two notes as an initial state", () => {
    test("Then it should have three notes in allNotes property", () => {
      const expectedLength = 3;
      const action = addNoteActionCreator(noteMock);

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 0,
      };

      const { allNotes } = notesReducer(initialState, action);

      expect(allNotes).toHaveLength(expectedLength);
    });
  });

  describe("When its invoked with a edit action with a two notes as a initial state and a edited note", () => {
    test("Then it should edit the note and change its title, content and category", () => {
      const editedNote = {
        title: "this note was edited",
        content: "note edited",
        category: "sportsn't",
        author: "vitor90braz",
        id: "string1",
        creationDate: new Date(),
      };

      const action = editNoteActionCreator(editedNote);

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 0,
      };

      const { allNotes } = notesReducer(initialState, action);

      expect(allNotes[0]).toHaveProperty("title", editedNote.title);
      expect(allNotes[0]).toHaveProperty("content", editedNote.content);
      expect(allNotes[0]).toHaveProperty("category", editedNote.category);
    });
  });

  describe("When its invoked with a incrementPage action", () => {
    test("Then the number of actualPage should be incremented by one", () => {
      const action = incrementPageActionCreator();
      const expectedNumber = 3;

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 2,
      };

      const { actualPage } = notesReducer(initialState, action);

      expect(actualPage).toBe(expectedNumber);
    });
  });

  describe("When its invoked with a decrementPage action", () => {
    test("Then the number of actualPage should be decremented by one", () => {
      const action = decrementPageActionCreator();
      const expectedNumber = 1;

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 2,
      };

      const { actualPage } = notesReducer(initialState, action);

      expect(actualPage).toBe(expectedNumber);
    });
  });

  describe("When its invoked with a decrementPage action and a initial state of 0", () => {
    test("Then the number of actualPage shouldn't be decremented", () => {
      const action = decrementPageActionCreator();
      const expectedNumber = 0;

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 0,
      };

      const { actualPage } = notesReducer(initialState, action);

      expect(actualPage).toBe(expectedNumber);
    });
  });

  describe("When its invoked with a setFilter action with the filter 'Category 1'", () => {
    test("Then the state of actualFilter should be 'Category 1'", () => {
      const filter = "Category 1";
      const action = setFilterActionCreator(filter);

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 0,
      };

      const { activeFilter } = notesReducer(initialState, action);

      expect(activeFilter).toBe(filter);
    });
  });

  describe("When its invoked with a resetPagination action", () => {
    test("Then the state of actualPage should be 0", () => {
      const expectedNumber = 0;
      const action = resetPaginationActionCreator();

      const initialState = {
        activeFilter: "none",
        allNotes: notesMock,
        notesToShow: [],
        userToShow: { username: "", name: "", image: "", notes: [], id: "" },
        actualPage: 5,
      };

      const { actualPage } = notesReducer(initialState, action);

      expect(actualPage).toBe(expectedNumber);
    });
  });
});
