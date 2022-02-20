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

const SelectContext = createContext({
  select: (value: string) => {},
  value: "",
});

const useSelectContext = () => useContext(SelectContext);

type Event = {
  target: {
    value: string;
  };
};

const Select: FC<{ value: string; onChange: (event: Event) => void }> = ({
  children,
  onChange,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const positionRef = useRef({});

  const timeoutRef = useRef<any>(null);

  const select = (value: string) => {
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

  return (
    <SelectContext.Provider value={{ select, value }}>
      <div ref={ref}>
        <div
          onClick={(e) => {
            //@ts-ignore
            positionRef.current = e.target.getBoundingClientRect();
            setOpen(true);
          }}
        >
          {!open && value}
        </div>
        <Dialog open={open} style={dialogStyle}>
          {children}
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

const Option: FC<{ value: string }> = ({ value, children }) => {
  const { select, value: v } = useSelectContext();

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
      display: v === value ? "block" : "none",
    },
    [v, value]
  );

  return (
    <Platter type={"regular"} style={platterStyle}>
      <StyledChildren>
        <Flex
          align={"center"}
          justify={"between"}
          onClick={() => select(value)}
          style={flexStyle}
        >
          <span className={"option"}>{children}</span>
          <span style={checkmarkStyle}>
            <Checkmark fill={"#0984ffff"} height={"1.5rem"} width={"1.5rem"} />
          </span>
        </Flex>
      </StyledChildren>
    </Platter>
  );
};

export { Select, Option };
