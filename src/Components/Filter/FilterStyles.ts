import styled from "styled-components";

const Filter = styled.div`
  width: 100%;
  font-family: "Work Sans", sans-serif;
  overflow: hidden;

  .filter-container {
    width: 100%;
    height: 45px;
    color: white;
    transition: all 0.5s;
  }

  .filter-container:focus-within {
    height: 230px;
    background-color: #000000ce;
  }

  .filter-button {
    width: 100%;
    height: 45px;
    font-size: 25px;
    background-color: #586ff1;
    color: white;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .filter-items {
    color: white;
    font-weight: bold;
    padding: 0px;
    margin: 0px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 7px;
    }
  }
`;

export default Filter;
