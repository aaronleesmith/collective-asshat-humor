import React from 'react';
import clsx from 'clsx';

export const Hero: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...other }) => {
  return (
    <div {...other} className={clsx(['hero', className])}>
      {children}
    </div>
  )
}

export const Sidekick: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...other }) => {
  return (
    <div {...other} className={clsx(['sidekick', className])}>
      {children}
    </div>
  )
}