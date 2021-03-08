import React from 'react';
import clsx from 'clsx';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children})=> {
  return (
    <div className={clsx([
      'py-6',
      'px-6',
      'bg-white',
      'w-full',
      'h-96', 
      'rounded-2xl',
      'text-black',
      'text-xl',
      'text-bold'
    ])}>
      { children }
    </div>
  )
}

export default Card;