import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0;
        box-sizing: border-box;
    }
    button {
        outline: none;
        background: none;
        border: none;
    }
    body {
       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    }
    textarea {

            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
             "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
             sans-serif;

    }
    h1, h2, h3, h4, p, label {
        color: #3D4255;
    }
`;
