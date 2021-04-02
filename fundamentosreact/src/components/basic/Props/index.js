import React from 'react';

const Props = (props) => {
  const { name, surname, age } = props;

  return (
    <div>
      <h3>Nome: {name} {surname}</h3>
      <h3>Idade: {age}</h3>
    </div>
  );
}

export default Props;