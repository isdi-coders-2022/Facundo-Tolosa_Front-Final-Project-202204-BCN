import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 85px;
  background-color: #6643b5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
  font-family: "Koulen";
  z-index: 20;

  p {
    margin: 20px;
    font-size: 25px;
  }

  button {
    border: none;
    background-color: #6643b5;
    color: white;
    font-size: 30px;
    cursor: pointer;
  }

  @media (min-width: 600px) {
  }
`;

export default FooterContainer;
