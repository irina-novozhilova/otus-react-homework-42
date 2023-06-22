import React from "react";
import { Header } from "../Header/Header";
import { Hr } from "../Hr/Hr";
import { Paragraph } from "../Paragraph/Paragraph";

interface AccordionProps {
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  text: string;
}

export const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  const paragraph = document.querySelector(".paragraph") as HTMLElement;
  const headingTemplate = /H\d/;
  const target = (event.target as HTMLElement).tagName;
  paragraph.style.display =
    headingTemplate.test(target) && paragraph.style.display !== "none"
      ? "none"
      : "block";
};

export const AccordionText = ({ ...props }: AccordionProps) => (
  <div onClick={handleClick}>
    <Header size={props.size} text={props.title} />
    <div className={"paragraph"}>
      <Hr />
      <Paragraph text={props.text} />
    </div>
  </div>
);
