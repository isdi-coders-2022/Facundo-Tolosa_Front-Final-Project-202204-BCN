import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store/store";

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
    const { data } = await axios.post<LoginResponse>(
      `${process.env.REACT_APP_API_URL}user/login`,
      userData
    );

    localStorage.setItem("token", data.token);

    const { id, name, username, image }: IuserInfo = jwtDecode<IuserInfo>(
      data.token
    );

    dispatch(loginActionCreator({ id, name, username, image }));
  };

export const registerThunk =
  (userData: IRegisterData) => async (dispatch: AppDispatch) => {
    await axios.post(`${process.env.REACT_APP_API_URL}user/register`, userData);
    dispatch(
      loginThunk({ username: userData.username, password: userData.password })
    );
  };
