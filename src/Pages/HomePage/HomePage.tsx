import { useEffect } from "react";
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
    </HomePageContainer>
  );
};

export default HomePage;
