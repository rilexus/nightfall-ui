import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
} from "react";
import {
  Home,
  ButtonsPage,
  DataDisplayPage,
  MediaCenter,
  SelectPage,
  TogglePage,
  TypographyPage,
  GridPage,
} from "./pages";
import { FormsPage } from "./pages/forms";
import { DialogPage } from "./pages/dialog";
import { FlowPage } from "./pages/flow";
import ScrollInertiaPage from "./pages/Scroll-Inertia-Page/ScrollInertiaPage";
import SurfacesPage from "./pages/surfaces";
import { FocusProvider } from "./components/focusable";
import { Li, Ul } from "./components";
import {
  DialogBackgroundTransition,
  DialogProvider,
} from "@nightfall-ui/components";
import { Flex } from "@nightfall-ui/components";
import { Toggle } from "@nightfall-ui/components";
import { createState, localStorageEnhancer } from "./libs";
import { ThemeProvider } from "@nightfall-ui/css";

const useColorSchema = createState<"light" | "dark">(
  "light",
  localStorageEnhancer("colorSchema")
);

const Page: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

const Providers: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [schema] = useColorSchema();

  return (
    <FocusProvider>
      <ThemeProvider schema={schema}>
        <DialogProvider>
          <DialogBackgroundTransition
            zoom={{ from: 1, to: 0.99, timeout: 400 }}
            blur={{ from: "0px", to: "5px", timeout: 400 }}
          >
            {children}
          </DialogBackgroundTransition>
        </DialogProvider>
      </ThemeProvider>
    </FocusProvider>
  );
};

const routes: any[] = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "/buttons",
    Element: ButtonsPage,
  },
  {
    path: "/toggle",
    Element: TogglePage,
  },
  {
    path: "/fields",
    Element: FormsPage,
  },
  {
    path: "/select",
    Element: SelectPage,
  },
  {
    path: "/dialog",
    Element: DialogPage,
  },
  {
    path: "/data-display",
    Element: DataDisplayPage,
  },
  {
    path: "/typography",
    Element: TypographyPage,
  },
  {
    path: "/layout-flow",
    Element: FlowPage,
  },
  {
    path: "/layout-grid",
    Element: GridPage,
  },
  {
    path: "/scroll-inertia",
    Element: ScrollInertiaPage,
  },
  {
    path: "/layout-center",
    Element: MediaCenter,
  },
  {
    path: "/surfaces",
    Element: SurfacesPage,
  },
  {
    path: "*",
    Element: (...props: any) => <Navigate {...props} to={"/"} />,
  },
];

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
    <div>
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
                  <Link to={"/fields"}>Fields</Link>
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
                  <Link to={"/layout-flow"}>Flow</Link>
                </Li>
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
            <li>
              <h2>Surfaces</h2>
              <Ul>
                <Li>
                  <Link to={"/surfaces"}>Surfaces</Link>
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
              {routes.map(({ path, Element }) => {
                return <Route key={path} path={path} element={<Element />} />;
              })}
            </Routes>
          </Page>
        </div>
      </Providers>
    </div>
  );
};

export { App };
