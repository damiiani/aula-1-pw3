import React from 'react';

const HelloWorld = () => {
  const info = "Primeiro componente JSX";

  return (
    <>
      <h2>Componente HelloWorld</h2>
      <p>{info}</p>
    </>
  );
}

export default HelloWorld;