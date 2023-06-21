import React from 'react';

interface ImageProps {
    src: string;
    alt?: string;
    title?: string;
}

export const Image = ({...props}: ImageProps) => {
    return (
        <img data-testid='image-test' alt={props.alt} src={props.src} title={props.title} />
    );
};
