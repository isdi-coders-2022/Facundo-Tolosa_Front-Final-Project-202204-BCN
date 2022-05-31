import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/userSlice/userSlice";

interface IuserCredentials {
  username: String;
  password: String;
}

interface IuserInfo {
  id: String;
  name: String;
  username: String;
  image: String;
}

export const loginThunk =
  (userData: IuserCredentials) => async (dispatch: Dispatch) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}user/login`,
      userData
    );

    localStorage.setItem("token", data.token);
    const { id, name, username, image }: IuserInfo = jwtDecode<IuserInfo>(
      data.token
    );

    dispatch(loginActionCreator({ id, name, username, image }));
  };
