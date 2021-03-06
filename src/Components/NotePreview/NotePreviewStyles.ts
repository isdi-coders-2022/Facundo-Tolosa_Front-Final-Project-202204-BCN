import styled from "styled-components";

const NotePreviewContainer = styled.div`
  width: 300px;
  height: 193px;
  background-color: #2c2f94;
  border-radius: 15px;
  transition: all 0.5s;
  font-family: "Work Sans", sans-serif;
  box-shadow: 5px 5px 9px -4px rgba(0, 0, 0, 0.58);
  margin: 10px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    color: #fff;
    margin: 0px;
  }

  .title {
    font-weight: bold;
    font-size: 30px;
    margin: 0 10px;
    cursor: pointer;
  }

  .category {
    font-size: 25px;
    margin: 0 10px;
  }

  .user-buttons {
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 5px;
  }

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .date {
    text-align: right;
    font-size: 20px;
    margin: 0px 10px;
  }

  svg {
    margin: 0 5px 0 0;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  button {
    background-color: #fff;
    width: 80px;
    height: 40px;
    cursor: pointer;
    color: #2c2f94;
    transition: all 0.5s;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 17px;
    margin: 3px 0;
  }

  @media (min-width: 600px) {
    :hover {
      box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.58);
    }
  }
`;

export default NotePreviewContainer;
