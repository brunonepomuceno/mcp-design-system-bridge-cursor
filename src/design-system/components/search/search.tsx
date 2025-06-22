import React from "react";
import searchData from "./search.json";

export const Search = () => {
  const { node } = searchData;
  const placeholderNode = node.children.find(
    (child) => child.name === "Placeholder"
  );
  const placeholderText = placeholderNode ? placeholderNode.characters : "";

  const containerStyle: React.CSSProperties = {
    backgroundColor: node.styles.backgroundColor,
    borderWidth: node.styles.borderWidth,
    borderColor: node.styles.borderColor,
    borderStyle: "solid",
    borderRadius: node.styles.borderRadius,
    padding: `${node.paddingTop}px ${node.paddingRight}px ${node.paddingBottom}px ${node.paddingLeft}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Inter",
    width: node.width ? `${node.width}px` : "auto",
  };

  const placeholderStyle: React.CSSProperties = {
    fontSize: "16px",
    color: "#B3B3B3",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#000000",
  };

  return (
    <div style={containerStyle}>
      <span style={placeholderStyle}>{placeholderText}</span>
      <span style={iconStyle}>🔍</span>
    </div>
  );
};
