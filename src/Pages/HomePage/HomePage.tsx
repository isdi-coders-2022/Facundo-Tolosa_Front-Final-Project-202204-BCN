import { useEffect } from "react";
import NotePreviewList from "../../Components/NotePreviewList/NotePreviewList";
import { useAppDispatch } from "../../hooks/hooks";
import { loadNotesThunk } from "../../redux/thunks/notesThunks/notesThunks";
import HomePageContainer from "./HomePageStyles";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadNotesThunk());
  }, [dispatch]);

  return (
    <HomePageContainer>
      <h1>Logged in</h1>
      <NotePreviewList />
    </HomePageContainer>
  );
};

export default HomePage;
