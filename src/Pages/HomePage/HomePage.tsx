import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import NotePreviewList from "../../Components/NotePreviewList/NotePreviewList";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setNotesToShowActionCreator } from "../../redux/features/notesSlice/notesSlice";
import { loadNotesThunk } from "../../redux/thunks/notesThunks/notesThunks";
import { paginate } from "../../utils/paginate";
import HomePageContainer from "./HomePageStyles";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { allNotes, notesToShow } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(loadNotesThunk());
  }, [dispatch]);

  useEffect(() => {
    const notesToShowByPagination = paginate(allNotes, 1);
    dispatch(setNotesToShowActionCreator(notesToShowByPagination));
  }, [allNotes, dispatch]);

  return (
    <HomePageContainer>
      <NotePreviewList notesToShow={notesToShow} />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
