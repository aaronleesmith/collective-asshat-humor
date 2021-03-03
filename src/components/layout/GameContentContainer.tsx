import React from 'react';
import clsx from 'clsx';

export const GameContentContainer: React.FC<{ inverted?: boolean}> = ({children, inverted=false}) => {
  return (
    <main className={clsx(["flex", "px-10", "flex-col", "flex-grow", inverted && 'text-white', inverted && 'bg-black'])}>
      {children}
    </main>
  )
}

export default GameContentContainer;