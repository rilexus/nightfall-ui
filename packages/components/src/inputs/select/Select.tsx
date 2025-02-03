import React, {
  Children,
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from "react";
import { Dialog } from "../../dialog";
import { Checkmark, KeyboardArrowDown } from "@nightfall-ui/icons";
import { useCSSProperties, useRect, useToggle } from "@nightfall-ui/hooks";
import { Flex } from "../../layout";
import { Platter } from "../../surfaces";
import styled from "styled-components";
import { filledInputBackgroundColorCss, inputBorderRadius } from "../css";
import { TransitionGroup } from "react-transitions-library";
import { OptionMountTransition } from "./components";
import { mergeRefs } from "@nightfall-ui/utils";

type ContextType = {
  select: (value: string | number) => void;
  value: string | number;
} | null;

const SelectContext = createContext<ContextType>({
  select: (value: string | number) => {},
  value: "",
});

const useSelectContext = (): ContextType => useContext(SelectContext);

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
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type OptionProps = { value: string | number };

const Option: FunctionComponent<PropsWithChildren<OptionProps>> = ({
  value,
  children,
}) => {
  //@ts-ignore
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
    <SelectContext.Provider value={null}>
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
    </SelectContext.Provider>
  );
};

type SelectProps = {
  value: string | number;
  onChange: (event: Event) => void;
  id?: string;
};

interface SelectComponent
  extends FunctionComponent<PropsWithChildren<SelectProps>> {
  Option: FunctionComponent<PropsWithChildren<OptionProps>>;
}

const Select: SelectComponent = ({ id, children, onChange, value }) => {
  const [isOpen, , set] = useToggle(false);
  const [rect, rectRef] = useRect<HTMLDivElement>();

  const close = useCallback(() => set(false), []);
  const open = useCallback(() => set(true), []);

  const select = useCallback(
    (value: string | number) => {
      onChange({ target: { value } });
      close();
    },
    [onChange]
  );

  const dialogStyle = useCSSProperties(
    {
      display: "block",
      top: `${rect?.top}px`,
      left: `${rect?.left}px`,
      position: "absolute",
      height: undefined,
    },
    [isOpen, rect]
  );
  const child = React.Children.toArray(children).filter(
    ({ props }: any) => value === props.value
    //@ts-ignore
  )[0]?.props?.children;

  const contextValue = useMemo(() => ({ select, value }), [select, value]);

  return (
    <SelectContext.Provider value={contextValue}>
      <StyledSelect
        aria-expanded={isOpen}
        aria-labelledby={id}
        aria-haspopup={"listbox"}
      >
        <Flex justify={"between"} align={"center"} ref={rectRef} onClick={open}>
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
        </Flex>
        <Dialog open={isOpen} style={dialogStyle} onOutsideClick={close}>
          <ul role={"listbox"}>
            <TransitionGroup>
              {Children.map(children, (child, index) => {
                return (
                  <OptionMountTransition
                    delay={40 * index}
                    //@ts-ignore
                    key={child.props.value}
                  >
                    {/* child: Option */}
                    {child}
                  </OptionMountTransition>
                );
              })}
            </TransitionGroup>
          </ul>
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

Select.Option = Option;

export { Select };
