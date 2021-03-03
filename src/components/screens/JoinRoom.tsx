import React from "react";
import clsx from "clsx";
import Button from "../Button";
import Headline from "../Headline";
import SubHeadline from "../SubHeadline";
import TextField from "../TextField";
import GameHeader from "../GameHeader";
import GameContentContainer from "../layout/GameContentContainer";
import Modal from '../layout/Modal';

/**
 * Renders the home screen with options to join or host a game.
 */
export const JoinRoom: React.FC<{ dev_isModalOpen?: boolean }> = ({
  dev_isModalOpen = false,
}) => {
  return (
    <>
      <GameHeader />
      <GameContentContainer>
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
          isOpen={dev_isModalOpen}
        >
          <SubHeadline>
            I know you as random asshat #1. Would you prefer to be called
            something else?
          </SubHeadline>
          <TextField />
          <Button>Join game</Button>
        </Modal>
      </GameContentContainer>
    </>
  );
};

export default JoinRoom;
