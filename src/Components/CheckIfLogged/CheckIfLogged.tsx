import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

interface Props {
  children: JSX.Element;
}

const CheckIfLogged = ({ children }: Props) => {
  const { name } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/login");
    }
  }, [name, navigate]);

  return children;
};

export default CheckIfLogged;
