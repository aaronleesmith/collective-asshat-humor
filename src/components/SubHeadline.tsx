import React from "react";
import clsx from "clsx";

export const SubHeadline: React.FC<React.HTMLAttributes<any>> = ({
  children,
  className,
  ...attributes
}) => {
  return (
    <span
      className={clsx([
        "tracking-widest",
        "font-extrabold",
        "text-2xl",
        className,
      ])}
      {...attributes}
    >
      {children}
    </span>
  );
};

export default SubHeadline;
