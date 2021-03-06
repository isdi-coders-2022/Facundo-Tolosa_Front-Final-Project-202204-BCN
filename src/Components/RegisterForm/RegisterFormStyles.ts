import styled from "styled-components";

const RegisterFormContainer = styled.div`
  margin-top: 10px;
  width: 330px;
  height: 500px;
  border: 10px solid #6643b5;
  background-color: #d5def5;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-family: "Work Sans", sans-serif;

  h2 {
    font-family: "Work Sans", sans-serif;
    text-align: center;
    font-size: 30px;
    margin: 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  input {
    background-color: #d5def5;
    border: 5px solid #6643b5;
    border-radius: 10px;
    margin: 10px 0px;
    height: 40px;
    color: #6643b5;
    font-size: 24px;
    text-align: center;
    &::placeholder {
      color: #6643b5;
      opacity: 0.9;
    }
  }

  .form-field-image-input__button {
    display: none;
  }

  .submit-input {
    background-color: #6643b5;
    width: 150px;
    height: 58px;
    cursor: pointer;
    color: white;
    transition: all 0.5s;
  }

  a {
    text-align: center;
    text-decoration: none;
    color: #6643b5;
    cursor: pointer;
    transition: all 0.5s;
    font-size: 24px;
    margin: 5px;
  }

  img {
    width: 100px;
  }

  label {
    display: none;
  }

  .image-label {
    display: contents;
    font-size: 24px;
    color: #6643b5;
    cursor: pointer;
    p {
      margin: 0px;
      width: 100%;
      text-align: center;
    }
  }

  .form-field-image-input {
    border: 5px solid #6643b5;
    border-radius: 10px;
    width: 296px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    a:hover {
      color: white;
    }

    .submit-input:hover {
      background-color: white;
      cursor: pointer;
      color: #6643b5;
    }
  }
`;

export default RegisterFormContainer;
