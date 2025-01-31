import * as React from 'react';
import issuesMockData from './../data/issues-mock-data.json';
import {IssuesTable} from "./issus-table.component";

const App: React.FC = React.memo(() =>
    (
        <div>
            <h1>TypeScript Table Project</h1>
            <IssuesTable issues={issuesMockData} />
        </div>
    )
);

export default App;
