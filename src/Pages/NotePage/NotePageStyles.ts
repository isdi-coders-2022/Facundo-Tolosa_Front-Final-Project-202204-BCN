import styled from "styled-components";

const NotePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 80px;
  width: 100%;

  .back-button {
    cursor: pointer;
    font-size: 20px;
    font-family: "Work Sans", sans-serif;
    color: white;
    background-color: #8594e4;
    border-radius: 5px;
    border: none;
    width: 170px;
    height: 30px;
    margin: 10px 0;
  }

  @media (min-width: 600px) {
    top: 125px;
  }
`;

export default NotePageContainer;
