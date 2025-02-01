import * as React from 'react';
import classNames from "classnames";
import {COLORS} from './const';
import './text.component.css';

interface TextProps {
    children: React.ReactNode;
    isUnderline?: boolean;
    isTrimmed?: boolean;
    color?: string;
}

const Text: React.FC<TextProps> = React.memo(
    ({
         children,
         isUnderline = false,
         isTrimmed = false,
         color = COLORS.CONTENT_1
     }) => (
        <span
            className={classNames('text', color, {
                ['text-underline']: isUnderline,
                ['text-trimmed']: isTrimmed
            })}>
            {children}
        </span>
    )
);

export {Text};
