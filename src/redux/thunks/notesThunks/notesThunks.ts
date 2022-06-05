import axios from "axios";
import {
  addNoteActionCreator,
  deleteNoteActionCreator,
  loadNotesActionCreator,
  setNotesToShowActionCreator,
} from "../../features/notesSlice/notesSlice";
import { AppDispatch } from "../../store/store";
import { INote, INoteForm } from "../../../types/noteInterfaces";
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

export const deleteNoteThunk =
  (idToDelete: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoadingOn();
      await axios.delete(
        `${process.env.REACT_APP_API_URL}notes/${idToDelete}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(deleteNoteActionCreator(idToDelete));
      setLoadingOff();
    }
  };

export const getUserNotesThunk =
  (username: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoadingOn();
      const {
        data: { notes },
      } = await axios.get(`${process.env.REACT_APP_API_URL}notes/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setNotesToShowActionCreator(notes));
      setLoadingOff();
    }
  };

export const createNoteThunk =
  (formNote: INoteForm) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoadingOn();
      const { data: responseNote } = await axios.post(
        `${process.env.REACT_APP_API_URL}notes`,
        formNote,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addNoteActionCreator(responseNote));

      setLoadingOffWithMessage("Note created", false);
    }
  };
