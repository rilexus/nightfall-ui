const access = (
  path: string /* key.path.to.object.value */,
  object: { [key: string]: any }
): any => {
  // Gets value from object by given path.
  //@ts-ignore
  const value = path.split(".").reduce((value, key) => value[key], object);
  if (!value) {
    console.warn(`Value is undefined for path: "${path}"!`);
  }
  return value;
};

const inObject = (object: Object, key: string) => key in object;
const inWindow = (key: string) => inObject(window, key);
const hasWindow = () => typeof window === "object";

const interpolate = (strings: any, ...values: any) => {
  return (context: any) => {
    return [...strings /* removes the "raw" key */]
      .map((str, i) => {
        const value = values[i];
        return `${str}${typeof value === "function" ? value(context) : value}`;
      })
      .join("");
  };
};

export { access, inObject, inWindow, hasWindow, interpolate };
