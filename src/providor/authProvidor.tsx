import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebaseConfig";
import { AuthContextType } from "../types";

const auth = getAuth(app);

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loaidng, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const authinfo = {
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
