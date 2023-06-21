import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { AccordionText } from "./AccordionText";
import "@testing-library/jest-dom";
import {userEvent} from "@storybook/testing-library";

describe("AccordionText", () => {
    it("renders Component", () => {
        render(<AccordionText  size={'h2'} text={'text-test'} title={'title-test'}/>);
        expect(screen.getByTestId("hr")).toBeInTheDocument();
        expect(screen.getByText("text-test")).toBeInTheDocument();
        expect(screen.getByText("title-test")).toBeInTheDocument();
    });

    it("check click", () => {
        const result = render(<AccordionText  size={'h2'} text={'text-test'} title={'title-test'}/>);
        userEvent.click(screen.getByTestId("heading-test"));
        const paragraph = document.querySelector('.paragraph') as HTMLElement;
        expect(paragraph).not.toBeVisible();
        userEvent.click(screen.getByTestId("heading-test"));
        expect(paragraph).toBeVisible();
    });

});