import * as React from 'react';
import './table-row.component.css';

interface TableRowProps {
    children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = React.memo(
    ({children}) =>
        (
            <tr className="table-row">
                {children}
            </tr>
        )
);

export {TableRow};
