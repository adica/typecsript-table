import * as React from "react";
import {Issue, SortingOrder} from "./types.ts";
import {HeadingText, SearchBox, TableHeadCell} from "../core";

interface IssuesTableHeaderProps {
    sortOrder: SortingOrder;
    onSort: (field: keyof Issue) => void;
    onFilterSelector: (event: React.ChangeEvent<HTMLInputElement>, field: keyof Issue) => void;
}

const IssuesTableHeader: React.FC<IssuesTableHeaderProps> = React.memo(({sortOrder, onSort, onFilterSelector}) => (
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
));

export {IssuesTableHeader};
