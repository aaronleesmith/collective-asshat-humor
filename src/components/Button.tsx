import React from "react";
import clsx from "clsx";

const Button: React.FC<
  React.ButtonHTMLAttributes<any> & { inverted?: boolean }
> = ({ children, inverted = false, className, ...buttonProps }) => {
  return (
    <button
      className={clsx([
        inverted && "text-black", 
        !inverted && "text-white",

        inverted && "bg-white",
        !inverted && "bg-black",

        "border-black",
        "border-solid",
        "border-2",

        "uppercase",
        "rounded-lg",
        "tracking-wider",
        "font-extrabold",
        "text-2xl",
        "py-2",
        "min-w-full",
        className
      
      ])}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
