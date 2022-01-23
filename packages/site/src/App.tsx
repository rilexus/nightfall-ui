import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { ResetCssStyled } from "../ResetCss.styled";
import { ButtonsPage, Home, TypographyPage } from "./pages";
import { FocusProvider } from "./components/focusable";
import { ThemeProvider, GlobalCss } from "@nightfall-ui/theme";
import { FormsPage } from "./pages/forms";
import { Li, Ul } from "./components";

const Page: FC = ({ children }) => {
  return <div>{children}</div>;
};

const Providers: FC = ({ children }) => {
  return (
    <FocusProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FocusProvider>
  );
};

const App = () => {
  return (
    <Providers>
      <ResetCssStyled />
      <GlobalCss />
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
                <Link to={"/Fields"}>Fields</Link>
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
        </Ul>
      </nav>
      <div
        style={{
          position: "relative",
        }}
      >
        <Page>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/buttons"} element={<ButtonsPage />} />
            <Route path={"/fields"} element={<FormsPage />} />
            <Route path={"/typography"} element={<TypographyPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Page>
      </div>
    </Providers>
  );
};

export { App };
