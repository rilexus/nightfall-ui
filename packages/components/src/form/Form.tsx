import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ctx = createContext(null);
const useForm = () => {
  const context = useContext(ctx);
  if (context === null) {
    console.warn("The useForm hook needs to be beneath the Form components.");
  }
  return context;
};

const Form: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [formValues, setFormValues] = useState({});
  const ref = useRef<HTMLFormElement>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    // Set initial state
    const data = new FormData(
      // @ts-ignore
      ref.current
    );
    const values = Array.from(data.entries());
    setFormValues(() =>
      values.reduce((acc, [name, value]) => ({ ...acc, [name]: value }), {})
    );
  }, []);

  const contextValue = useMemo(
    () => ({ values: formValues, ref }),
    [formValues, ref.current]
  );

  return (
    <form onChange={handleChange} ref={ref}>
      <ctx.Provider
        // @ts-ignore
        value={contextValue}
      >
        {children}
      </ctx.Provider>
    </form>
  );
};
export { useForm };
export default Form;
