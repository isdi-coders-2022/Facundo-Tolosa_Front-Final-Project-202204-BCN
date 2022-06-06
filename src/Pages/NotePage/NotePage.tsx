import { useParams } from "react-router-dom";
import NoteDetail from "../../Components/NoteDetail/NoteDetail";
import { useAppSelector } from "../../hooks/hooks";
import NotePageContainer from "./NotePageStyles";
import { INote } from "../../types/noteInterfaces";

const NotePage = () => {
  const { noteId } = useParams();
  const { allNotes } = useAppSelector((state) => state.notes);
  const noteToEdit = allNotes.find((note) => note.id === noteId);

  return (
    <NotePageContainer>
      <NoteDetail noteToShow={noteToEdit as INote} />
    </NotePageContainer>
  );
};

export default NotePage;
