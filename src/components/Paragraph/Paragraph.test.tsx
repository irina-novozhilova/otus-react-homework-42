import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";
import "@testing-library/jest-dom";

describe("header", () => {
    it("renders Component", () => {
        render(<Paragraph text={"Hello test"} />);
        expect(screen.getByText("Hello test")).toBeInTheDocument();
    });
});