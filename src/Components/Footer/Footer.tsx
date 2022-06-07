import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  decrementPageActionCreator,
  incrementPageActionCreator,
} from "../../redux/features/notesSlice/notesSlice";
import FooterContainer from "./FooterStyles";

const Footer = (): JSX.Element => {
  const { actualPage, notesToShow, allNotes } = useAppSelector(
    (state) => state.notes
  );
  const dispatch = useAppDispatch();

  const incrementPage = () => {
    if (notesToShow.length === 10) {
      if (allNotes[allNotes.length - 1] === notesToShow[9]) {
        return;
      }
      dispatch(incrementPageActionCreator());
    }
  };

  const decrementPage = () => {
    dispatch(decrementPageActionCreator());
  };

  return (
    <FooterContainer>
      <button onClick={decrementPage}>{"<<"}</button>
      <p>{actualPage}</p>
      <button onClick={incrementPage}>{">>"}</button>
    </FooterContainer>
  );
};

export default Footer;
