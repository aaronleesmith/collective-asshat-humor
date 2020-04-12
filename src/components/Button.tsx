import React from 'react';
import clsx from 'clsx';

export const Button: React.FC<React.HTMLAttributes<HTMLDivElement> & {
  type: 'white' | 'black'
}> = ({ children, className, type, ...other }) => {
  return (
    <div {...other} className={clsx(['game-button', type, className])}>
      {children}
    </div>
  )
}