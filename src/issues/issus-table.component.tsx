import * as React from "react";
import {Table, TableRow, TableCell, TableHeadCell, SearchBox, HeadingText, BodyText} from "../core";
import {IssuesTableProps} from "./types.ts";
import {useIssues} from "./use-issues.ts";

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
                <>
                    <TableHeadCell
                        isSortedBy={sortOrder.field === 'id'}
                        sortedDirection={sortOrder.direction}
                        onClick={() => onSort('id')}
                    >
                        <HeadingText>Num</HeadingText>
                    </TableHeadCell>
                    <TableHeadCell
                        isSortedBy={sortOrder.field === 'issueType'}
                        sortedDirection={sortOrder.direction}
                        onClick={() => onSort('issueType')}
                    >
                        <HeadingText>Issue Type</HeadingText>
                    </TableHeadCell>
                    <TableHeadCell
                        isSortedBy={sortOrder.field === 'severity'}
                        sortedDirection={sortOrder.direction}
                        onClick={() => onSort('severity')}
                    >
                        <HeadingText>Severity</HeadingText>
                    </TableHeadCell>
                    <TableHeadCell
                        isSortedBy={sortOrder.field === 'Component'}
                        sortedDirection={sortOrder.direction}
                        onClick={() => onSort('Component')}
                    >
                        <HeadingText>Component</HeadingText>
                    </TableHeadCell>
                    <TableHeadCell
                        isSortedBy={sortOrder.field === 'selector'}
                        sortedDirection={sortOrder.direction}
                        onClick={() => onSort('selector')}
                    >
                        <HeadingText>Selector</HeadingText>
                        <SearchBox
                            placeholder="Filter by selector"
                            handleChange={(e) => onFilterSelector(e, 'selector')}
                        />
                    </TableHeadCell>
                    <TableHeadCell
                        isSortedBy={sortOrder.field === 'url'}
                        sortedDirection={sortOrder.direction}
                        onClick={() => onSort('url')}
                    >
                        <HeadingText>URL</HeadingText>
                        <SearchBox
                            placeholder="Filter by URL"
                            handleChange={(e) => onFilterSelector(e, 'url')}
                        />
                    </TableHeadCell>
                </>
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
