import React, { useState } from 'react';

const Child = (props) => {
  const { onClick } = props;
  const [name, setName] = useState('Bartholomew JoJo Simpson');

  return (
    <div>
      <button onClick={() => {
        onClick(name);
      }}>
        Fornecer informações do aluno
      </button>
    </div>
  );
}

export default Child;