import CreateNoteForm from "../../Components/CreateNoteForm/CreateNoteForm";
import Header from "../../Components/Header/Header";
import CreatePageContainer from "./CreatePageStyles";

const CreatePage = () => {
  return (
    <>
      <Header />
      <CreatePageContainer>
        <CreateNoteForm noteToEdit={null} />
      </CreatePageContainer>
    </>
  );
};

export default CreatePage;
