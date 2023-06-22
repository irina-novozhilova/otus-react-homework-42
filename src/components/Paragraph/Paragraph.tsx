import React from "react";

interface ParagraphProps {
  text: string;
}

export const Paragraph = ({ ...props }: ParagraphProps) => <p>{props.text}</p>;
