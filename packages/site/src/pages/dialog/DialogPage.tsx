import React, { useCallback, useState } from "react";
import { Dialog } from "@nightfall-ui/dialog";
import { Card } from "@nightfall-ui/surfaces";
import { Button } from "@nightfall-ui/buttons";
import { Input } from "@nightfall-ui/inputs/dist/src";

const useToggle = (initialValue = true): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle];
};

const DialogPage = () => {
  const [open, toggle] = useToggle(false);

  return (
    <div>
      <Dialog
        open={open}
        onClose={toggle}
        element={
          <Card>
            <Button
              size={"small"}
              variant={"filled"}
              shape={"round"}
              onClick={toggle}
            >
              Ok
            </Button>
          </Card>
        }
      >
        <Card>
          <Button
            variant={"filled"}
            shape={"round"}
            size={"small"}
            // onClick={toggle}
          >
            Click
          </Button>
          <Input
            variant={"filled"}
            shape={"round"}
            size={"medium"}
            placeholder={"Placeholder"}
          />
        </Card>
      </Dialog>
    </div>
  );
};

export { DialogPage };
