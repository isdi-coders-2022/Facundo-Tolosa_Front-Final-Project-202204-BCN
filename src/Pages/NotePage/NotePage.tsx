import { useParams } from "react-router-dom";
import NoteDetail from "../../Components/NoteDetail/NoteDetail";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import NotePageContainer from "./NotePageStyles";
import { INote } from "../../types/noteInterfaces";
import { useEffect } from "react";
import { loadNotesThunk } from "../../redux/thunks/notesThunks/notesThunks";
import Header from "../../Components/Header/Header";

const NotePage = () => {
  const { noteId } = useParams();
  const { allNotes } = useAppSelector((state) => state.notes);
  const noteToEdit = allNotes.find((note) => note.id === noteId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadNotesThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <NotePageContainer>
        <NoteDetail noteToShow={noteToEdit as INote} />
      </NotePageContainer>
    </>
  );
};

export default NotePage;
