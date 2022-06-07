import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateNoteForm from "../../Components/CreateNoteForm/CreateNoteForm";
import Header from "../../Components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loadNotesThunk } from "../../redux/thunks/notesThunks/notesThunks";
import { INote } from "../../types/noteInterfaces";
import EditPageContainer from "./EditPageStyles";

const EditPage = () => {
  const { noteId } = useParams();
  const { allNotes } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadNotesThunk());
  }, [dispatch]);

  const noteToEdit = allNotes.find((note) => note.id === noteId);

  return (
    <>
      <Header />
      <EditPageContainer>
        <CreateNoteForm noteToEdit={noteToEdit as INote} />
      </EditPageContainer>
    </>
  );
};

export default EditPage;
