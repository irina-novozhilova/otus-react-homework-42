import React from 'react';

interface HeaderProps {
    size: 'h1' | 'h2' | 'h3'| 'h4' | 'h5' | 'h6';
    text: string;
}

export const Header = ({...props}: HeaderProps) => {
    const Heading = props.size;
    return (
        <Heading data-testid='heading-test'>
            {props.text}
        </Heading>
    );
};
