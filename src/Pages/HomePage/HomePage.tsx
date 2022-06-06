import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import NotePreviewList from "../../Components/NotePreviewList/NotePreviewList";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loadNotesThunk } from "../../redux/thunks/notesThunks/notesThunks";
import HomePageContainer from "./HomePageStyles";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadNotesThunk());
  }, [dispatch]);

  const { allNotes } = useAppSelector((state) => state.notes);

  return (
    <HomePageContainer>
      <NotePreviewList notesToShow={allNotes} />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
