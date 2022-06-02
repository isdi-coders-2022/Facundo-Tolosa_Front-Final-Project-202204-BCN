import axios from "axios";
import { loadNotesActionCreator } from "../../features/notesSlice/notesSlice";
import { AppDispatch } from "../../store/store";
import { INote } from "../../../types/noteInterfaces";

interface getAllNotesResponse {
  notes: INote[];
  status: number;
}

export const loadNotesThunk = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { notes },
      status,
    } = await axios.get<getAllNotesResponse>(
      `${process.env.REACT_APP_API_URL}notes`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      dispatch(loadNotesActionCreator(notes));
    }
  }
};
