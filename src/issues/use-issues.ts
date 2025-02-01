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
        const activeFilterKeys = Object.keys(filters).filter(
            (key) => filters[key as keyof Issue]?.trim() !== ''
        ) as (keyof Issue)[];

        return issues.filter((item) => {
            if (activeFilterKeys.length === 0) return true;

            return activeFilterKeys.every((field) => {
                const filterValue = filters[field];
                if (!filterValue) return true;
                const itemFieldValue = String(item[field]).toLowerCase();
                return itemFieldValue.includes(filterValue.toLowerCase());
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
        return filteredItems.slice().sort((a, b) => {
            const {field, direction} = sortOrder;
            const aValue = a[field];
            const bValue = b[field];
            if (direction === 'asc') {
                return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
            }
            return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
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
