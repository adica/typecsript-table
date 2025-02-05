import * as React from "react";
import classNames from "classnames";
import styles from './table-head-cell.component.module.css';

interface TableHeadCellProps {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>, field: string) => void;
    isSortedBy?: boolean;
    sortedDirection?: 'asc' | 'desc';
}

const TableHeadCell: React.FC<TableHeadCellProps> =
    React.memo(
        ({children, onClick, isSortedBy = false, sortedDirection = 'asc'}) => {
            return (
                <th className={classNames(styles.cell, {
                    [styles["cell-sorted"]]: isSortedBy
                })}>
                    <div className={styles.cellContent}>
                        <button
                            type="button"
                            //className={styles.cellButton}
                            className={styles["cell-button"]}
                            onClick={(event) => onClick(event, 'fieldName')}
                        >
                            {children}
                            <span
                                className={styles.cellSortIcon}>
                            {isSortedBy ? `${sortedDirection === 'asc' ? '▼' : '▲'}` : ''}
                        </span>
                        </button>
                    </div>
                </th>
            )
        }
    );

export {TableHeadCell};
