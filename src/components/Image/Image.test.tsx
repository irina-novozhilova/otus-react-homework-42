import React from "react";
import { render, screen } from "@testing-library/react";
import { Image } from "./Image";
import "@testing-library/jest-dom";

describe("image", () => {
  it("renders Component", () => {
    render(
      <Image src={"/images/test.jpg"} alt={"alt-test"} title={"title-text"} />
    );
    const image = screen.getByAltText("alt-test") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(screen.getByTitle("title-text")).toBeInTheDocument();
    expect(image.src).toContain("/images/test.jpg");
  });
});
