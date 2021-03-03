import React from "react";
import clsx from "clsx";
import Headline from "../Headline";
import SubHeadline from "../SubHeadline";
import TextField from "../TextField";
import Modal from "../layout/Modal";
import GameHeader from "../GameHeader";
import GameContentContainer from "../layout/GameContentContainer";
import { GameTitleBar } from "../GameTitleBar";

/**
 * Renders the home screen with options to join or host a game.
 */
export const Lobby: React.FC<{
  dev_hasTable?: boolean;
  dev_hasEnoughPlayers?: boolean;
}> = ({ dev_hasEnoughPlayers = true, dev_hasTable = true }) => {
  return (
    <>
      <GameHeader />
      <GameTitleBar>
        Think you have friends? Invite them to play with you using this room
        code: FNGA
      </GameTitleBar>

      <GameContentContainer>
        <div className="text-center mb-5">
          Waiting for your "friends" to join...
          <br />
          This make take a while.
        </div>

        <div
          id="game-lobby-players"
          className="grid grid-cols-3 gap-6 place-items-center"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
            <div className={clsx(["font-light", "text-center"])}>
              <div
                className={clsx([
                  "rounded-full",
                  "border-black",
                  // todo: replace with real logic
                  _ <= 3 && "border-3",
                  _ > 3 && "bg-gray-200",
                  "p-5",
                  "w-20",
                  "h-20",
                  "items-center",
                  "justify-center",
                  "place-items-center",
                  "text-center",
                ])}
              ></div>
              { _ <= 3 && <span className="break-all">Player</span>}
            </div>
          ))}
        </div>

        <Modal
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          isOpen={!dev_hasEnoughPlayers || !dev_hasTable}
        >
          <SubHeadline>
            {!dev_hasEnoughPlayers && (
              <span>
                Clearly nobody wants to spend time with you but you need at
                least two asshats to play this game.
              </span>
            )}
            {dev_hasEnoughPlayers && !dev_hasTable && (
              <span>
                No
                <br />
                You obviously can't play without a table. Add your "Table" on a
                nearby computer and try again.
              </span>
            )}
          </SubHeadline>
        </Modal>
      </GameContentContainer>
    </>
  );
};

export default Lobby;
