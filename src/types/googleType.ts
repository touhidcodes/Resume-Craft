import { GoogleAuthProvider, UserCredential } from "firebase/auth";

export type AuthContextType = {
  googleSignIn: () => Promise<any>;
};
