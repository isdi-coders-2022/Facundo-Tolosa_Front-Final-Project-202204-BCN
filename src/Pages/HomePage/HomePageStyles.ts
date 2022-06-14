import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 85px;
  width: 100%;

  .notifications-button {
    margin: 15px 0;
    height: 40px;
    width: 200px;
    border-radius: 5px;
    font-size: 20px;
  }

  @media (min-width: 600px) {
    top: 125px;

    .search-bar {
      display: none;
    }
  }
`;

export default HomePageContainer;
