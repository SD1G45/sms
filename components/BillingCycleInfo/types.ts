export interface BillingCycleInfoProps extends React.HTMLAttributes<HTMLInputElement> {
  title: string;
  amount: string;
  subtitle: string;
  viewLinkText?: string;
  linkRoute?: string;
}