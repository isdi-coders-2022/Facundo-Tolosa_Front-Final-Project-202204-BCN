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
      window.scrollTo(0, 0);
    }
  };

  const decrementPage = () => {
    dispatch(decrementPageActionCreator());
    window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <button
        onClick={decrementPage}
        className={actualPage === 0 ? "button-hidden" : ""}
      >
        {"<<"}
      </button>

      <p>{actualPage + 1}</p>

      <button
        onClick={incrementPage}
        className={
          actualPage + 1 === Math.ceil(allNotes.length / 10)
            ? "button-hidden"
            : ""
        }
      >
        {">>"}
      </button>
    </FooterContainer>
  );
};

export default Footer;
