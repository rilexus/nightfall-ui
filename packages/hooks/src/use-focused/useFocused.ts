import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useCallbackRef } from "../useCallbackRef";

const useFocused = (
  callback?: (focused: boolean) => void
): [boolean, MutableRefObject<HTMLInputElement | null>] => {
  const callbackRef = useCallbackRef(callback);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const input = inputRef.current;
    const callback = callbackRef.current;
    const focus = () => {
      setFocused(() => {
        if (callback) {
          callback(true);
        }
        return true;
      });
    };
    const blur = () => {
      setFocused(() => {
        if (callback) {
          callback(false);
        }
        return false;
      });
    };
    if (input) {
      input.addEventListener("focus", focus);
      input.addEventListener("blur", blur);
    }
    return () => {
      if (input) {
        input.removeEventListener("focus", focus);
        input.removeEventListener("blur", blur);
      }
    };
  }, [inputRef, callbackRef]);

  return [focused, inputRef];
};

export { useFocused };
