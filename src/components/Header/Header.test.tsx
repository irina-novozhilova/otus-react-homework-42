import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { Header } from "./Header";
import "@testing-library/jest-dom";

describe("header", () => {
    it("renders Component", () => {
        render(<Header text={"Hello test"}  size={"h1"} />);
        expect(screen.getByText("Hello test")).toBeInTheDocument();
    });
});