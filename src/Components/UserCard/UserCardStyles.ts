import styled from "styled-components";

const UserCardContainer = styled.div`
  width: 300px;
  height: 270px;
  background-color: #2c2f94;
  border-radius: 15px;
  transition: all 0.5s;
  font-family: "Work Sans", sans-serif;
  box-shadow: 5px 5px 9px -4px rgba(0, 0, 0, 0.58);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    color: #fff;
    margin: 0px;
  }

  .user-card__name {
    font-size: 30px;
    font-weight: bold;
    margin: 5px 0;
  }

  .username-name-img {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 150px;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 600px) {
    :hover {
      box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.58);
    }
  }
`;

export default UserCardContainer;
