import React from "react";
import "./Image.css";

interface ImageProps {
  src: string;
  alt?: string;
  title?: string;
}

export const Image = ({ ...props }: ImageProps) => (
  <img
    data-testid="image-test"
    alt={props.alt}
    src={props.src}
    title={props.title}
  />
);
