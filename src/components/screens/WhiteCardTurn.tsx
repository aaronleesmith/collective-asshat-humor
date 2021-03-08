import React from "react";
import Button from "../Button";
import GameHeader from "../GameHeader";
import Headline from "../Headline";
import GameContentContainer from "../layout/GameContentContainer";
import SubHeadline from "../SubHeadline";
import TextField from "../TextField";
import clsx from "clsx";
import { GameTitleBar } from '../GameTitleBar';
import Card from '../cards/Card';
import Hand from '../cards/Hand';
export const WhiteCardTurn: React.FC = ({}) => {
  return (
    <>
      <GameHeader inverted showHelp={false} />
      <GameTitleBar>
        It's Kirk's turn... they might be a bit slow if you get my meaning.
      </GameTitleBar>
      <GameContentContainer inverted edgeToEdge={true} className='space-y-2'>
        <Hand>
          <Card>Card 1</Card>
          <Card>Card 2</Card>
        </Hand>
        
        <div className='px-10 w-full'>
          <Button inverted>Select</Button>
        </div>
        
      </GameContentContainer>
    </>
  );
};
export default WhiteCardTurn;
