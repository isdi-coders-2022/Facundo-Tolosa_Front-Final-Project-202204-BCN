import { useParams } from "react-router-dom";
import CreateNoteForm from "../../Components/CreateNoteForm/CreateNoteForm";
import { useAppSelector } from "../../hooks/hooks";
import { INote } from "../../types/noteInterfaces";
import EditPageContainer from "./EditPageStyles";

const EditPage = () => {
  const { noteId } = useParams();
  const { allNotes } = useAppSelector((state) => state.notes);
  const noteToEdit = allNotes.find((note) => note.id === noteId);

  return (
    <EditPageContainer>
      <CreateNoteForm noteToEdit={noteToEdit as INote} />
    </EditPageContainer>
  );
};

export default EditPage;
