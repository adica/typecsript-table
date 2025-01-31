import {Table, TableRow, TableCell, TableHeadCell, SearchBox, HeadingText, BodyText} from "./core";
import * as React from "react";

interface Issue {
    id: number;
    issueType: string;
    severity: string;
    Component: string;
    selector: string;
    url: string;
}

interface SortingOrder {
    field: keyof Issue;
    direction: 'asc' | 'desc';
}

interface IssuesTableProps {
    issues: Issue[];
}

const IssuesTable: React.FC<IssuesTableProps> = ({issues}) => {
    // handle filtering
    const [filteredItems, setFilteredItems] = React.useState<Issue[]>(issues);
    const onFilterSelector = React.useCallback((event: React.ChangeEvent<HTMLInputElement>, field: keyof Issue) => {
        const {value} = event.target;
        setFilteredItems(issues.filter((issue) => {
            const fieldValue = issue[field];
            if (typeof fieldValue === 'string') {
                return fieldValue.toLowerCase().includes(value.toLowerCase());
            }
            return false;
        }));
    }, [issues]);

    // handle sorting
    const [sortOrder, setSortOrder] = React.useState<SortingOrder>({
        field: 'id',
        direction: 'asc'
    });
    const onSort = React.useCallback((field: keyof Issue) => {
        setSortOrder((prev) => {
            if (prev.field === field) {
                return {field, direction: prev.direction === 'asc' ? 'desc' : 'asc'};
            }
            return {field, direction: 'asc'};
        });
    }, []);

    // sort and filter items
    const sortedAndFilteredItems = React.useMemo(() => {
        return filteredItems.sort((a, b) => {
            if (sortOrder.direction === 'asc') {
                return a[sortOrder.field] > b[sortOrder.field] ? 1 : -1;
            }
            return a[sortOrder.field] < b[sortOrder.field] ? 1 : -1;
        });
    }, [filteredItems, sortOrder]);

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
