import * as React from "react";
import {Table, TableRow, TableCell, BodyText} from "../core";
import {IssuesTableProps} from "./types.ts";
import {useIssues} from "./use-issues.ts";
import {IssuesTableHeader} from './issue-table-header.component.tsx';

const IssuesTable: React.FC<IssuesTableProps> = ({issues}) => {
    const {
        sortOrder,
        onSort,
        onFilterSelector,
        sortedAndFilteredItems
    } = useIssues({issues});

    return (
        <Table
            isLoading={false}
            hasError={false}
            items={sortedAndFilteredItems}
            head={
                <IssuesTableHeader
                    sortOrder={sortOrder}
                    onSort={onSort}
                    onFilterSelector={onFilterSelector}
                />
            }
            rowRenderer={({row}) => (
                <TableRow key={row.id}>
                    <TableCell><BodyText>{row.id}</BodyText></TableCell>
                    <TableCell><BodyText isTrimmed>{row.issueType}</BodyText></TableCell>
                    <TableCell><BodyText>{row.severity}</BodyText></TableCell>
                    <TableCell><BodyText>{row.Component}</BodyText></TableCell>
                    <TableCell><BodyText isTrimmed>{row.selector}</BodyText></TableCell>
                    <TableCell><BodyText isUnderline isTrimmed>{row.url}</BodyText></TableCell>
                </TableRow>
            )}
        />
    );
}

export {IssuesTable};
