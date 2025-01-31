import * as React from 'react';
import {Text} from './text.component';
import {COLORS} from './const';

interface BodyTextProps {
    children: React.ReactNode;
    isUnderline?: boolean;
    isTrimmed?: boolean;
}

const BodyText: React.FC<BodyTextProps> = React.memo(
    ({children, isUnderline = false, isTrimmed = false}) =>
        (
            <Text color={COLORS.CONTENT_1} isUnderline={isUnderline} isTrimmed={isTrimmed}>
                {children}
            </Text>
        )
);

export {BodyText};
