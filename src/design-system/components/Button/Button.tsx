import React from "react";
import { ButtonContainer } from "./button.styles";
import { ButtonProps } from "./button.types";
import buttonData from "./button.json";

export const Button = (props: ButtonProps) => {
  const { node } = buttonData;
  const textNode = node.children.find((child) => child.type === "TEXT");
  const label = textNode ? textNode.characters : "Button";

  return (
    <ButtonContainer {...props}>
      {label}
    </ButtonContainer>
  );
};
