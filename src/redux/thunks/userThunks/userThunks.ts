import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store/store";

interface IuserCredentials {
  username: String;
  password: String;
}

interface LoginResponse {
  token: string;
}

interface IuserInfo {
  id: String;
  name: String;
  username: String;
  image: String;
}

interface IRegisterData {
  password: String;
  name: String;
  username: String;
  image: String;
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
    await axios.post<LoginResponse>(
      `${process.env.REACT_APP_API_URL}user/register`,
      userData
    );
  };
