import React from 'react';
import { LobbyPlayer } from '../components/LobbyPlayer';
import { Button } from '../components/Button';

export const Lobby: React.FC = ()=> {
  return (
    <div className='col-12 lobby'>
      <div className='row mb-3' >
        <div className='col-12 lobby-header text-center'>
          Think you have friends?<br/>
          Invite them to play with you using this room code: FNGA
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-12 lobby-players-title text-center'>
          Waiting for your "friends" to join...<br/>
          This may take a while.
        </div>
      </div>
      <div className='row  ml-1 mr-1 mb-4'>
        <div className='col-4'>
          <LobbyPlayer/>
        </div>
        <div className='col-4'>
        <LobbyPlayer/>
        </div>
        <div className='col-4'>
        <LobbyPlayer/>
        </div>
      </div>
      <div className='row ml-1 mr-1 mb-4'>
        <div className='col-4'>
          <LobbyPlayer/>
        </div>
        <div className='col-4'>
        <LobbyPlayer/>
        </div>
        <div className='col-4'>
        <LobbyPlayer/>
        </div>
      </div>
      <div className='row ml-1 mr-1 mb-5'>
        <div className='col-4'>
          <LobbyPlayer/>
        </div>
        <div className='col-4'>
        <LobbyPlayer/>
        </div>
        <div className='col-4'>
        <LobbyPlayer/>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Button type='black'>
            Start game
          </Button>
        </div>
      </div>
    </div>
  )
} 

export default Lobby;