import { INote } from "../types/noteInterfaces";

export const paginate = (notes: INote[], page: number) => {
  const notesToShow = notes.slice(10 * page, 10 * page + 10);
  return notesToShow;
};
