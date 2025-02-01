import * as React from "react";
import {SortingOrder, Issue} from "./types.ts";

function useIssues({issues}: { issues: Issue[] }) {
    // handle filtering
    const [filters, setFilters] = React.useState<Partial<Record<keyof Issue, string>>>({});
    const onFilterSelector = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>, field: keyof Issue) => {
            const {value} = event.target;
            setFilters((prevFilters) => ({
                ...prevFilters,
                [field]: value,
            }));
        },
        []
    );

    const filteredItems = React.useMemo(() => {
        return issues.filter((item) => {
            return Object.entries(filters).every(([field, filterValue]) => {
                if (!filterValue) return true;
                const itemFieldValue = item[field as keyof Issue];
                return String(itemFieldValue).toLowerCase().includes(filterValue.toLowerCase());
            });
        });
    }, [issues, filters]);

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

    return {
        sortOrder,
        onSort,
        onFilterSelector,
        sortedAndFilteredItems
    };
}

export {useIssues};
