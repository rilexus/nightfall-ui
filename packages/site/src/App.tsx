import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { ResetCssStyled } from "../ResetCss.styled";
import { ButtonsPage, Home, TypographyPage } from "./pages";
import { FocusProvider } from "./components/focusable";
import { ThemeProvider, GlobalCss } from "@nightfall-ui/theme";
import { FormsPage } from "./pages/forms";

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
        <ul>
          <li>
            <div
              style={{
                marginBottom: "1rem",
              }}
            >
              <Link to={"/"}>Home</Link>
            </div>
          </li>
          <li>
            <Link to={"/buttons"}>Buttons</Link>
          </li>
          <li>
            <Link to={"/forms"}>Forms</Link>
          </li>
          <li>
            <Link to={"/typography"}>Typography</Link>
          </li>
        </ul>
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
            <Route path={"/forms"} element={<FormsPage />} />
            <Route path={"/typography"} element={<TypographyPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Page>
      </div>
    </Providers>
  );
};

export { App };
