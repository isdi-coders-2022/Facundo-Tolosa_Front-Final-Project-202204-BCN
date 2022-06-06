import CreateNoteForm from "../../Components/CreateNoteForm/CreateNoteForm";
import CreatePageContainer from "./CreatePageStyles";

const CreatePage = () => {
  return (
    <CreatePageContainer>
      <CreateNoteForm noteToEdit={null} />
    </CreatePageContainer>
  );
};

export default CreatePage;
