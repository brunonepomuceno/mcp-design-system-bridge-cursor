import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import "jest-styled-components";

describe("Button", () => {
  it("renders the button with the label from json", () => {
    render(<Button />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies background color from props", () => {
    const backgroundColor = "#ff0000";
    render(<Button backgroundColor={backgroundColor} />);
    expect(screen.getByText("Click me")).toHaveStyleRule(
      "background-color",
      backgroundColor
    );
  });
});
