import React, { useRef } from 'react';
import ReactSwipe from 'react-swipe';

export const Hand: React.FC = ()=> {
  const swipeRef = useRef(null);

  const cards = [
    'Two midgets shitting into a bucket.',
    'Science',
    'A bass drop so huge it tears the starry vault asunder to reveal the face of God.'
  ]
  return (
    <ReactSwipe
      ref={swipeRef}
      className='hand-carousel'
      swipeOptions={{continuous: true, widthOfSiblingSlidePreview: 20} as any}>
        { cards.map((card)=> (
          <div className='card'>{card}</div>
        ))}
    </ReactSwipe>
  )
}