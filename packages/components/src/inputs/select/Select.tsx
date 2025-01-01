import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Dialog } from "../../dialog";
import { Checkmark, KeyboardArrowDown } from "@nightfall-ui/icons";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { Flex } from "../../layout";
import { Platter } from "../../surfaces";
import styled from "styled-components";
import { filledInputBackgroundColorCss, inputBorderRadius } from "../css";

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

const StyledSelect = styled.div`
  display: inline-block;
  padding: 0.5rem 0.4rem 0.5rem 1rem;
  cursor: pointer;
  ${inputBorderRadius};
  ${filledInputBackgroundColorCss};
`;

const StyledOptionText = styled.span`
  max-width: 270px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Select: FunctionComponent<
  PropsWithChildren<{
    value: string | number;
    onChange: (event: Event) => void;
    id?: string;
  }>
> = ({ id, children, onChange, value }) => {
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
      <StyledSelect
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <StyledOptionText
            style={{
              marginRight: "0.5rem",
            }}
          >
            {child}
          </StyledOptionText>
          <div>
            <KeyboardArrowDown />
          </div>
        </div>
        <Dialog open={open} style={dialogStyle}>
          <ul role={"listbox"}>{children}</ul>
        </Dialog>
      </StyledSelect>
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

const Option: FunctionComponent<
  PropsWithChildren<{ value: string | number }>
> = ({ value, children }) => {
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
            <StyledOptionText
              className={"option"}
              role={"option"}
              aria-selected={isSelected}
            >
              {children}
            </StyledOptionText>
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
