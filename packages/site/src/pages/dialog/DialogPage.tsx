import React from "react";
import { Dialog } from "@nightfall-ui/dialog";
import { Card } from "@nightfall-ui/surfaces";
import { Button } from "@nightfall-ui/buttons";
import { Input } from "@nightfall-ui/inputs";
import { useToggle } from "@nightfall-ui/hooks";

const DialogPage = () => {
  const [open, toggle] = useToggle(false);

  return (
    <div>
      <Dialog
        open={open}
        element={
          <Card>
            <div>
              <div>
                <Input
                  variant={"filled"}
                  shape={"round"}
                  size={"medium"}
                  placeholder={"User Name"}
                />
              </div>

              <div>
                <Input
                  variant={"filled"}
                  shape={"round"}
                  size={"medium"}
                  placeholder={"Password"}
                />
              </div>
              <Button
                size={"small"}
                variant={"filled"}
                shape={"round"}
                onClick={() => {
                  toggle();
                }}
              >
                first off
              </Button>
            </div>
          </Card>
        }
      >
        <div>
          <Card>
            <Button
              variant={"filled"}
              shape={"round"}
              size={"small"}
              onClick={toggle}
            >
              first
            </Button>
            <Input
              variant={"filled"}
              shape={"round"}
              size={"medium"}
              placeholder={"Placeholder"}
            />
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

export { DialogPage };
