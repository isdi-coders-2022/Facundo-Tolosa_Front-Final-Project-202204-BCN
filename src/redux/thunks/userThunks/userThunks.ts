import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store/store";
import {
  setLoadingOff,
  setLoadingOffWithMessage,
  setLoadingOn,
} from "../../../utils/modal";
import {
  setNotesToShowActionCreator,
  setUserToShowActionCreator,
} from "../../features/notesSlice/notesSlice";

interface IuserCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface IuserInfo {
  id: string;
  name: string;
  username: string;
  image: string;
}

interface IRegisterData {
  password: string;
  name: string;
  username: string;
  image: string;
}

export const loginThunk =
  (userData: IuserCredentials) => async (dispatch: AppDispatch) => {
    try {
      setLoadingOn();

      const { data } = await axios.post<LoginResponse>(
        `${process.env.REACT_APP_API_URL}user/login`,
        userData
      );
      localStorage.setItem("token", data.token);

      const { id, name, username, image }: IuserInfo = jwtDecode<IuserInfo>(
        data.token
      );

      dispatch(loginActionCreator({ id, name, username, image }));
      setLoadingOffWithMessage("Logged in succesfully.", false);
    } catch {
      setLoadingOffWithMessage("Error logging in.", true);
    }
  };

export const registerThunk =
  (userData: IRegisterData) => async (dispatch: AppDispatch) => {
    try {
      setLoadingOn();
      await axios.post(
        `${process.env.REACT_APP_API_URL}user/register`,
        userData
      );
      setLoadingOff();

      dispatch(
        loginThunk({ username: userData.username, password: userData.password })
      );
    } catch {
      setLoadingOffWithMessage("Error on register. Try again later.", true);
    }
  };

export const getUserThunk =
  (username: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoadingOn();
      const {
        data: { user },
      } = await axios.get(`${process.env.REACT_APP_API_URL}user/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(setUserToShowActionCreator(user));
      dispatch(setNotesToShowActionCreator(user.notes));
      setLoadingOff();
    }
  };
