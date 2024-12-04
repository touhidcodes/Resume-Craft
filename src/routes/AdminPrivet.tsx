import { ReactNode } from "react";
import { userCurrentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const AdminPrivet = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(userCurrentUser);
  console.log(user);

  if (!user) {
    return (
      <div className="text-center">Please log in to access this page.</div>
    );
  }

  if (user.role !== "ADMIN") {
    return (
      <div className="text-center">
        You do not have permission to access this page.
      </div>
    );
  }
  return children;
};

export default AdminPrivet;
