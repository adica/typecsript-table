import * as React from 'react';
import './search-box.component.css';

interface SearchBoxProps {
    placeholder?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = React.memo(
    ({placeholder = '', handleChange}) =>
        (
            <input
                className="search-box"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
                onClick={e => e.stopPropagation()}
            />
        )
);

export {SearchBox};
