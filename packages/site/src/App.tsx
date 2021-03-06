import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC, useCallback } from "react";
import {
  ButtonsPage,
  DataDisplayPage,
  Home,
  MediaCenter,
  SelectPage,
  TogglePage,
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
import ScrollInertiaPage from "./pages/Scroll-Inertia-Page/ScrollInertiaPage";
import { Flex } from "@nightfall-ui/layout";
import { Toggle } from "@nightfall-ui/toggles";
import { createState, localStorageEnhancer } from "./libs";

const useColorSchema = createState<"light" | "dark">(
  "light",
  localStorageEnhancer("colorSchema")
);

const Page: FC = ({ children }) => {
  return <div>{children}</div>;
};

const Providers: FC = ({ children }) => {
  const [schema] = useColorSchema();
  console.log({ schema });

  return (
    <FocusProvider>
      <ThemeProvider schema={schema}>
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

const toggleSchema = (schema: "light" | "dark") => {
  if (schema === "light") return "dark";
  return "light";
};
const ColorSchemaToggle = () => {
  const [schema, setSchema] = useColorSchema();

  const toggle = useCallback(() => {
    setSchema(toggleSchema);
  }, [setSchema]);

  return <Toggle onChange={toggle} checked={schema === "light"} />;
};

const App = () => {
  return (
    <Providers>
      <nav
        style={{
          position: "fixed",
          left: 0,
          top: "3rem",
          height: "100vh",
        }}
      >
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
                <Link to={"/toggle"}>Toggle</Link>
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
                <Link to={"/layout-grid"}>Grid</Link>
              </Li>
              <Li>
                <Link to={"/layout-center"}>Center</Link>
              </Li>
            </Ul>
          </li>
          <li>
            <h2>Behaviour</h2>
            <Ul>
              <Li>
                <Link to={"/scroll-inertia"}>Scroll Inertia</Link>
              </Li>
            </Ul>
          </li>
        </Ul>
      </nav>
      <div>
        <header
          style={{
            position: "fixed",
            width: "100vw",
            top: 0,
            height: "3rem",
          }}
        >
          <Flex justify={"end"}>
            <ColorSchemaToggle />
          </Flex>
        </header>
        <Page>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/buttons"} element={<ButtonsPage />} />
            <Route path={"/toggle"} element={<TogglePage />} />
            <Route path={"/inputs"} element={<FormsPage />} />
            <Route path={"/select"} element={<SelectPage />} />
            <Route path={"/dialog"} element={<DialogPage />} />
            <Route path={"/data-display"} element={<DataDisplayPage />} />
            <Route path={"/typography"} element={<TypographyPage />} />
            <Route path={"/layout-grid"} element={<GridPage />} />
            <Route path={"/layout-center"} element={<MediaCenter />} />
            <Route path={"/scroll-inertia"} element={<ScrollInertiaPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Page>
      </div>
    </Providers>
  );
};

export { App };
