import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC, useEffect, useRef } from "react";
import { ButtonsPage, DataDisplayPage, Home, TypographyPage } from "./pages";
import { FocusProvider } from "./components/focusable";
import { ThemeProvider } from "@nightfall-ui/theme";
import { FormsPage } from "./pages/forms";
import { Li, Ul } from "./components";
import { DialogPage } from "./pages/dialog";
import { DialogProvider } from "@nightfall-ui/dialog";
import { GridPage } from "./pages/grid";

const Page: FC = ({ children }) => {
  return <div>{children}</div>;
};

const Providers: FC = ({ children }) => {
  return (
    <FocusProvider>
      <ThemeProvider>
        <DialogProvider>{children}</DialogProvider>
      </ThemeProvider>
    </FocusProvider>
  );
};

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line
    // @ts-ignore
    // ref.current?.requestFullscreen();
  }, [ref]);
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
            <Link to={"/data-display"}>Data Display</Link>
          </li>
          <li>
            <h2>Grid</h2>
            <Link to={"/grid"}>Grid</Link>
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
          <div
            ref={ref}
            style={{
              // position: "absolute",
              // left: 0,
              // top: 0,
              // margin: "auto",
              // backgroundColor: "white",
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
            <Route path={"/dialog"} element={<DialogPage />} />
            <Route path={"/data-display"} element={<DataDisplayPage />} />
            <Route path={"/typography"} element={<TypographyPage />} />
            <Route path={"/grid"} element={<GridPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Page>
      </div>
    </Providers>
  );
};

export { App };
