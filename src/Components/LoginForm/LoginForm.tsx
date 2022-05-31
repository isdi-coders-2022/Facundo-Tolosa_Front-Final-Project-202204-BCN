import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { loginThunk } from "../../redux/thunks/userThunks/userThunks";
import LoginFormContainer from "./LoginFormStyles";

interface ILoginForm {
  username: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const initialFormValue: ILoginForm = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState<ILoginForm>(initialFormValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(loginThunk(formValues));
    setFormValues(initialFormValue);
  };

  return (
    <LoginFormContainer>
      <img src="images/icons8-usuario-100.png" alt="user caricature" />

      <form onSubmit={handleSubmit} noValidate>
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
        <input type="submit" value="Login" className="submit-input" />
      </form>
      <p>Create an account </p>
    </LoginFormContainer>
  );
};

export default LoginForm;
