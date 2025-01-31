import * as React from 'react';
import {Text} from "./text.component";
import {COLORS} from "./const";

interface HeadingTextProps {
    children: React.ReactNode;
}

const HeadingText: React.FC<HeadingTextProps> = React.memo(
    ({children}) =>
        (
            <Text color={COLORS.WHITE}>
                {children}
            </Text>
        )
);

export {HeadingText};
