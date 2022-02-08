import React from "react";
import {
  AcknowledgmentDialog,
  Dialog,
  DialogText,
  PermissionDialog,
} from "@nightfall-ui/dialog";

import { Card } from "@nightfall-ui/surfaces";
import { ActionButton, Button } from "@nightfall-ui/buttons";
import { useToggle } from "@nightfall-ui/hooks";
import { Flex } from "@nightfall-ui/layout";

const DialogPage = () => {
  const [open, toggle] = useToggle(false);
  const [dialogOpen, toggleDialog] = useToggle(false);

  const [permissionOpen, togglePermission] = useToggle(false);

  return (
    <div>
      <Dialog
        open={dialogOpen}
        element={
          <div>
            <Card>
              <Flex direction={"column"}>
                <DialogText title={"Dialog"} description={"Some text"} />
                <ActionButton onClick={toggleDialog}>Close</ActionButton>
              </Flex>
            </Card>
          </div>
        }
      />
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
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export { DialogPage };
