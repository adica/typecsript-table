import * as React from 'react';
import './table-cell.component.css';

interface TableCellProps {
    children: React.ReactNode;
}

const TableCell: React.FC<TableCellProps> = React.memo(
    ({children}) =>
        (
            <td className="table-cell">
                {children}
            </td>
        )
);

export {TableCell};
