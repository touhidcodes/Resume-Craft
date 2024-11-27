import { useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  fn: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        fn();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, fn]);
};

export default useClickOutside;
