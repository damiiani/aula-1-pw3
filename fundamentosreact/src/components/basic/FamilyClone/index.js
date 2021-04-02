import React, { cloneElement } from 'react';

const Clone = (props) => {
  const { children } = props;

  return (
    <div>
      {children.map((child) => {
        return cloneElement(child, { ...props });
      })}
    </div>
  );
}

export default Clone;