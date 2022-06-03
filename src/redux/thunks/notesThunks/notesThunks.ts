import axios from "axios";
import {
  deleteNoteActionCreator,
  loadNotesActionCreator,
} from "../../features/notesSlice/notesSlice";
import { AppDispatch } from "../../store/store";
import { INote } from "../../../types/noteInterfaces";
import { setLoadingOff, setLoadingOn } from "../../../utils/modal";

interface getAllNotesResponse {
  notes: INote[];
  status: number;
}

export const loadNotesThunk = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { notes },
    } = await axios.get<getAllNotesResponse>(
      `${process.env.REACT_APP_API_URL}notes`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(loadNotesActionCreator(notes));
  }
};

export const deleteNoteThunk =
  (idToDelete: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoadingOn();
      await axios.delete(`${process.env.REACT_APP_API_URL}notes/idToDelete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(deleteNoteActionCreator(idToDelete));
      setLoadingOff();
    }
  };
