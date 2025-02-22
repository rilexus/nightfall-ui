import { useState } from "react";

let id = 0;
const useId = (prefix = "") => {
  const [ownId] = useState(() => {
    ++id;
    if (prefix) {
      return `${prefix}-${id}`;
    }
    return id;
  });

  return ownId;
};

export default useId;
