import { createState, localStorageEnhancer } from "../../libs";

const useColorSchema = createState<"light" | "dark">(
  "light",
  localStorageEnhancer("colorSchema")
);

export { useColorSchema };
