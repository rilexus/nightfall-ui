import { MutableRefObject, useEffect, useRef, useState } from "react";

const useInputValue = (): [any, MutableRefObject<HTMLInputElement | null>] => {
  const [value, setValue] = useState();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const input = inputRef.current;
    const keyup = (e: any) => {
      const value = e.target.value;
      setValue(value);
    };
    if (input) {
      input.addEventListener("keyup", keyup);
    }
    return () => {
      if (input) {
        input.removeEventListener("keyup", keyup);
      }
    };
  }, [inputRef]);

  return [value, inputRef];
};

export { useInputValue };
