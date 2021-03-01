import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import Hamburger from '../Hamburger';
import Home from '../screens/Home';
import JoinRoom from '../screens/JoinRoom';
import CCDisclaimer from '../CCDisclaimer';
import GameHeader from '../GameHeader';
const FullScreenApp = ()=> {
  return (
    <div className={clsx(['min-h-screen', "flex", "flex-col", "container"])} id="container">
      <header>
        <GameHeader/>
      </header>
      <main className="flex-grow">
        <JoinRoom/>
      </main>
      <footer className="flex items-center justify-center mt-5">
        <CCDisclaimer/>
      </footer>
    </div>
  )
}

export default FullScreenApp;