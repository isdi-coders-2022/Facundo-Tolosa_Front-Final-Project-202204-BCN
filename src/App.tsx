import React from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";
import CheckIfLogged from "./Components/CheckIfLogged/CheckIfLogged";
import { useAppDispatch } from "./hooks/hooks";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckIfNotLogged from "./Components/CheckIfNotLogged/CheckIfNotLogged";
import UserPage from "./Pages/UserPage/UserPage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import EditPage from "./Pages/EditPage/EditPage";
import NotePage from "./Pages/NotePage/NotePage";

interface IuserInfo {
  id: string;
  name: string;
  username: string;
  image: string;
}

const App = () => {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  try {
    const userInfo: IuserInfo = jwtDecode(token as string);

    dispatch(loginActionCreator(userInfo));
  } catch (error) {}

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <CheckIfNotLogged>
              <LoginPage />
            </CheckIfNotLogged>
          }
        />
        <Route
          path="/register"
          element={
            <CheckIfNotLogged>
              <RegisterPage />
            </CheckIfNotLogged>
          }
        />
        <Route
          path="/home"
          element={
            <CheckIfLogged>
              <HomePage />
            </CheckIfLogged>
          }
        />
        <Route
          path="/user/:username"
          element={
            <CheckIfLogged>
              <UserPage />
            </CheckIfLogged>
          }
        />
        <Route
          path="/create"
          element={
            <CheckIfLogged>
              <CreatePage />
            </CheckIfLogged>
          }
        />
        <Route
          path="/notes/edit/:noteId"
          element={
            <CheckIfLogged>
              <EditPage />
            </CheckIfLogged>
          }
        />
        <Route
          path="/notes/:noteId"
          element={
            <CheckIfLogged>
              <NotePage />
            </CheckIfLogged>
          }
        />
      </Routes>
    </>
  );
};

export default App;
