import React, { useState } from "react";
import { Hero, Sidekick } from "../components/Typography";
import { Button } from '../components/Button';
import Modal from 'react-bootstrap/Modal'

const Join: React.FC = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [roomCode, setRoomCode] = useState('');
  const [playerName, setPlayerName] = useState('');

  const handleJoin = ()=> {
    setShowJoinModal(true);
  }

  return (
    <div className="col-12">
      <div className="row mb-4">
        <div className="col-12">
          <Hero>Wow.</Hero>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 mb-2">
          <div className="row sidekick mb-5">
            <div className="col-12">
              You have friends, and they actually want to play with you?
            </div>
          </div>
          <div className="row sidekick">
            <div className="col-12 mb-3">Enter the room code</div>
            <div className="col-12">
              <input type="text" value={roomCode} onChange={e => setRoomCode(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 mb-4'>
          <Button type='black' onClick={handleJoin}>
            Player
          </Button>
        </div>
        <div className='col-12 mb-4'>
          <Button type='white' onClick={handleJoin}>
            Table
          </Button>  
        </div>
        <div className='col-12 text-center' style={{fontSize: 'small'}}>
          * The Table doesn't play but each game needs at least one.
        </div>
      </div>
      <Modal show={showJoinModal} size='lg' centered keyboard={false} backdrop='static'>
        <Modal.Body>
          <div>
            <div className='row'>
              <div className='col-12 sidekick mb-4'>
                I know you as random asshat #1. Would you prefer to be called something else?
              </div>
              <div className='col-12 mb-4'>
                <input type="text" value={playerName} onChange={e => setPlayerName(e.target.value)} />
              </div>
              <div className='col-12'>
                <Button type='black'>
                  Join game
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Join;
