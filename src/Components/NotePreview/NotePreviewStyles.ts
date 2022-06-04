import styled from "styled-components";

const NotePreviewContainer = styled.div`
  width: 300px;
  height: 193px;
  background-color: #8594e4;
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
  }

  .category {
    font-size: 25px;
    margin: 0 10px;
  }

  .user {
    font-size: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0px 10px;
  }

  .date {
    text-align: right;
    font-size: 20px;
    margin: 0px 10px;
  }

  img {
    width: 50px;
    margin: 0 5px 0 0;
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

export default NotePreviewContainer;
