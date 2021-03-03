import React from "react";
import clsx from "clsx";
import Hamburger from "./Hamburger";
import SubHeadline from "./SubHeadline";
import QuestionMark from "./QuestionMark";

export const GameHeader: React.FC<{
  inverted?: boolean;
  showHelp?: boolean;
  showTitle?: boolean;
}> = ({ inverted, showHelp = true, showTitle = true }) => {
  return (
    <header className={clsx([inverted && 'text-white', inverted && 'bg-black'])}>
      <div
        className={clsx([
          "flex",
          "flex-row",
          "p-3",

          "place-content-center",
          "place-items-center",
        ])}
      >
        <div
          className={clsx([
            "w-1/6",

            "place-content-center",
            "place-items-center",
          ])}
        >
          <Hamburger size={40} />
        </div>
        <div
          className={clsx([
            "flex",
            "flex-grow",

            "place-content-center",
            "place-items-center",
          ])}
        >
          {showTitle && <SubHeadline>C.A.H.</SubHeadline>}
        </div>
        <div
          className={clsx([
            "w-1/6",

            "place-content-center",
            "place-items-center",
          ])}
        >
          {showHelp && <QuestionMark size={30} />}
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
