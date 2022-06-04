import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/hooks";
import { logoutActionCreator } from "../../redux/features/userSlice/userSlice";

const BurgerMenuContainer = styled.div`
  #menu__toggle {
    opacity: 0;
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    left: 0;
  }
  .menu__btn {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 42px;
    height: 50px;
    cursor: pointer;
    z-index: 1;
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: white;
    transition-duration: 0.25s;
  }
  .menu__btn > span::before {
    content: "";
    top: -13px;
  }
  .menu__btn > span::after {
    content: "";
    top: 13px;
  }
  .menu__box {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: #000000ee;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    transition-duration: 0.25s;
  }
  .menu__item {
    display: block;
    padding: 30px 24px;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
  }
  .menu__item:hover {
    background-color: #cfd8dc;
  }

  a {
    text-decoration: none;
  }
`;

const BurgerMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    navigate("/login");
  };

  return (
    <BurgerMenuContainer>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <NavLink to={"/home"}>
              <p className="menu__item">Home</p>
            </NavLink>
          </li>
          <li>
            <p className="menu__item">Create Note</p>
          </li>
          <li>
            <p className="menu__item">Categories</p>
          </li>
          <li>
            <p className="menu__item" onClick={logOut}>
              Logout
            </p>
          </li>
        </ul>
      </div>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
