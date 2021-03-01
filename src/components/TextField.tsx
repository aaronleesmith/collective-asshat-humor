import React from "react";
import clsx from "clsx";

export const TextField: React.FC<React.InputHTMLAttributes<any>> = ({
  className,
  ...attributes
}) => {
  return (
    <div>
      <input type="text" className={clsx([
        "w-full",
        "bg-gray-300",
        "uppercase",
        "tracking-wider",
        "font-extrabold",
        "text-2xl",
        "py-2",
        "px-2",
        "border-none",
        "outline-none",
        className
        ])} {...attributes}></input>
    </div>
  );
};

export default TextField;