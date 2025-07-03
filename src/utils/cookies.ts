// utils/cookie.ts
import Cookies from "js-cookie";

type CookieAttributes = Parameters<typeof Cookies.set>[2];

export const setCookie = (
  key: string,
  value: string,
  options?: CookieAttributes
): void => {
  Cookies.set(key, value, { path: "/", ...options });
};

export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

export const deleteCookie = (key: string, options?: CookieAttributes): void => {
  Cookies.remove(key, { path: "/", ...options });
};

export const deleteCookies = (): void => {
  Cookies.remove("accessToken", { path: "/" });
  Cookies.remove("refreshToken", { path: "/" });
};
