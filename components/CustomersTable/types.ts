import React from "react";

export interface CustomersTableProps
  extends React.HTMLAttributes<HTMLTableElement> {
      data: string[][],
      ids: string[],
      view: boolean
  }
