import React from "react";
import clsx from "clsx";
import SubHeadline from "./SubHeadline";

export const GameTitleBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx([
        "w-full",
        "bg-black",
        "text-white",
        "px-8",
        "py-6",
        "text-center",
        className,
      ])}
      {...rest}
    >
      {children}
    </div>
  );
};
