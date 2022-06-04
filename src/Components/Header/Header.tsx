import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import HeaderContainer from "./HeaderStyles";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const { username } = useAppSelector((state) => state.user);

  return (
    <HeaderContainer>
      <span>
        <BurgerMenu />
      </span>
      <span className="logo">AN</span>

      <img
        src="images/icons8-user-white.png"
        alt="user caricature"
        onClick={() => {
          navigate(`/user/${username}`);
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
