import React from 'react';

import Member from '../FamilyMember';

const Family = (props) => {
  const { surname } = props;

  return (
    <div> 
      <Member name="Homer Jay" surname={surname} />
      <Member name="Marjorie" surname="Bouvier" />
      <Member name="Bartholomew JoJo" surname={surname} />
      <Member name="Lisa Marie" surname={surname} />
      <Member name="Margareth" {...props} />
    </div>
  );
}

export default Family;