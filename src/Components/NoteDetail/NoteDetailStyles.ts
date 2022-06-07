import styled from "styled-components";

const NoteDetailContainer = styled.div`
  margin-top: 20px;
  width: 80%;
  height: 420px;
  border: 5px solid #8594e4;
  border-radius: 5px;
  background-color: #fff;
  font-family: "Work Sans", sans-serif;
  user-select: text;
  p {
    margin: 0px;
    padding: 2px;
  }

  .title {
    height: 8%;
    font-size: 25px;
  }

  .author {
    height: 8%;
    font-size: 18px;
  }

  .content {
    height: 84%;
    overflow: scroll;
  }
`;

export default NoteDetailContainer;
