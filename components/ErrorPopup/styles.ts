import styled from "styled-components";
import { ErrorProps } from "./types";

export const StyledDiv = styled.div<ErrorProps>`
    width: 100%;
    padding: 20px;
    background-color: #f44336;
    color: white;
    border-radius: 10px;
    opacity: 80%;
`;