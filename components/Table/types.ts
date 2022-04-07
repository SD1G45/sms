export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    headers: string[],
    data: string[][],
    tableType: string,
}