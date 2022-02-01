export interface LineChartProps extends React.HTMLAttributes<HTMLInputElement> {
  title: string;
  data: {[key: string]: number | string}[];
  height:  number;
  flexure: number;
}