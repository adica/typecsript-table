import * as React from 'react';
import issuesMockData from './../data/issues-mock-data.json';
import {IssuesTable} from "./issues/issus-table.component.tsx";

const App: React.FC = React.memo(() =>
    (
        <div data-color-theme="default">
            <h1>TypeScript Table Project</h1>
            <IssuesTable issues={issuesMockData} />
        </div>
    )
);

export default App;
