import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { Hr } from "./Hr";
import "@testing-library/jest-dom";

describe("hr", () => {
    it("renders Component", () => {
        render(<Hr />);
        expect(screen.getByTestId("hr")).toBeInTheDocument();
    });
});