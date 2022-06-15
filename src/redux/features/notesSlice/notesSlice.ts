import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../../../types/noteInterfaces";

interface IinitialState {
  allNotes: INote[];
  notesToShow: INote[];
  activeFilter: string;
  userToShow: IUserPopulated;
  actualPage: number;
}

interface IUserPopulated {
  username: string;
  name: string;
  image: string;
  imageBackup: string;
  notes: INote[];
  id: string;
}

const initialState: IinitialState = {
  allNotes: [],
  notesToShow: [],
  activeFilter: "none",
  userToShow: {
    username: "",
    name: "",
    image: "",
    imageBackup: "",
    notes: [],
    id: "",
  },
  actualPage: 0,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    loadNotes: (notes, action: PayloadAction<INote[]>): IinitialState => ({
      ...notes,
      allNotes: [...action.payload],
    }),

    deleteNote: (notes, action: PayloadAction<string>): IinitialState => ({
      ...notes,
      allNotes: notes.allNotes.filter((note) => note.id !== action.payload),
      notesToShow: notes.notesToShow.filter(
        (note) => note.id !== action.payload
      ),
    }),

    addNote: (notes, action: PayloadAction<INote>): IinitialState => ({
      ...notes,
      allNotes: [action.payload, ...notes.allNotes],
    }),

    editNote: (notes, action: PayloadAction<INote>): IinitialState => ({
      ...notes,
      allNotes: notes.allNotes.map((note) =>
        note.id === action.payload.id ? { ...action.payload } : { ...note }
      ),
    }),

    setNotesToShow: (notes, action: PayloadAction<INote[]>): IinitialState => ({
      ...notes,
      notesToShow: [...action.payload],
    }),

    setUserToShow: (
      notes,
      action: PayloadAction<IUserPopulated>
    ): IinitialState => ({
      ...notes,
      userToShow: action.payload,
    }),

    incrementPage: (notes): IinitialState => ({
      ...notes,
      actualPage: notes.actualPage + 1,
    }),

    decrementPage: (notes): IinitialState => ({
      ...notes,
      actualPage:
        notes.actualPage === 0 ? notes.actualPage : notes.actualPage - 1,
    }),

    resetPagination: (notes): IinitialState => ({
      ...notes,
      actualPage: 0,
    }),

    setFilter: (notes, action: PayloadAction<string>): IinitialState => ({
      ...notes,
      activeFilter: action.payload,
    }),
  },
});

export const {
  loadNotes: loadNotesActionCreator,
  deleteNote: deleteNoteActionCreator,
  setNotesToShow: setNotesToShowActionCreator,
  setUserToShow: setUserToShowActionCreator,
  addNote: addNoteActionCreator,
  editNote: editNoteActionCreator,
  incrementPage: incrementPageActionCreator,
  decrementPage: decrementPageActionCreator,
  setFilter: setFilterActionCreator,
  resetPagination: resetPaginationActionCreator,
} = notesSlice.actions;

export default notesSlice.reducer;
