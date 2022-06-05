import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../../../types/noteInterfaces";

interface IinitialState {
  allNotes: INote[];
  notesToShow: INote[];
  activeFilter: string;
}

const initialState: IinitialState = {
  allNotes: [],
  notesToShow: [],
  activeFilter: "",
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
    }),
    setNotesToShow: (notes, action: PayloadAction<INote[]>): IinitialState => ({
      ...notes,
      notesToShow: [...action.payload],
    }),
  },
});

export const {
  loadNotes: loadNotesActionCreator,
  deleteNote: deleteNoteActionCreator,
  setNotesToShow: setNotesToShowActionCreator,
} = notesSlice.actions;

export default notesSlice.reducer;
