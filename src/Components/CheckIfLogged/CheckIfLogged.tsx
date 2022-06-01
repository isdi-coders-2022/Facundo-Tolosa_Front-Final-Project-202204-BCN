import React from "react";
import { Navigate, NavigationType } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

type TCheckIfLogged = ({ children }: Props) => JSX.Element | NavigationType;

const CheckIfLogged: TCheckIfLogged = ({ children }) => {
  const { name } = useAppSelector((state) => state.user);

  return name ? (children as JSX.Element) : <Navigate to="/login" />;
};

export default CheckIfLogged;
