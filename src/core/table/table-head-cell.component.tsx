import * as React from "react";
import './table-head-cell.component.css';

interface TableHeadCellProps {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>, field: string) => void;
    isSortedBy?: boolean;
    sortedDirection?: 'asc' | 'desc';
}

const TableHeadCell: React.FC<TableHeadCellProps> =
    React.memo(
        ({children, onClick, isSortedBy = false, sortedDirection = 'asc'}) => (
            <th className={`table-head-cell ${isSortedBy ? 'table-head-cell-sorted' : ''}`}>
                <div className="table-head-cell-content">
                    <button
                        type="button"
                        className="table-head-cell-sort-button"
                        onClick={(event) => onClick(event, 'fieldName')}
                    >
                        {children}
                        <span
                            className="table-head-cell-sort-icon">
                            {isSortedBy ? `${sortedDirection === 'asc' ? '▼' : '▲'}` : ''}
                        </span>
                    </button>
                </div>
            </th>
        )
    );

export {TableHeadCell};
