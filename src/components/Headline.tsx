import React from "react";
import clsx from "clsx";

export const Headline: React.FC<React.HTMLAttributes<any>> = ({
  children,
  className,
  ...attributes
}) => {
  return (
    <span
      className={clsx([
        "text-5xl",
        "tracking-widest",
        "font-extrabold",
        className,
      ])}
      {...attributes}
    >
      {children}
    </span>
  );
};

export default Headline;
