import React from 'react';
import './Game.scss';
import { Button } from '../../components/Button';
import { Hand } from './Hand/Hand';
import { useParams } from 'react-router';

export const Game = ()=> {
  
  return (
    <div className='game-screen container'>
      <div className='row game-header mb-2'>
        <div className='col-2'>

        </div>
        <div className='col-8 text-center'>
          C.A.H.
        </div>
        <div className='col-2'>
          
        </div>
      </div>
      <div className='row round-text'>
        <div className='col-12 text-center' >
        Envelopes with white powder appeared at MetLife stadium and other sites but the powder appears to be <div className='blank'/> .
        </div>
        
      </div>
      <div className='row card-container mb-3'>
        <Hand/>
      </div>
      <div className='row card-submit'>
        <div className='col-12'>
          <Button type='white'>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Game;