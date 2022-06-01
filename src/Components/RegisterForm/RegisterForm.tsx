import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import RegisterFormContainer from "./RegisterFormStyles";

interface IRegisterForm {
  username: string;
  password: string;
  name: string;
  image: string;
}

const RegisterForm = (): JSX.Element => {
  const initialFormValue: IRegisterForm = {
    username: "",
    password: "",
    name: "",
    image: "",
  };

  const [formValues, setFormValues] = useState<IRegisterForm>(initialFormValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormValues(initialFormValue);
  };

  return (
    <RegisterFormContainer>
      <img src="images/icons8-usuario-100.png" alt="user caricature" />

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={formValues.name}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Your name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={formValues.username}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Username"
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formValues.password}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Password"
          />
        </div>
        <div className="form-field-image-input">
          <label htmlFor="username">Avatar</label>
          <input
            type="text"
            id="image"
            value={formValues.image}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Avatar"
          />
        </div>
        <input type="submit" value="Register" className="submit-input" />
      </form>
      <NavLink to={"/login"}> I already have an account</NavLink>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
