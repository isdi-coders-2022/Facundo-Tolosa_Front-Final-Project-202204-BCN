import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../../../types/noteInterfaces";

interface IinitialState {
  allNotes: INote[];
  notesToShow: INote[];
  activeFilter: string;
  userToShow: IUserPopulated;
}

interface IUserPopulated {
  username: string;
  name: string;
  image: string;
  notes: INote[];
  id: string;
}

const initialState: IinitialState = {
  allNotes: [],
  notesToShow: [],
  activeFilter: "",
  userToShow: { username: "", name: "", image: "", notes: [], id: "" },
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
      allNotes: [...notes.allNotes, action.payload],
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
  },
});

export const {
  loadNotes: loadNotesActionCreator,
  deleteNote: deleteNoteActionCreator,
  setNotesToShow: setNotesToShowActionCreator,
  setUserToShow: setUserToShowActionCreator,
  addNote: addNoteActionCreator,
} = notesSlice.actions;

export default notesSlice.reducer;
