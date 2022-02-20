import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Dialog } from "@nightfall-ui/dialog";
import { Checkmark } from "@nightfall-ui/icons";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { Flex } from "@nightfall-ui/layout";
import { Platter } from "@nightfall-ui/surfaces";
import styled from "styled-components";
import { roundedLG } from "@nightfall-ui/css";
import { filledInputBackgroundColorCss, filledInputBorderCss } from "../css";

const SelectContext = createContext<{
  select: (value: string | number) => void;
  value: string | number;
}>({
  select: (value: string | number) => {},
  value: "",
});

const useSelectContext = () => useContext(SelectContext);

type Event = {
  target: {
    value: string | number;
  };
};

const Select: FC<{
  value: string | number;
  onChange: (event: Event) => void;
  id?: string;
}> = ({ id, children, onChange, value }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const positionRef = useRef({});

  const timeoutRef = useRef<any>(null);

  const select = (value: string | number) => {
    onChange({ target: { value } });
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const dialogStyle = useCSSProperties(
    {
      display: "block",
      //@ts-ignore
      top: `${positionRef.current.top}px`,
      //@ts-ignore
      left: `${positionRef.current.left}px`,
      position: "absolute",
      height: undefined,
    },
    [open, positionRef]
  );
  const child = React.Children.toArray(children).filter(
    ({ props }: any) => value === props.value
    //@ts-ignore
  )[0]?.props?.children;

  return (
    <SelectContext.Provider value={{ select, value }}>
      <div
        ref={ref}
        aria-expanded={open}
        aria-labelledby={id}
        aria-haspopup={"listbox"}
      >
        <div
          onClick={(e) => {
            //@ts-ignore
            positionRef.current = e.target.getBoundingClientRect();
            setOpen(true);
          }}
        >
          {!open && child}
        </div>
        <Dialog open={open} style={dialogStyle}>
          <ul role={"listbox"}>{children}</ul>
        </Dialog>
      </div>
    </SelectContext.Provider>
  );
};

const StyledChildren = styled.div`
  &:hover {
    .option {
      transition: color 200ms ease 0ms;
      color: white;
    }
  }
`;

const Option: FC<{ value: string | number }> = ({ value, children }) => {
  const { select, value: v } = useSelectContext();
  const isSelected = v === value;

  const platterStyle = useCSSProperties(
    {
      borderRadius: ".5rem",
      marginBottom: "0.3rem",
      userSelect: "none",
    },
    []
  );

  const flexStyle = useCSSProperties(
    {
      padding: "0 1rem",
      cursor: "pointer",
      minWidth: "130px",
      height: "3.5rem",
    },
    []
  );

  const checkmarkStyle = useCSSProperties(
    {
      display: isSelected ? "block" : "none",
    },
    [isSelected]
  );

  return (
    <li>
      <Platter type={"regular"} style={platterStyle}>
        <StyledChildren>
          <Flex
            align={"center"}
            justify={"between"}
            onClick={() => select(value)}
            style={flexStyle}
          >
            <span
              className={"option"}
              role={"option"}
              aria-selected={isSelected}
            >
              {children}
            </span>
            <span style={checkmarkStyle}>
              <Checkmark
                fill={"#0984ffff"}
                height={"1.5rem"}
                width={"1.5rem"}
              />
            </span>
          </Flex>
        </StyledChildren>
      </Platter>
    </li>
  );
};

export { Select, Option };
