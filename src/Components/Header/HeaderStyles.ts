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
  /* font-family: "Koulen"; */
  z-index: 20;

  p {
    margin: 0px;
  }

  .logo-mobile {
    text-align: center;
    font-size: 60px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu__btn {
    top: 40px;
  }

  span {
    width: 65px;
  }

  img {
    width: 65px;
    height: 65px;
    margin: 0 7px 0 0;
  }

  .logo-desktop {
    display: none;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    .logo-mobile {
      display: none;
    }

    .logo-desktop {
      display: contents;
      cursor: pointer;
      text-align: center;
      font-size: 35px;
      height: 65px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
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
