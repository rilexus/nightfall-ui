import { createGlobalStyle } from "styled-components";
import { color, fontFamily } from "@nightfall-ui/css";
import { linkCss } from "../link";

const GlobalCss = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root {
    font-size: 16px;
  }
  html {
    background-color: ${color("gray.7")};
    font-family: ${fontFamily("sans")};
  }
  a, p, h1, h2, h3, h4, h5, h6, code {
    
  }
  a {
    text-decoration: auto;
    &:hover {
      text-decoration: underline;
    };
    ${linkCss};
  }
  p {
	  font-size: 1.2rem;
	  line-height: 1.2;
  }
  i {
	  font-style: italic;
  }
`;

export { GlobalCss };
