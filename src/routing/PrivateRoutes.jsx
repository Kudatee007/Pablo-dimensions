import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));
  const content = getTokenFromLocalStorage?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
  return content;
};
