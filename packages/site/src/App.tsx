import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { ButtonsPage, Home, TypographyPage } from "./pages";
import { FocusProvider } from "./components/focusable";
import { ThemeProvider } from "@nightfall-ui/theme";
import { FormsPage } from "./pages/forms";
import { Li, Ul } from "./components";
import { DialogPage } from "./pages/dialog";
import styled from "styled-components";

const StyledDiv = styled.div``;

const Page: FC = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
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
        </Ul>
      </nav>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Page>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/buttons"} element={<ButtonsPage />} />
            <Route path={"/inputs"} element={<FormsPage />} />
            <Route path={"/dialog"} element={<DialogPage />} />
            <Route path={"/typography"} element={<TypographyPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Page>
      </div>
    </Providers>
  );
};

export { App };
