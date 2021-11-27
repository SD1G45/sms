import React from "react";
import { StyledDiv } from "./styles";
import { ErrorProps } from "./types";

const ErrorPopup: React.FC<ErrorProps> = ({
    error,
    message
}) => {
    return error ? (
        <StyledDiv>
            {message}
        </StyledDiv>
    ) : <div></div>;
};

export default ErrorPopup;