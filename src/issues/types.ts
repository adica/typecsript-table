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

export type {Issue, IssuesTableProps, SortingOrder};
