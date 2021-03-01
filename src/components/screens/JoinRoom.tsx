import React from "react";
import clsx from "clsx";
import Button from "../Button";
import Headline from "../Headline";
import SubHeadline from "../SubHeadline";
import TextField from "../TextField";
import Modal from "react-modal";

/**
 * Renders the home screen with options to join or host a game.
 */
export const JoinRoom = () => {
  return (
    <div className={clsx(["flex", "px-10", "flex-col"])}>
      <Headline className="mt-10">Wow.</Headline>

      <SubHeadline className="mt-5">
        You have friends, and they actually want to play with you?
      </SubHeadline>

      <div
        id="game-start-options"
        className={clsx(["mt-10", "flex", "flex-col", "space-y-6"])}
      >
        <SubHeadline>Enter the room code:</SubHeadline>
        <TextField />
        <Button>Player</Button>
        <Button inverted>Table</Button>
      </div>

      <Modal
        isOpen={false}
        preventScroll={true}
        overlayClassName={clsx([
          "fixed",
          "inset-0",
          "bg-gray-500",
          "bg-blur",
          "bg-opacity-50",
        ])}
        className={clsx([
          "absolute",
          "p-4",
          "bg-white",
          "h-1/2",
          "inset-5",
          "outline-none",
          "m-auto",
          "flex", "flex-col", "space-y-6"
        ])}
      >
        <SubHeadline>
          I know you as random asshat #1. Would you prefer to be called
          something else?
        </SubHeadline>
        <TextField />
        <Button>Join game</Button>
      </Modal>
    </div>
  );
};

export default JoinRoom;
