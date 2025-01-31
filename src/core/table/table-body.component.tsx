import * as React from 'react';

interface TableBodyProps {
    children: React.ReactNode;
}

const TableBody: React.FC<TableBodyProps> = React.memo(
    ({children}) =>
        (
            <tbody>
            {children}
            </tbody>
        )
);

export {TableBody};
