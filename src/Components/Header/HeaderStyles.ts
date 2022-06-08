import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 85px;
  background-color: #6643b5;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: white;
  font-family: "Koulen";
  z-index: 20;

  p {
    margin: 0px;
  }

  .logo {
    text-align: center;
    font-size: 60px;
  }

  .menu__btn {
    top: 40px;
  }

  span {
    width: 65px;
  }

  img {
    width: 65px;
    margin: 0 7px 0 0;
  }

  @media (min-width: 600px) {
    .logo {
      cursor: pointer;
    }
    p {
      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
  }
`;

export default HeaderContainer;
