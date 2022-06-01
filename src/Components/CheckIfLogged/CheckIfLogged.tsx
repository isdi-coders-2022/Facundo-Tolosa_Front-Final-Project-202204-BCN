import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

const CheckIfLogged = ({ children }: any) => {
  const { name } = useAppSelector((state) => state.user);

  return name ? children : <Navigate to="/login" />;
};

export default CheckIfLogged;
