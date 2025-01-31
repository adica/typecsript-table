import * as React from "react";
import {BodyText} from "../text";
import {TableHead} from "./table-head.component";
import {TableBody} from "./table-body.component";
import {TableRow} from "./table-row.component";
import {TableCell} from "./table-cell.component";

interface TableProps {
    hasError?: boolean;
    isLoading?: boolean;
    items: any[];
    head: React.ReactNode;
    rowRenderer: ({row}: { row: any }) => React.ReactNode;
}

const Table: React.FC<TableProps> = React.memo(
    ({hasError = false, isLoading = false, items, head, rowRenderer}) => {
        const RenderBody = ({items}: { items: any[] }) => {
            if (isLoading) {
                return (
                    <TableRow>
                        <TableCell>
                            <BodyText>Loading...</BodyText>
                        </TableCell>
                    </TableRow>
                );
            }
            if (hasError) {
                return (
                    <TableRow>
                        <TableCell>
                            <BodyText>Something went wrong</BodyText>
                        </TableCell>
                    </TableRow>
                );
            }

            if (!items || !items.length) {
                return (
                    <TableRow>
                        <TableCell>
                            <BodyText>No Items</BodyText>
                        </TableCell>
                    </TableRow>
                );
            }

            return items.map((item) => rowRenderer({row: item}));
        };

        return (
            <table>
                <TableHead>
                    {head}
                </TableHead>
                <TableBody>
                    {RenderBody({items})}
                </TableBody>
            </table>
        );
    });

export {Table};
