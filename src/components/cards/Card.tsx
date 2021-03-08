import React from 'react';
import clsx from 'clsx';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement> & { isVisible?: boolean }> = ({children, isVisible = true })=> {
  return (
    <div className={clsx([
      'py-8',
      'px-8',
      isVisible && 'bg-white',
      !isVisible && 'bg-gray-50',
      'w-full',
      'h-96', 
      'rounded-3xl',
      'text-black',
      'text-xl',
      'text-bold'
    ])}>
      { children }
    </div>
  )
}

export default Card;