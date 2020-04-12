import React from "react";
import "./App.css";
import Div100vh from "react-div-100vh";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import { AttributionFooter } from "./AttributionFooter";
import Landing from "./pages/Landing";
import Join from "./pages/Join";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game/Game";
import GameProvider from './providers/GameProvider';
import getOrCreateClient from './gameClient';

function App() {
  return (
    <React.Fragment>
      <Router>
        <GameProvider client={getOrCreateClient(process.env.REACT_APP_GAME_CLIENT_URL)}>
          <div className="App">
            <Switch>
              <Route path="/join">
                <div className="container-fluid">
                  <div className="row">
                    <Join />
                  </div>
                </div>
              </Route>
              <Route path="/lobby">
                <div className="container-fluid">
                  <div className="row">
                    <Lobby />
                  </div>
                </div>
              </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/">
                <div className="container-fluid">
                  <div className="row">
                    <Landing />
                  </div>
                </div>
              </Route>
            </Switch>

            {/* <div className='row' style={{bottom: 0, position: 'fixed'}}>
            <AttributionFooter/>
          </div> */}
          </div>
        </GameProvider>
        
      </Router>
      
    </React.Fragment>
  );
}

export default App;
