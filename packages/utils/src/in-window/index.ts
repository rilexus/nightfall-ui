import { inObject } from "../in-object";

const inWindow = (key: string) => inObject(window, key);

export { inWindow };
