import styled, { css, DefaultTheme } from "styled-components";
import Button from "../Button";

const variantStyles = (theme: DefaultTheme, variant = "header") =>
  ({
    header: css`
      border-radius: 30px;
      font-size: 0.8rem;
      padding: 5px;
      margin-right: 10px;
    `,
  }[variant]);

export const VariantButton = styled(Button)<{ variant?: string }>`
  ${({ theme, variant }) => variantStyles(theme, variant)}
`;
