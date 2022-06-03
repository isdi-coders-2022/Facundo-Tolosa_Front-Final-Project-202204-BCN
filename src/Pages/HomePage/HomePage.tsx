import { useEffect } from "react";
import BurgerMenu from "../../Components/BurgerMenu/BurgerMenu";
import Header from "../../Components/Header/Header";
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
      <Header />
      <NotePreviewList />
    </HomePageContainer>
  );
};

export default HomePage;
