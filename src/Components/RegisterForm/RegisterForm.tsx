import React, { ChangeEvent, FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import RegisterFormContainer from "./RegisterFormStyles";
import { useAppDispatch } from "../../hooks/hooks";
import { registerThunk } from "../../redux/thunks/userThunks/userThunks";

interface IRegisterForm {
  username: string;
  password: string;
  name: string;
  image: string | File;
}

const RegisterForm = (): JSX.Element => {
  const initialFormValue: IRegisterForm = {
    username: "",
    password: "",
    name: "",
    image: "",
  };
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState<IRegisterForm>(initialFormValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  const handleImageInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setFormValues({
      ...formValues,
      image: event.target.files?.[0] || "",
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const userFormData = new FormData();
    userFormData.append("username", formValues.username);
    userFormData.append("password", formValues.password);
    userFormData.append("name", formValues.name);
    userFormData.append("image", formValues.image);

    dispatch(
      registerThunk(userFormData, formValues.username, formValues.password)
    );

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
          <label htmlFor="image" className="image-label">
            {formValues.image ? "Image uploaded" : "Avatar"}
            <input
              className="form-field-image-input__button"
              type="file"
              id="image"
              onChange={handleImageInputChange}
              autoComplete="off"
            />
          </label>
        </div>
        <input type="submit" value="Register" className="submit-input" />
      </form>
      <NavLink to={"/login"}> I already have an account</NavLink>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
