import { DependencyList, MouseEventHandler, useEffect, useRef } from "react";

function useClickOutside<Element = any>(
  callback: MouseEventHandler<Element>,
  deps: DependencyList
) {
  const ref = useRef<Element>(null);

  useEffect(() => {
    const handle = (event: any) => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    };

    // Bind the event listener
    document.addEventListener("click", handle);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handle);
    };
  }, deps);

  return ref;
}

export { useClickOutside };
