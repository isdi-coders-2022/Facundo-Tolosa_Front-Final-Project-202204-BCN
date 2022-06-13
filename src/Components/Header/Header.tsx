import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { resetPaginationActionCreator } from "../../redux/features/notesSlice/notesSlice";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import HeaderContainer from "./HeaderStyles";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <>
      <HeaderContainer>
        <span>
          <BurgerMenu />
        </span>
        <span
          className="logo-mobile"
          onClick={() => {
            dispatch(resetPaginationActionCreator());
            navigate(`/home`);
          }}
        >
          AN
        </span>
        <span
          className="logo-desktop"
          onClick={() => {
            dispatch(resetPaginationActionCreator());
            navigate(`/home`);
          }}
        >
          AMAZING NOTES
        </span>

        <img
          src="/images/icons8-user-white.png"
          alt="user caricature"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/user/${username}`);
          }}
        />
      </HeaderContainer>
      <NavigationMenu />
    </>
  );
};

export default Header;
