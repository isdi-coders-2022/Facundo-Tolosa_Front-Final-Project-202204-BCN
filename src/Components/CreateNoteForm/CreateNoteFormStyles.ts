import styled from "styled-components";

const CreateNoteFormContainer = styled.div`
  margin-top: 20px;
  width: 80%;
  height: 453px;
  border: 5px solid #8594e4;
  border-radius: 5px;
  background-color: #fff;
  font-family: "Work Sans", sans-serif;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-field__content,
  .form-field__title,
  .form-field__category {
    display: flex;
    justify-content: center;
    margin: 5px;
    label {
      display: none;
    }
    input {
      width: 97%;
    }
  }

  .form-field__title {
    margin: 5px 0;
    width: 97%;
    height: 10%;
    input {
      font-size: 25px;
    }
  }

  .form-field__content {
    margin: 5px 0;
    width: 97%;
    height: 60%;
    textarea {
      font-size: 20px;
      resize: none;
      font-family: "Work Sans", sans-serif;
      width: 97%;
    }
  }

  .form-field__category {
    margin: 5px 0;
    width: 97%;

    height: 10%;
    select {
      width: 100%;
      font-size: 20px;
    }
  }

  .submit-input {
    background-color: #6643b5;
    width: 120px;
    height: 50px;
    cursor: pointer;
    color: white;
    transition: all 0.5s;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 17px;
    margin: 3px 0;
  }

  @media (min-width: 600px) {
    .submit-input:hover {
      background-color: white;
      cursor: pointer;
      color: #6643b5;
    }
  }
`;

export default CreateNoteFormContainer;
