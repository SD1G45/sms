import styled from "styled-components";
import { Path, TooltipWrapper, HintPoint, TooltipLabel, TooltipValue, TooltipXAxisValue } from "styled-chart";

export const StyledPath = styled(Path)
    <{strokeColor: string,
      strokeWidth?: number,
      fillColor?: string,
    }>`
    && {
      ${({ strokeColor, strokeWidth, fillColor }) =>`
        stroke: ${strokeColor} !important;
        stroke-width: ${strokeWidth ? strokeWidth : 2}px;
        fill: ${fillColor ? fillColor : 'transparent'};
      `}
    }
  `

  export const StyledHint = styled(HintPoint)<{backgroundColor?: string, textColor?: string}>`
    && {
      ${({ backgroundColor }) => `
        background-color: ${backgroundColor};
      `}
    }
  `

  export const StyledTooltip = styled(TooltipWrapper)
  <{backgroundColor?: string,
    textColor?: string,
  }>`
    && {
      ${({ backgroundColor, textColor }) => `
        ${backgroundColor ? `background: ${backgroundColor}` : ``};
        ${textColor ? `color: ${textColor}` : ``};
      `}
      ${TooltipLabel} {
        font-style: italic;
      }
      ${TooltipValue} {
        font-style: italic;
      }
      ${TooltipXAxisValue} {
        opacity: 0.8;
      }
      ${StyledHint} {
        && {
          padding-left: 4px;
          padding-right: 4px;
          border-radius: 20px;
          height: 3px;
        }
      }
    }
  `

  export const StyledTitle = styled.text`
    text-align: left;
    margin-bottom: -1em;
  `;

  export const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10%;
  `;