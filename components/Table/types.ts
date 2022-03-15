export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    headers: string[] | null,
    data: string[][],
    tableType: string,
}