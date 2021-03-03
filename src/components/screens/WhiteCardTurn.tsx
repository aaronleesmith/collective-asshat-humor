import React from "react";
import Button from "../Button";
import GameHeader from "../GameHeader";
import Headline from "../Headline";
import GameContentContainer from "../layout/GameContentContainer";
import SubHeadline from "../SubHeadline";
import TextField from "../TextField";
import clsx from "clsx";
import { GameTitleBar } from '../GameTitleBar';

export const WhiteCardTurn: React.FC = ({}) => {
  return (
    <>
      <GameHeader inverted showHelp={false} />
      <GameTitleBar>
        It's Kirk's turn... they might be a bit slow if you get my meaning.
      </GameTitleBar>
      <GameContentContainer inverted>
        
      </GameContentContainer>
    </>
  );
};
export default WhiteCardTurn;
