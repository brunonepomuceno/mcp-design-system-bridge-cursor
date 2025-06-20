import React from "react";
import searchInputData from "./SearchInput.json";

// Um ícone de busca simples em SVG para usar no componente
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({
  placeholder = searchInputData.label,
  ...props
}: SearchInputProps) => {
  const styles = searchInputData.styles;

  // Mapeamento simplificado de JSON para classes Tailwind
  // Idealmente, isso seria mais robusto
  const baseClasses = `
    flex
    items-center
    w-full
    font-sans
  `;

  return (
    <div
      className={baseClasses}
      style={{
        backgroundColor: styles.backgroundColor,
        borderRadius: styles.borderRadius,
        border: `${styles.borderWidth} solid ${styles.borderColor}`,
        padding: styles.padding,
        fontFamily: styles.fontFamily,
      }}
    >
      {searchInputData.properties.hasIcon && <SearchIcon />}
      <input
        type="text"
        placeholder={placeholder}
        className="ml-2 w-full bg-transparent outline-none"
        style={{
          fontSize: styles.fontSize,
          color: styles.color,
        }}
        {...props}
      />
    </div>
  );
};
