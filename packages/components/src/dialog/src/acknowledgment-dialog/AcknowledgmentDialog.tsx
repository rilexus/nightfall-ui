import React, { FC, ReactNode, VFC } from "react";
import { Flex, Padding, TextCenter } from "@nightfall-ui/components";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { Dialog } from "../dialog";
import { ActionButton, EmphasizedActionButton } from "@nightfall-ui/components";
import { BodyRegular, Footnote } from "@nightfall-ui/typography";

type AlertProps = { title: string; description: string };

const Container: FC = ({ children }) => {
  const style = useCSSProperties(
    {
      maxWidth: "16.75rem",
    },
    []
  );
  return (
    <Flex direction={"column"} align={"center"} style={style}>
      {children}
    </Flex>
  );
};

const DialogText: VFC<AlertProps> = ({ title, description }) => {
  return (
    <TextCenter>
      <Padding>
        <BodyRegular type={"primary"}>{title}</BodyRegular>
        <Footnote weight={"regular"} type={"primary"}>
          {description}
        </Footnote>
      </Padding>
    </TextCenter>
  );
};

type AcknowledgmentProps = AlertProps & {
  onAcknowledge: () => void;
  label: ReactNode;
};

const Acknowledgment: VFC<AcknowledgmentProps> = ({
  title,
  description,
  onAcknowledge,
  label,
}) => {
  const style = useCSSProperties(
    {
      maxWidth: "16.75rem",
    },
    []
  );

  return (
    <Container>
      <DialogText title={title} description={description} />
      <Flex
        style={{
          width: "100%",
        }}
      >
        <ActionButton onClick={onAcknowledge} themeColor={"blue.1"}>
          {label}
        </ActionButton>
      </Flex>
    </Container>
  );
};

const PermissionDialog: VFC<{
  open: boolean;
  onConfirm: () => void;
  onDeny: () => void;
  title: string;
  description: string;
  confirmLabel: ReactNode;
  denyLabel: ReactNode;
}> = ({
  open,
  onConfirm,
  onDeny,
  title,
  description,
  confirmLabel,
  denyLabel,
}) => {
  return (
    <Dialog open={open}>
      <Container>
        <DialogText title={title} description={description} />
        <Flex
          style={{
            width: "100%",
          }}
        >
          <ActionButton onClick={onDeny} themeColor={"blue.1"}>
            {denyLabel}
          </ActionButton>
          <EmphasizedActionButton onClick={onConfirm} themeColor={"blue.1"}>
            {confirmLabel}
          </EmphasizedActionButton>
        </Flex>
      </Container>
    </Dialog>
  );
};

const AcknowledgmentDialog: VFC<{
  onAcknowledge: () => void;
  open: boolean;
  title: string;
  description: string;
  label: ReactNode;
}> = ({ open, onAcknowledge, title, description, label }) => {
  return (
    <Dialog open={open}>
      <Container>
        <Acknowledgment
          title={title}
          description={description}
          label={label}
          onAcknowledge={onAcknowledge}
        />
      </Container>
    </Dialog>
  );
};

export { AcknowledgmentDialog, DialogText, PermissionDialog };
