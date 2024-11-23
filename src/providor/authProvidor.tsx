import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { app } from "../firebaseConfig";
const auth = getAuth(app);
export const AuthContext = createContext<unknown>(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const googleSignIn = () => {
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
