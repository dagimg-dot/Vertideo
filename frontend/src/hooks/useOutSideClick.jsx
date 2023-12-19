import { useRef, useEffect } from "react";

const useOutsideClick = (callback, btnRef) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback, ref]);

  return ref;
};

export default useOutsideClick;
