import * as React from 'react';
import {TableRow} from "./table-row.component";
import './table-head.component.css';

interface TableHeadProps {
    children: React.ReactNode;
}

const TableHead: React.FC<TableHeadProps> = React.memo(
    ({children}) =>
        (
            <thead className="table-head">
            <TableRow>
                {children}
            </TableRow>
            </thead>
        )
);

export {TableHead};
