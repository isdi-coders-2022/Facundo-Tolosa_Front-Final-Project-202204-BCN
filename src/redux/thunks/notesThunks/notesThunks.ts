import axios from "axios";
import { loadNotesActionCreator } from "../../features/notesSlice/notesSlice";
import { AppDispatch } from "../../store/store";
import { INote } from "../../../types/noteInterfaces";
import {
  setLoadingOff,
  setLoadingOffWithMessage,
  setLoadingOn,
} from "../../../utils/modal";

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
