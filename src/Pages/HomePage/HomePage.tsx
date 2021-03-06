import { useEffect } from "react";
import Filter from "../../Components/Filter/Filter";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NotePreviewList from "../../Components/NotePreviewList/NotePreviewList";
import SearchBarMobile from "../../Components/SearchBarMobile/SearchBarMobile";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { askForPermissionToReceiveNotifications } from "../../push-notification";
import { setNotesToShowActionCreator } from "../../redux/features/notesSlice/notesSlice";
import { loadNotesThunk } from "../../redux/thunks/notesThunks/notesThunks";
import { filterNotes } from "../../utils/filterNotes";
import { paginate } from "../../utils/paginate";
import HomePageContainer from "./HomePageStyles";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { allNotes, notesToShow, actualPage, activeFilter } = useAppSelector(
    (state) => state.notes
  );

  useEffect(() => {
    dispatch(loadNotesThunk());
  }, [dispatch]);

  useEffect(() => {
    const notesFiltered = filterNotes(allNotes, activeFilter);

    const notesToShowByPagination = paginate(notesFiltered, actualPage);

    dispatch(setNotesToShowActionCreator(notesToShowByPagination));
  }, [allNotes, dispatch, actualPage, activeFilter]);

  return (
    <>
      <Header />
      <HomePageContainer>
        <Filter />
        <div className="search-bar">
          <SearchBarMobile />
        </div>
        <NotePreviewList notesToShow={notesToShow} />
        <button
          className="notifications-button"
          onClick={askForPermissionToReceiveNotifications}
        >
          Receive notifications
        </button>
        <Footer />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
