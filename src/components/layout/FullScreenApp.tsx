import React from "react";
import clsx from "clsx";
import Home from "../screens/Home";
import JoinRoom from "../screens/JoinRoom";
import Lobby from '../screens/Lobby';
import WhiteCardTurn from '../screens/WhiteCardTurn';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Div100vh from "react-div-100vh";

const FullScreenApp = () => {
  return (
    <Div100vh>
      <div
        className={clsx([
          "h-full",
          "flex",
          "flex-col",
          "container",
          "font-semibold",
        ])}
        id="container"
      >
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/join" component={JoinRoom} />
            <Route path="/lobby" component={Lobby}/>
            <Route path="/game/wct" component={WhiteCardTurn}/>
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Router>
      </div>
    </Div100vh>
  );
};

export default FullScreenApp;
