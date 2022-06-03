import React, { useEffect } from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";
import CheckIfLogged from "./Components/CheckIfLogged/CheckIfLogged";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IuserInfo {
  id: string;
  name: string;
  username: string;
  image: string;
}

const App = () => {
  const { name } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token || name) {
      const userInfo: IuserInfo = jwtDecode(token as string);

      dispatch(loginActionCreator(userInfo));
      navigate("/home");
    }
  }, [dispatch, navigate, name]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <CheckIfLogged>
              <HomePage />
            </CheckIfLogged>
          }
        />
      </Routes>
    </>
  );
};

export default App;
