import { ReactNode } from "react";

import { useLocation } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { userCurrentToken } from "../redux/features/auth/authSlice";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(userCurrentToken);
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return children;
};

export default PrivateRoute;
