import { INote } from "../types/noteInterfaces";

export const filterNotes = (notes: INote[], filter: string) => {
  if (filter === "none") {
    return notes;
  }
  return notes.filter((note) => note.category === filter);
};
