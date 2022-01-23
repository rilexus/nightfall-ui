import { useEffect, useState } from "react";

const inObject = (object: Object, key: string) => key in object;
const inWindow = (key: string) => inObject(window, key);
const inWeb = () => typeof window === "object";

const errorMessage = "MatchMedia is not supported!";

const useMediaQuery = (mediaQuery: string): boolean => {
  if (!inWeb() || !inWindow("matchMedia")) {
    console.warn(errorMessage);
    return false;
  }

  const [isVerified, setIsVerified] = useState(
    window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const handle = () => setIsVerified(mediaQueryList.matches);

    try {
      mediaQueryList.addEventListener("change", handle);
    } catch (e) {
      // Safari (-.-)
      mediaQueryList.addListener(handle);
    }

    handle();
    return () => {
      try {
        mediaQueryList.removeEventListener("change", handle);
      } catch (e) {
        // Safari (-.-)
        mediaQueryList.removeListener(handle);
      }
    };
  }, [mediaQuery]);

  return isVerified;
};

export { useMediaQuery };
