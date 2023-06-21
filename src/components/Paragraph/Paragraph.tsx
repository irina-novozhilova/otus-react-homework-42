import React from 'react';

interface ParagraphProps {
    text: string;
}

export const Paragraph = ({...props}: ParagraphProps) => {
    return (
        <p>
            {props.text}
        </p>
    );
};
