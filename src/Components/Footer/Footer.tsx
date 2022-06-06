import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  decrementPageActionCreator,
  incrementPageActionCreator,
} from "../../redux/features/notesSlice/notesSlice";
import FooterContainer from "./FooterStyles";

const Footer = (): JSX.Element => {
  const { actualPage } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  return (
    <FooterContainer>
      <button onClick={() => dispatch(decrementPageActionCreator())}>
        {"<<"}
      </button>
      <p>{actualPage}</p>
      <button onClick={() => dispatch(incrementPageActionCreator())}>
        {">>"}
      </button>
    </FooterContainer>
  );
};

export default Footer;
