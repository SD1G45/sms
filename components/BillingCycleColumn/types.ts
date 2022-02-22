export interface BillingCycleColumnProps extends React.HTMLAttributes<HTMLInputElement> {
  spentAmount: string;
  salesAmount: string;
  billingCycle: string;
  billingCycleRoute: string;
}