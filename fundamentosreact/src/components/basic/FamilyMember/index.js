import React from 'react';

const Member = (props) => {
  const { name, surname } = props;

  return (
    <div>
      <p>{name} {surname}</p>
    </div>
  );
}

export default Member;