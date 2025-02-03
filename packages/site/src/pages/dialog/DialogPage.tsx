import React, { useRef } from "react";
import {
  AcknowledgmentDialog,
  Dialog,
  DialogText,
  PermissionDialog,
  Card,
  ActionButton,
  Button,
  Center,
  Flex,
  DialogHandlers,
} from "@nightfall-ui/components";
import { useToggle } from "@nightfall-ui/hooks";

const DialogPage = () => {
  const [open, toggle] = useToggle(false);
  const [dialogOpen, toggleDialog] = useToggle(false);

  const [permissionOpen, togglePermission] = useToggle(false);

  const dialogRef = useRef<DialogHandlers>({
    close: () => {
      // some
      return;
    },
    open: () => {
      // some
      return;
    },
  });

  return (
    <Center sm={80} md={50}>
      {/*eslint-disable-next-line  @typescript-eslint/ban-ts-comment  */}
      {/*@ts-ignore*/}
      <Dialog ref={dialogRef}>
        <Card>
          <DialogText title={"Dialog"} description={"Close by reference"} />
          <ActionButton
            onClick={() => {
              dialogRef.current?.close?.();
            }}
          >
            Close
          </ActionButton>
        </Card>
      </Dialog>

      <Dialog open={dialogOpen}>
        <div>
          <Card>
            <Flex direction={"column"}>
              <DialogText title={"Dialog"} description={"Some text"} />
              <ActionButton onClick={toggleDialog}>Close</ActionButton>
            </Flex>
          </Card>
        </div>
      </Dialog>
      <AcknowledgmentDialog
        open={open}
        title={"A Short Title Is Best"}
        description={"A message should be a short, complete sentence."}
        label={"Close"}
        onAcknowledge={toggle}
      />

      <PermissionDialog
        onConfirm={togglePermission}
        onDeny={togglePermission}
        open={permissionOpen}
        title={"A Short Title Is Best"}
        description={"A message should be a short, complete sentence."}
        confirmLabel={"Yes"}
        denyLabel={"No"}
      />

      <div>
        <Card>
          <div>
            <div>
              <label htmlFor="Acknowledgment-button">Acknowledgment</label>
            </div>
            <Button
              id={"Acknowledgment-button"}
              variant={"filled"}
              shape={"round"}
              size={"small"}
              onClick={toggleDialog}
            >
              Open Dialog
            </Button>
            <Button
              id={"Acknowledgment-button"}
              variant={"filled"}
              shape={"round"}
              size={"small"}
              onClick={toggle}
            >
              Open
            </Button>
            <div>
              <div>
                <label htmlFor="permission-button">Permission</label>
              </div>
              <Button
                id={"permission-button"}
                variant={"filled"}
                shape={"round"}
                size={"small"}
                onClick={togglePermission}
              >
                Open
              </Button>

              <Button
                id={"permission-button"}
                variant={"filled"}
                shape={"round"}
                size={"small"}
                onClick={() => {
                  dialogRef.current?.open?.();
                }}
              >
                Open by reference
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Center>
  );
};

export { DialogPage };
