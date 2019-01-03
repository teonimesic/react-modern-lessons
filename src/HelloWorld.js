import React from 'react';

function HelloWorld(props) {
  const name = props.name;
  return React.createElement('div', null, `Hello ${name}!`);
}

export default HelloWorld;
