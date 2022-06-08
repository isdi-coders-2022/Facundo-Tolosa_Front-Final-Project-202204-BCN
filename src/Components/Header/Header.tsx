import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { resetPaginationActionCreator } from "../../redux/features/notesSlice/notesSlice";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import HeaderContainer from "./HeaderStyles";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      <span>
        <BurgerMenu />
      </span>
      <span
        className="logo"
        onClick={() => {
          dispatch(resetPaginationActionCreator());
          navigate(`/home`);
        }}
      >
        AN
      </span>

      <img
        src="/images/icons8-user-white.png"
        alt="user caricature"
        onClick={() => {
          navigate(`/user/${username}`);
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
