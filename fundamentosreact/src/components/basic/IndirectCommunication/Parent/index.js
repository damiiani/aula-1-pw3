import React, { useState } from 'react';

import Child from '../Child';

const Parent = (props) => {
  const [course, setCourse] = useState('Desenvolvimento de Sistemas');
  const [student, setStudent] = useState('');

  function getStudent(name) {
    setStudent(name);
  }

  return (
    <div>
      <h3>Curso: {course}</h3>
      <h3>Aluno: {student}</h3>

      <p>
        <Child onClick={getStudent} />
      </p>
    </div>
  );
}

export default Parent;