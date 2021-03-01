import React from "react";
import clsx from "clsx";
import Button from "../Button";
import Headline from "../Headline";
import SubHeadline from "../SubHeadline";

/**
 * Renders the home screen with options to join or host a game.
 */
export const Home = () => {
  return (
    <div className={clsx(["flex", "px-10", "flex-col"])}>
      <Headline className="mt-10">
        Collective
        <br />
        Asshat
        <br />
        Humor
      </Headline>

      <SubHeadline className="mt-5">An online group card game.</SubHeadline>

      <div
        id="game-start-options"
        className={clsx(["mt-20", "flex", "flex-col", "space-y-6"])}
      >
        <Button>Join</Button>
        <Button inverted>Host</Button>
      </div>
    </div>
  );
};

export default Home;
