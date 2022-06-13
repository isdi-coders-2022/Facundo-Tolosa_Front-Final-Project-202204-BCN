import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/hooks";
import { resetPaginationActionCreator } from "../../redux/features/notesSlice/notesSlice";
import { logoutActionCreator } from "../../redux/features/userSlice/userSlice";

const NavigationMenuContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: contents;
    width: 100%;
    height: 40px;
    background-color: #282430fd;
    position: fixed;
    top: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: white;
    font-family: "Koulen";
    z-index: 20;

    .menu__box {
      width: 300px;
      list-style: none;
    }

    ul {
      padding: 0px;
      display: flex;
      justify-content: space-between;
    }

    li {
      display: inline;
    }

    .menu__item {
      padding: 0 10px;
      color: #fff;
      font-size: 21px;
      transition-duration: 0.25s;
    }

    .logout {
      cursor: pointer;
    }

    .menu__item:hover,
    .categories__item:hover {
      background-color: #cfd8dc;
    }

    a {
      text-decoration: none;
    }
  }
`;

const NavigationMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    navigate("/login");
  };

  const resetPagination = () => {
    dispatch(resetPaginationActionCreator());
    window.scrollTo(0, 0);
  };

  return (
    <NavigationMenuContainer>
      <ul className="menu__box">
        <li onClick={resetPagination}>
          <NavLink to={"/home"}>
            <p className="menu__item">Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/create"}>
            <p className="menu__item">Create Note</p>
          </NavLink>
        </li>
        <li className="logout">
          <p className="menu__item" onClick={logOut}>
            Logout
          </p>
        </li>
      </ul>
    </NavigationMenuContainer>
  );
};

export default NavigationMenu;
