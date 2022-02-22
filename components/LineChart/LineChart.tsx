import React from "react";
import {
  LineChart as Chart
} from 'styled-chart'
import { ChartWrapper, StyledHint, StyledPath, StyledTitle, StyledTooltip } from "./styles";
import { LineChartProps } from "./types";

const LineChart: React.FC<LineChartProps> = ({
  title,
  data,
  height,
  flexure
}) => {

  const yAxis = {
    grid: true,
    ticksNum: 0
  };

  const xAxis = {
    grid: true,
    key: "date",
    step: 24,
  };

  const config = {
    "coupons" : {
      label: "Coupons",
      isFilled: false,
      component: (
        <StyledPath 
          strokeColor="#0070f3"
          strokeWidth={2}
        />
      ),
    },
    "customers" : {
      label: "Customers",
      isFilled: false,
      component: (
        <StyledPath 
          strokeColor="#0070f3"
          strokeWidth={2}
        />
      ),
    }
  };

  const tooltip = {
    isVisible: true,
      component: (
        <StyledTooltip backgroundColor="#fff" textColor="#0070f3"/>
      ),
      hints: {
        "coupons": <StyledHint backgroundColor="#0070f3"/>,
        "customers": <StyledHint backgroundColor="#0070f3"/>,
      },
  };

  return (
    <ChartWrapper>
      <StyledTitle>{title}</StyledTitle>
      <Chart
          data={data}
          config={config}
          height={height}
          yAxis={yAxis}
          xAxis={xAxis}
          flexure={flexure}
          tooltip={tooltip}
      />
    </ChartWrapper>
  );
};

export default LineChart;
