import React from 'react';
import clsx from 'clsx';

export const LobbyPlayer: React.FC<{ player?: object }> = ( {player} )=> {
  return (
    <div className={clsx(['lobby-player', !player && 'missing', 'rounded-circle'])}>

    </div>
  )
}