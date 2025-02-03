import React from "react";

export default function Button({
  type,
  children,
  onClick,
  color = "primary",
  fill = "filled",
  size,
  block,
}) {
  const baseClasses = "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-200";
  const blockClass = block ? "block w-full" : "";

  const fillClasses = {
    filled: `bg-${color} text-${color}-text hover:bg-${color}-hover`,
    outline: `border border-${color} text-${color} hover:bg-${color} hover:text-${color}-text`,
  };

  const sizeClass = size === "large"
    ? "py-3 px-6"
    : size === "small"
      ? "py-1 px-2"
      : "py-2 px-4";


  return (
    <button
      className={`${baseClasses} ${fillClasses[fill]} ${sizeClass} ${blockClass}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
