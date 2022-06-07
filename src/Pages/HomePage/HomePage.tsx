import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NotePreviewList from "../../Components/NotePreviewList/NotePreviewList";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setNotesToShowActionCreator } from "../../redux/features/notesSlice/notesSlice";
import { loadNotesThunk } from "../../redux/thunks/notesThunks/notesThunks";
import { paginate } from "../../utils/paginate";
import HomePageContainer from "./HomePageStyles";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { allNotes, notesToShow, actualPage } = useAppSelector(
    (state) => state.notes
  );

  useEffect(() => {
    dispatch(loadNotesThunk());
  }, [dispatch]);

  useEffect(() => {
    const notesToShowByPagination = paginate(allNotes, actualPage);

    dispatch(setNotesToShowActionCreator(notesToShowByPagination));
  }, [allNotes, dispatch, actualPage]);

  return (
    <>
      <Header />
      <HomePageContainer>
        <NotePreviewList notesToShow={notesToShow} />
        <Footer />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
