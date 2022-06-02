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
    loadNotes: (user, action: PayloadAction<INote[]>): IinitialState => ({
      ...user,
      allNotes: [...action.payload],
    }),
  },
});

export const { loadNotes: loadNotesActionCreator } = notesSlice.actions;

export default notesSlice.reducer;
