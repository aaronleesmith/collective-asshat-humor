import React from "react";
import clsx from "clsx";

export const GameContentContainer: React.FC<React.HTMLAttributes<HTMLDivElement> & { inverted?: boolean }> = ({
  children,
  inverted = false,
  className,
  ...rest
}) => {
  return (
    <main
      className={clsx([
        className,
        "flex",
        "px-10",
        "flex-col",
        "flex-grow",
        inverted && "text-white",
        inverted && "bg-black",
        'items-center'
      ])}
      {...rest}
    >
      {children}
    </main>
  );
};

export default GameContentContainer;
