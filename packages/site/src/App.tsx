import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import {
  ButtonsPage,
  DataDisplayPage,
  Home,
  MediaCenter,
  SelectPage,
  TypographyPage,
} from "./pages";
import { FocusProvider } from "./components/focusable";
import { ThemeProvider } from "@nightfall-ui/theme";
import { Li, Ul } from "./components";
import {
  DialogBackgroundTransition,
  DialogProvider,
} from "@nightfall-ui/dialog";
import { FormsPage } from "./pages/forms";
import { DialogPage } from "./pages/dialog";
import { GridPage } from "./pages/grid";
import { HookEvent } from "./HookEvent";

const Page: FC = ({ children }) => {
  return <div>{children}</div>;
};

const Providers: FC = ({ children }) => {
  return (
    <FocusProvider>
      <ThemeProvider>
        <DialogProvider>
          <DialogBackgroundTransition
            zoom={{ from: 1, to: 0.99, timeout: 400 }}
            blur={{ from: "0px", to: "7px", timeout: 400 }}
          >
            {children}
          </DialogBackgroundTransition>
        </DialogProvider>
      </ThemeProvider>
    </FocusProvider>
  );
};

const App = () => {
  return (
    <Providers>
      <nav>
        <Ul>
          <Li>
            <div
              style={{
                marginBottom: "1rem",
              }}
            >
              <Link to={"/"}>Home</Link>
            </div>
          </Li>
          <Li>
            <h2>Inputs</h2>
            <Ul>
              <Li>
                <Link to={"/buttons"}>Buttons</Link>
              </Li>
              <Li>
                <Link to={"/inputs"}>Fields</Link>
              </Li>
              <Li>
                <Link to={"/select"}>Select</Link>
              </Li>
            </Ul>
          </Li>
          <li>
            <h2>Typography</h2>
            <Ul>
              <Li>
                <Link to={"/typography"}>Typography</Link>
              </Li>
            </Ul>
          </li>
          <Li>
            <h2>Feedback</h2>
            <Ul>
              <Li>
                <Link to={"/dialog"}>Dialog</Link>
              </Li>
            </Ul>
          </Li>
          <li>
            <h2>Data Display</h2>
            <Ul>
              <Li>
                <Link to={"/data-display"}>Data Display</Link>
              </Li>
            </Ul>
          </li>
          <li>
            <h2>Layout</h2>
            <Ul>
              <Li>
                <Link to={"/grid"}>Grid</Link>
              </Li>
              <Li>
                <Link to={"/media-center"}>Media Center</Link>
              </Li>
            </Ul>
          </li>
        </Ul>
      </nav>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Page>
          <HookEvent />
          <div
            style={{
              color: "black",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            deleniti ducimus, id iusto maxime nam natus necessitatibus
            perferendis ratione totam. Impedit magnam magni totam. Alias
            asperiores fugiat laudantium repellat saepe!
          </div>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/buttons"} element={<ButtonsPage />} />
            <Route path={"/inputs"} element={<FormsPage />} />
            <Route path={"/select"} element={<SelectPage />} />
            <Route path={"/dialog"} element={<DialogPage />} />
            <Route path={"/data-display"} element={<DataDisplayPage />} />
            <Route path={"/typography"} element={<TypographyPage />} />
            <Route path={"/grid"} element={<GridPage />} />
            <Route path={"/media-center"} element={<MediaCenter />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Page>
      </div>
    </Providers>
  );
};

export { App };
