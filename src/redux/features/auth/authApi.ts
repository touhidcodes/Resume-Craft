// import { baseApi } from "../../api/baseApi";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { baseApi } from "../../api/baseApi";
import { app } from "../../../firebaseConfig";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    singup: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        body: userInfo,
      }),
    }),

    login: builder.mutation({
      query: (userInfo) => {
        console.log(userInfo);
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),

    googleSignInWithPopup: builder.mutation({
      queryFn: async () => {
        try {
          const userCredential = await signInWithPopup(auth, googleProvider);
          return { data: userCredential.user };
        } catch (error) {
          return { error: error?.message };
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useSingupMutation,
  useGoogleSignInWithPopupMutation,
} = authApi;
