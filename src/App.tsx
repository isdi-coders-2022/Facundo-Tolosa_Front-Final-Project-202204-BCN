import React from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

const App = () => {
  return (
    <>
      <h1>AMAZING NOTES</h1>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
