import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

interface Props {
  children: JSX.Element;
}

const CheckIfNotLogged = ({ children }: Props) => {
  const { name } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (name) navigate("/home");
  }, [name, navigate]);

  if (!name) {
    return children;
  }
  return null;
};

export default CheckIfNotLogged;
