import { NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/hooks";
import { resetPaginationActionCreator } from "../../redux/features/notesSlice/notesSlice";
import { logoutActionCreator } from "../../redux/features/userSlice/userSlice";
import SearchBar from "../SearchBar/SearchBar";

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
      width: 100%;
      list-style: none;
    }

    ul {
      padding: 0px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    li {
      display: inline;
    }

    .menu__item {
      margin: 0px 20px;
      padding: 0 10px;
      color: #fff;
      font-size: 21px;
      transition-duration: 0.25s;
      height: 40px;
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

    .search-bar-desktop {
      margin: 0 5px;
      display: flex;
      height: 30px;
    }
  }
`;

const NavigationMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username } = useParams();

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
            <p className="menu__item">Create a note</p>
          </NavLink>
        </li>
        <li className="logout">
          <p className="menu__item" onClick={logOut}>
            Logout
          </p>
        </li>
      </ul>
      <div className="search-bar-desktop">
        {username ? null : <SearchBar />}
      </div>
    </NavigationMenuContainer>
  );
};

export default NavigationMenu;
