import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  id: string;
  email: string;
  role?: string;
  exp: number;
  [key: string]: any;
}

interface UseAuthUserReturn {
  user: JwtPayload | null;
  isAuthenticated: boolean;
}

const useAuthUser = (): UseAuthUserReturn => {
  const token = Cookies.get("accessToken");

  let user: JwtPayload | null = null;
  let isAuthenticated = false;

  try {
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);

      // Check if token is expired
      const isExpired = decoded.exp * 1000 < Date.now();

      if (!isExpired) {
        user = decoded;
        isAuthenticated = true;
      } else {
        Cookies.remove("accessToken");
      }
    }
  } catch (error) {
    console.error("Invalid token:", error);
    Cookies.remove("accessToken");
  }

  return { user, isAuthenticated };
};

export default useAuthUser;
