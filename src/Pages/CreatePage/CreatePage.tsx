import { useNavigate } from "react-router-dom";
import CreateNoteForm from "../../Components/CreateNoteForm/CreateNoteForm";
import Header from "../../Components/Header/Header";
import CreatePageContainer from "./CreatePageStyles";

const CreatePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <CreatePageContainer>
        <CreateNoteForm noteToEdit={null} />
        <button
          className="back-button"
          onClick={() => {
            navigate("/home");
          }}
        >
          Back to notes
        </button>
      </CreatePageContainer>
    </>
  );
};

export default CreatePage;
