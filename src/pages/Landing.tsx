import React from 'react';
import { Room } from 'colyseus';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Button } from '../components/Button';
import { Hero } from '../components/Typography';
import { Sidekick } from '../components/Typography';
import { getOrCreateClient, createRoom } from '../gameClient';
import { useGameContext } from '../providers/GameProvider';
const Landing: React.FC = ()=> {

  const { createRoom } = useGameContext();

  const createRoomAndGoToLobby = async ()=> {
    createRoom();
  }

  return (
    <div className='col-12'>
      <div className='row mb-4'>
        <div className='col'>
          <Hero>
            Collective Asshat Humor.
          </Hero>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col-10 mb-5'>
          <Sidekick>
            An online group card game.
          </Sidekick>
        </div>      
      </div>
      <div className='row'>
        <div className='col-12 mb-4'>
          <Link to='/join'>
            <Button type='black'>
              Join
            </Button>
          </Link>
        </div>
        <div className='col-12'>
          <Button type='white' onClick={createRoomAndGoToLobby}>
            Host
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Landing;