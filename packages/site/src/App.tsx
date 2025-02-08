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
  BackgroundPage,
} from "./pages";
import { FormsPage } from "./pages/forms";
import { DialogPage } from "./pages/dialog";
import { FlowPage } from "./pages/flow";
import ScrollInertiaPage from "./pages/Scroll-Inertia-Page/ScrollInertiaPage";
import { CardPage } from "./pages/surfaces/pages";
import { PlatterPage } from "./pages/surfaces/pages";
import { PlatterCardPage } from "./pages/surfaces/pages";
import { FocusProvider } from "./components/focusable";
import { Li, Ul } from "./components";
import {
  DialogBackgroundTransition,
  DialogProvider,
  Padding,
} from "@nightfall-ui/components";
import { Flex } from "@nightfall-ui/components";
import { Toggle } from "@nightfall-ui/components";
import { ThemeProvider } from "@nightfall-ui/css";
import { useColorSchema } from "./hooks/useColorSchema/useColorSchema";
import { Callout } from "@nightfall-ui/typography";

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
    path: "/surfaces/card",
    Element: CardPage,
  },
  {
    path: "/surfaces/platter-card",
    Element: PlatterCardPage,
  },
  {
    path: "/surfaces/platter",
    Element: PlatterPage,
  },

  {
    path: "/background",
    Element: BackgroundPage,
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

const ListTitle: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Callout type={"primary"} weight={"bold"}>
      {children}
    </Callout>
  );
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
                <Link to={"/"}>
                  <ListTitle>Home</ListTitle>
                </Link>
              </div>
            </Li>
            <Li>
              <ListTitle>Inputs</ListTitle>
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
              <h2>
                <ListTitle>Typography</ListTitle>
              </h2>
              <Ul>
                <Li>
                  <Link to={"/typography"}>Typography</Link>
                </Li>
              </Ul>
            </li>
            <Li>
              <ListTitle>Feedback</ListTitle>
              <Ul>
                <Li>
                  <Link to={"/dialog"}>Dialog</Link>
                </Li>
              </Ul>
            </Li>
            <li>
              <ListTitle>Data Display</ListTitle>
              <Ul>
                <Li>
                  <Link to={"/data-display"}>Data Display</Link>
                </Li>
              </Ul>
            </li>
            <li>
              <ListTitle>Layout</ListTitle>
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
              <ListTitle>Behaviour</ListTitle>
              <Ul>
                <Li>
                  <Link to={"/scroll-inertia"}>Scroll Inertia</Link>
                </Li>
              </Ul>
            </li>

            <li>
              <ListTitle>Surfaces</ListTitle>
              <Ul>
                <Li>
                  <Link to={"/surfaces/platter"}>Platter</Link>
                </Li>
                <Li>
                  <Link to={"/surfaces/card"}>Card</Link>
                </Li>
                <Li>
                  <Link to={"/surfaces/platter-card"}>Platter Card</Link>
                </Li>
              </Ul>
            </li>

            <Li>
              <ListTitle>Background</ListTitle>
              <Ul>
                <Li>
                  <Link to={"/background"}>Background</Link>
                </Li>
              </Ul>
            </Li>
          </Ul>
        </nav>
        <div>
          <header
            style={{
              position: "fixed",
              width: "100vw",
              top: 0,
              height: "3rem",
              zIndex: 1000,
            }}
          >
            <Padding value={"5px 0 5px 0"}>
              <Flex justify={"end"}>
                <ColorSchemaToggle />
              </Flex>
            </Padding>
          </header>
          <Page>
            <Padding value={"0 0 0 0"}>
              <Routes>
                {routes.map(({ path, Element }) => {
                  return <Route key={path} path={path} element={<Element />} />;
                })}
              </Routes>
            </Padding>
          </Page>
        </div>
      </Providers>
    </div>
  );
};

export { App };
