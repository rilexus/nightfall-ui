import { useCallback, useState } from "react";

const useToggle = (
  initialValue = true
): [boolean, () => void, (value: boolean) => void] => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  const set = useCallback((value: boolean) => {
    setValue(value);
  }, []);

  return [value, toggle, set];
};

export { useToggle };
