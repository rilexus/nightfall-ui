import { MutableRefObject, useEffect, useRef, useState } from "react";

function throttle(mainFunction: (...args: any) => any, delay: number) {
  let timerFlag: any = null; // Variable to keep track of the timer

  // Returning a throttled version
  return (...args: any) => {
    if (timerFlag === null) {
      // If there is no timer currently running
      mainFunction(...args); // Execute the main function
      timerFlag = setTimeout(() => {
        // Set a timer to clear the timerFlag after the specified delay
        timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
      }, delay);
    }
  };
}
function debounce(func: (...args: any) => any, timeout = 300) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      //@ts-ignore
      func.apply(this, args);
    }, timeout);
  };
}

const useScrollVelocity = (
  ref: MutableRefObject<HTMLElement | undefined | null>
) => {
  const [velocity, setVelocity] = useState(0);

  const [clear] = useState(() =>
    debounce(() => {
      // reset velocity to 0
      setVelocity(0);
    }, 1000)
  );

  const [th] = useState(() =>
    throttle((e: HTMLElement) => {
      const currentPos = e.scrollTop;

      const now = Date.now();
      const timeDelta = now - timeRef.current;

      console.log(timeDelta);

      const positionDelta = currentPos - prevPositionRef.current;

      const velocity = positionDelta / timeDelta;

      prevPositionRef.current = currentPos;
      timeRef.current = now;

      setVelocity(velocity);

      clear();
    }, 50)
  );

  const prevPositionRef = useRef(0);
  const timeRef = useRef(Date.now());

  useEffect(() => {
    const element = ref.current;
    const handler = () => {
      th(element);
    };

    if (element) {
      element.addEventListener("scroll", handler);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handler);
      }
    };
  }, []);

  return velocity;
};

export default useScrollVelocity;
