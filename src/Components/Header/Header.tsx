import BurgerMenu from "../BurgerMenu/BurgerMenu";
import HeaderContainer from "./HeaderStyles";

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <span>
        <BurgerMenu />
      </span>
      <span className="logo">AN</span>

      <img src="images/icons8-user-white.png" alt="user caricature" />
    </HeaderContainer>
  );
};

export default Header;
