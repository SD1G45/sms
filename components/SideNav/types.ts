export interface SideNavProps extends React.HTMLAttributes<HTMLDivElement> {
    items?: string[];
    index?: number;
    heading: string;
};